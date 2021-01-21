import React, { useRef } from 'react'
import { TableRow, TableCell, ButtonsWrapper, MiniButtons } from '../styles'
import { Input, Select } from './styles'
import Confirm from '../../../assets/confirm'
import Cancel from '../../../assets/cancel'
import PropTypes from 'prop-types'

export const EditableTransaction = ({ transaction, toggleEdit, onSubmit }) => {
  const formatedDate = new Date(transaction.date).toJSON().slice(0, 10)
  const conceptRef = useRef()
  const amountRef = useRef()
  const dateRef = useRef()
  const categoryRef = useRef()

  const submitChanges = () => {
    const changes = {
      concept: conceptRef.current.value,
      amount: amountRef.current.value,
      date: dateRef.current.value,
      category: categoryRef.current.value
    }
    onSubmit(changes, transaction.id)
    toggleEdit()
  }

  return (
    <TableRow>
      <TableCell label='concept'>
        <Input ref={conceptRef} type='text' defaultValue={transaction.concept} />
      </TableCell>

      <TableCell label='amount'>
        <Input ref={amountRef} type='number' min={0} max={1000000} step='0.01' defaultValue={parseFloat(transaction.amount)} />
      </TableCell>

      <TableCell label='date'>
        <Input ref={dateRef} type='date' defaultValue={formatedDate} />
      </TableCell>

      <TableCell label='type'>
        {transaction.type}
      </TableCell>

      <TableCell label='category'>
        <Select ref={categoryRef} defaultValue={transaction.category}>
          <option value='FOODS'>FOODS</option>
          <option value='BILLS'>BILLS</option>
          <option value='TRANSPORTS'>TRANSPORTS</option>
          <option value='TRANSFERS'>TRANSFERS</option>
          <option value='OTHERS'>OTHERS</option>
        </Select>
      </TableCell>

      <TableCell>
        <ButtonsWrapper>
          <MiniButtons onClick={submitChanges}>
            <Confirm />
          </MiniButtons>
          <MiniButtons onClick={toggleEdit}>
            <Cancel />
          </MiniButtons>
        </ButtonsWrapper>
      </TableCell>
    </TableRow>
  )
}

EditableTransaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    concept: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string
  }),
  toggleEdit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
