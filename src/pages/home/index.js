import React, { useContext } from 'react'
import { AuthContext } from '../../context/userContext'
import { useTransactionsData } from '../../hooks/useTransactionsData'
import { MainLayout } from '../../styles/mainLayout'
import { TableContainer } from '../../components/table'
import { SpinnerToast } from '../../components/spinnerToast'
import { ErrorToast } from '../../components/errorToast'
import { Balance } from '../../components/balance'

const Home = () => {
  const { token } = useContext(AuthContext)
  const {
    actualBalance,
    transactions,
    isFetching,
    error,
    createTransaction
  } = useTransactionsData('limit=10', token)

  return (
    <MainLayout>
      <Balance actualBalance={actualBalance} />
      <TableContainer
        transactionsList={transactions}
        caption='Last transactions'
        onCreateSubmit={createTransaction}
      />
      <ErrorToast errorMessage={error} />
      <SpinnerToast isFetching={isFetching} />
    </MainLayout>
  )
}

export default Home
