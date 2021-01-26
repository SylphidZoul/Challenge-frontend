import React from 'react'
import { useTransactionsData } from '../../hooks/useTransactionsData'
import { MainLayout } from './layout'
import { TableContainer } from '../../components/table'
import { SpinnerToast } from '../../components/spinnerToast'
import { ErrorToast } from '../../components/errorToast'
import { Balance } from '../../components/balance'

// just for development
const Auth = { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ0ZXN0VXNlciIsImVtYWlsIjoidGVzdGVtYWlsQHRlc3QuY29tIiwiaWF0IjoxNjExNDQ3NTgwLCJleHAiOjE2MTE5NjU5ODB9.Hkijv3r4izym9auxs4_sb_uj_1ItosYlj6kqd4h5gsI' }
const Auth2 = { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ6b3VseGhpa2FydSIsImVtYWlsIjoiem91bHhoaWthcnVAZ2FtYWwuY29tIiwiaWF0IjoxNjExNjAxNzk3LCJleHAiOjE2MTIxMjAxOTd9.3E8ibcMklZD8IBMfRiI9zTLQd46L6ePGRW6SYsawqds' }

const Home = () => {
  const {
    actualBalance,
    transactions,
    isFetching,
    error,
    createTransaction
  } = useTransactionsData('limit=10', Auth)

  return (
    <MainLayout>
      <Balance actualBalance={actualBalance} />
      <TableContainer
        transactionsList={transactions}
        caption='Last transactions'
        onCreateSubmit={createTransaction}
        isEditable
      />
      <ErrorToast errorMessage={error} />
      <SpinnerToast isFetching={isFetching} />
    </MainLayout>
  )
}

export default Home
