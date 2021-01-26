import React from 'react'
import { BalanceWrapper, H2, BalanceSpan } from './styles'
import PropTypes from 'prop-types'

export const Balance = ({ actualBalance }) => {
  const formatedBalance = Math.abs(parseFloat(actualBalance)).toFixed(2)
  return (
    <BalanceWrapper>
      <H2>
        Actual balance: <BalanceSpan actualBalance={actualBalance}>{formatedBalance}</BalanceSpan>
      </H2>
    </BalanceWrapper>
  )
}

Balance.propTypes = {
  actualBalance: PropTypes.string.isRequired
}
