import React, { useState } from 'react'
import { MainLayout } from './layout'
import { TableContainer } from '../../components/table'
import { TransactionsFilters } from '../../components/filters'
import { useTransactionsData } from '../../hooks/useTransactionsData'
import { SpinnerToast } from '../../components/spinnerToast'
import { ErrorToast } from '../../components/errorToast'

const Auth = { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ0ZXN0VXNlciIsImVtYWlsIjoidGVzdGVtYWlsQHRlc3QuY29tIiwiaWF0IjoxNjExNDQ3NTgwLCJleHAiOjE2MTE5NjU5ODB9.Hkijv3r4izym9auxs4_sb_uj_1ItosYlj6kqd4h5gsI' }

const TransactionsPage = () => {
  const [query, setQuery] = useState('limit=12')
  const {
    transactions,
    isFetching,
    error,
    lastTransactionRef,
    createTransaction,
    editTransaction,
    deleteTransaction
  } = useTransactionsData(query, Auth)

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
