import React, { useReducer, useRef } from 'react'
import { TableRow, TableCell, ButtonsWrapper, MiniButton, Input, Select } from '../styles'
import Confirm from '../../../assets/confirm'
import Cancel from '../../../assets/cancel'
import PropTypes from 'prop-types'

export const AddNewTransaction = ({ toggleCreateMode, onCreateSubmit }) => {
  const [isIngress, toggleIsIngress] = useReducer((prevState) => !prevState, false)

  const conceptRef = useRef()
  const amountRef = useRef()
  const dateRef = useRef()
  const typeRef = useRef()
  const categoryRef = useRef()

  const submitNewTransaction = () => {
    const newTransaction = {
      concept: conceptRef.current.value,
      amount: amountRef.current.value,
      date: dateRef.current.value ? dateRef.current.value : null,
      type: typeRef.current.value,
      category: isIngress ? null : categoryRef.current.value
    }
    onCreateSubmit(newTransaction)
    toggleCreateMode()
  }

  const handleKey = (e) => {
    e.key === 'Enter' && submitNewTransaction()
    e.key === 'Escape' && toggleCreateMode()
  }

  return (
    <TableRow>
      <TableCell label='concept'>
        <Input
          ref={conceptRef}
          type='text'
          onKeyDown={handleKey}
          placeholder='Concept'
        />
      </TableCell>

      <TableCell label='amount'>
        <Input
          ref={amountRef}
          type='number'
          onKeyDown={handleKey}
          min={0}
          max={1000000}
          step='0.01'
          placeholder='Amount'
        />
      </TableCell>

      <TableCell label='date'>
        <Input
          ref={dateRef}
          type='date'
          onKeyDown={handleKey}
        />
      </TableCell>

      <TableCell label='type'>
        <Select
          ref={typeRef}
          defaultValue='EGRESS'
          onChange={() => toggleIsIngress()}
        >
          <option value='EGRESS'>EGRESS</option>
          <option value='INGRESS'>INGRESS</option>
        </Select>
      </TableCell>

      <TableCell label='category'>
        <Select
          ref={categoryRef}
          defaultValue='FOODS'
          disabled={isIngress}
        >
          <option value='FOODS'>FOODS</option>
          <option value='BILLS'>BILLS</option>
          <option value='TRANSPORTS'>TRANSPORTS</option>
          <option value='TRANSFERS'>TRANSFERS</option>
          <option value='OTHERS'>OTHERS</option>
        </Select>
      </TableCell>

      <TableCell>
        <ButtonsWrapper>
          <MiniButton onClick={submitNewTransaction}>
            <Confirm />
          </MiniButton>
          <MiniButton onClick={toggleCreateMode}>
            <Cancel />
          </MiniButton>
        </ButtonsWrapper>
      </TableCell>
    </TableRow>
  )
}

AddNewTransaction.propTypes = {
  toggleCreateMode: PropTypes.func.isRequired,
  onCreateSubmit: PropTypes.func.isRequired
}
