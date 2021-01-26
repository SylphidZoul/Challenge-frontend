import { useReducer, useEffect, useRef, useCallback } from 'react'
import { initialState, actions, transactionsReducer } from '../reducers/transactionsReducer'

export const useTransactionsData = (params, authorization) => {
  const [state, dispatch] = useReducer(transactionsReducer, initialState)
  const { actualBalance, transactions, isFetching, error, hasMore, page, query } = state
  const observer = useRef()

  const lastTransactionRef = useCallback(node => {
    if (isFetching) return
    if (observer.current) observer.current.disconnect()
    observer.current = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        addPage()
      }
    })
    if (node) observer.current.observe(node)
  }, [isFetching, hasMore])

  useEffect(() => {
    updateQuery()
  }, [page])

  useEffect(() => {
    resetState()
  }, [params])

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => dispatch({ type: actions.CLEAR_ERROR }), 4000)
      return () => clearTimeout(timeout)
    }
  }, [error])

  useEffect(async () => {
    let isMounted = true
    if (query) {
      fetchTransactions(isMounted)
    }
    return () => (isMounted = false)
  }, [query])

  const fetchTransactions = async (isMounted) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const res = await window.fetch(`http://localhost:3004/transactions?${query}`,
        {
          headers: authorization
        }
      )
      const response = await res.json()
      if (isMounted) {
        handleServerResponse(response)
      }
    } catch (error) {
      dispatch({
        type: actions.SET_ERROR,
        payload: { error: 'There was a problem with the network.' }
      })
    }
  }

  const createTransaction = async (newTransaction) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const res = await window.fetch('http://localhost:3004/transactions',
        {
          method: 'POST',
          body: JSON.stringify(newTransaction),
          headers: {
            ...authorization,
            'Content-type': 'application/json'
          }
        }
      )
      const response = await res.json()
      handleServerResponse(response)
    } catch (error) {
      dispatch({
        type: actions.SET_ERROR,
        payload: { error: 'There was a problem with the network.' }
      })
    }
  }

  const editTransactionFromServer = async (updates, id) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const res = await window.fetch(`http://localhost:3004/transactions/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify(updates),
          headers: {
            ...authorization,
            'Content-type': 'application/json'
          }
        }
      )
      const response = await res.json()
      handleServerResponse(response)
    } catch (error) {
      dispatch({
        type: actions.SET_ERROR,
        payload: { error: 'There was a problem with the network.' }
      })
    }
  }

  const deleteTransactionFromServer = async (id) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const res = await window.fetch(`http://localhost:3004/transactions/${id}`,
        {
          method: 'DELETE',
          headers: authorization
        }
      )
      const response = await res.json()
      handleServerResponse(response)
    } catch (error) {
      dispatch({
        type: actions.SET_ERROR,
        payload: { error: 'There was a problem with the network.' }
      })
    }
  }

  const handleServerResponse = ({ error, data }) => {
    if (error) return dispatch({ type: actions.SET_ERROR, payload: { error: data } })
    if ('transactionsList' in data) return updateTransactionsList(data.transactionsList, data.actualBalance)
    if ('createdTransaction' in data) return resetState()
    if ('updatedTransaction' in data) return updateEditedTransaction(data.updatedTransaction)
    if ('deletedTransaction' in data) return removeDeletedTransaction(data.deletedTransaction)
  }

  const updateTransactionsList = (transactionsList, responseBalance) => {
    const prevTransactions = [...transactions]
    const updatedTransactions = prevTransactions.concat(transactionsList)
    const hasMore = (transactionsList.length === 12)
    const isFetching = false
    const newBalance = responseBalance !== null ? responseBalance : actualBalance

    const payload = { transactions: updatedTransactions, hasMore, isFetching, actualBalance: newBalance }
    dispatch({ type: actions.UPDATE_TRANSACTIONS, payload })
  }

  const updateEditedTransaction = (updatedTransaction) => {
    const updatedTransactionIndex = transactions
      .findIndex(transaction => transaction.id === updatedTransaction.id)

    const updatedTransactionsList = [...transactions]
    updatedTransactionsList.splice(updatedTransactionIndex, 1, updatedTransaction)

    const isFetching = false
    const payload = { transactions: updatedTransactionsList, hasMore, isFetching, actualBalance }

    if (transactions[updatedTransactionIndex].amount !== updatedTransaction.amount) {
      const balance = parseFloat(actualBalance)
      const oldAmount = parseFloat(transactions[updatedTransactionIndex].amount)
      const updatedAmount = parseFloat(updatedTransaction.amount)

      const newBalance = updatedTransaction.type === 'EGRESS'
        ? balance + oldAmount - updatedAmount
        : balance - oldAmount + updatedAmount

      payload.actualBalance = newBalance.toFixed(2)
    }

    dispatch({ type: actions.UPDATE_TRANSACTIONS, payload })
  }

  const removeDeletedTransaction = (deletedTransaction) => {
    const deletedTransactionIndex = transactions
      .findIndex((transaction) => transaction.id === parseInt(deletedTransaction))
    const updatedTransactionsList = transactions
      .filter((transaction) => transaction.id !== parseInt(deletedTransaction))

    const isFetching = false
    const payload = { transactions: updatedTransactionsList, hasMore, isFetching, actualBalance }

    const balance = parseFloat(actualBalance)
    const deletedAmount = parseFloat(transactions[deletedTransactionIndex].amount)

    const newBalance = transactions[deletedTransactionIndex].type === 'EGRESS'
      ? balance + deletedAmount
      : balance - deletedAmount

    payload.actualBalance = newBalance.toFixed(2)

    dispatch({ type: actions.UPDATE_TRANSACTIONS, payload })
  }

  const addPage = () => {
    const updatedPage = page + 1
    const payload = { page: updatedPage }
    dispatch({ type: actions.ADD_PAGE, payload })
  }

  const updateQuery = () => {
    const updatedQuery = `${params}&page=${page}`
    const payload = { query: updatedQuery }
    dispatch({ type: actions.UPDATE_QUERY, payload })
  }

  const resetState = () => {
    dispatch({ type: actions.RESET })
    updateQuery()
  }

  return {
    actualBalance,
    transactions,
    isFetching,
    error,
    lastTransactionRef,
    createTransaction,
    editTransaction: editTransactionFromServer,
    deleteTransaction: deleteTransactionFromServer
  }
}
