import { useReducer, useEffect, useRef, useCallback } from 'react'
import { initialState, actions, transactionsReducer } from '../reducers/transactionsReducer'
import Http from '../libs/http'

export const useTransactionsData = (params, authorization) => {
  const [state, dispatch] = useReducer(transactionsReducer, initialState)
  const {
    actualBalance, transactions, pendingFetchedData, isFetching,
    error, serverHasMoreTransactions, page, query, transactionsNeedReset
  } = state
  const observer = useRef()

  const lastTransactionRef = useCallback(node => {
    if (isFetching) return
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting && serverHasMoreTransactions) {
        addPage()
      }
    })

    if (node) {
      observer.current.observe(node)
    }
  }, [isFetching, serverHasMoreTransactions])

  useEffect(() => {
    resetRequestState()
  }, [params])

  useEffect(() => {
    updateQuery()
  }, [page])

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => dispatch({ type: actions.CLEAR_ERROR }), 4000)
      return () => clearTimeout(timeout)
    }
  }, [error])

  useEffect(() => {
    if (!transactionsNeedReset && pendingFetchedData) {
      updateTransactionsList(pendingFetchedData.transactionsList, pendingFetchedData.actualBalance)
    }
  }, [transactionsNeedReset])

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
      const response = await Http.instance.get(`transactions?${query}`, authorization)
      if (isMounted) {
        handleServerResponse(response)
      }
    } catch (error) {
      setError()
    }
  }

  const createTransaction = async (newTransaction) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const response = await Http.instance.post('transactions', newTransaction, authorization)
      handleServerResponse(response)
    } catch (error) {
      setError()
    }
  }

  const editTransactionFromServer = async (updates, id) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const response = await Http.instance.put(`transactions/${id}`, updates, authorization)
      handleServerResponse(response)
    } catch (error) {
      setError()
    }
  }

  const deleteTransactionFromServer = async (id) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const response = await Http.instance.delete(`transactions/${id}`, authorization)
      handleServerResponse(response)
    } catch (error) {
      setError()
    }
  }

  const handleServerResponse = ({ error, data }) => {
    if (error) return setError(data)
    if (transactionsNeedReset) return resetTransactions(data)
    if ('transactionsList' in data) return updateTransactionsList(data.transactionsList, data.actualBalance)
    if ('createdTransaction' in data) return resetRequestState()
    if ('updatedTransaction' in data) return updateEditedTransaction(data.updatedTransaction)
    if ('deletedTransaction' in data) return removeDeletedTransaction(data.deletedTransaction)
  }

  const resetTransactions = (data) => {
    dispatch({ type: actions.RESET_TRANSACTIONS, payload: { pendingFetchedData: data } })
  }

  const updateTransactionsList = (transactionsList, responseBalance) => {
    const prevTransactions = [...transactions]
    const updatedTransactions = prevTransactions.concat(transactionsList)
    const serverHasMoreTransactions = (transactionsList.length === 12)
    const newBalance = responseBalance !== null ? responseBalance : actualBalance

    const payload = { transactions: updatedTransactions, serverHasMoreTransactions, actualBalance: newBalance }
    dispatch({ type: actions.UPDATE_TRANSACTIONS, payload })
  }

  const updateEditedTransaction = (updatedTransaction) => {
    const updatedTransactionIndex = transactions
      .findIndex(transaction => transaction.id === updatedTransaction.id)

    const updatedTransactionsList = [...transactions]
    updatedTransactionsList.splice(updatedTransactionIndex, 1, updatedTransaction)

    const payload = { transactions: updatedTransactionsList, serverHasMoreTransactions, actualBalance }

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

    const payload = { transactions: updatedTransactionsList, serverHasMoreTransactions, actualBalance }

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

  const updateQuery = (isReseted = false) => {
    const updatedQuery = isReseted ? `${params}&page=1` : `${params}&page=${page}`
    const payload = { query: updatedQuery }
    dispatch({ type: actions.UPDATE_QUERY, payload })
  }

  const resetRequestState = () => {
    dispatch({ type: actions.RESET_REQUEST_STATE })
    updateQuery(true)
  }

  const setError = (errorMessage = 'There was a problem with the network.') => {
    dispatch({
      type: actions.SET_ERROR,
      payload: { error: errorMessage }
    })
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
