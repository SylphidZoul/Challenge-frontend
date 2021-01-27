import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/userContext'
import { MainLayout } from '../../styles/mainLayout'
import { TableContainer } from '../../components/table'
import { TransactionsFilters } from '../../components/filters'
import { useTransactionsData } from '../../hooks/useTransactionsData'
import { SpinnerToast } from '../../components/spinnerToast'
import { ErrorToast } from '../../components/errorToast'

const TransactionsPage = () => {
  const [query, setQuery] = useState('limit=12')
  const { token } = useContext(AuthContext)
  const {
    transactions,
    isFetching,
    error,
    lastTransactionRef,
    createTransaction,
    editTransaction,
    deleteTransaction
  } = useTransactionsData(query, token)

  const handleQuery = (newQuery) => {
    setQuery(`limit=12&${newQuery}`)
  }

  return (
    <MainLayout>
      <TransactionsFilters onChange={handleQuery} />
      <SpinnerToast isFetching={isFetching} />
      <TableContainer
        transactionsList={transactions}
        caption='All transactions'
        onCreateSubmit={createTransaction}
        onEditSubmit={editTransaction}
        onDelete={deleteTransaction}
        isEditable
        ref={lastTransactionRef}
      />
      <ErrorToast errorMessage={error} />
    </MainLayout>
  )
}

export default TransactionsPage
