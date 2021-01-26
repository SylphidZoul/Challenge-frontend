import React, { useRef } from 'react'
import { TableRow, TableCell, ButtonsWrapper, MiniButton, Input, Select } from '../styles'
import Confirm from '../../../assets/confirm'
import Cancel from '../../../assets/cancel'
import PropTypes from 'prop-types'

export const EditableTransaction = ({ currentTransaction, toggleEditMode, onEditSubmit }) => {
  const formatedDate = new Date(currentTransaction.date).toJSON().slice(0, 10)
  const conceptRef = useRef()
  const amountRef = useRef()
  const dateRef = useRef()
  const categoryRef = useRef()

  const submitChanges = () => {
    const changes = {
      concept: conceptRef.current.value,
      amount: amountRef.current.value,
      date: dateRef.current.value,
      ...categoryRef.current && { category: categoryRef.current.value }
    }
    onEditSubmit(changes, currentTransaction.id)
    toggleEditMode()
  }

  const handleKey = (e) => {
    e.key === 'Enter' && submitChanges()
    e.key === 'Escape' && toggleEditMode()
  }

  return (
    <TableRow>
      <TableCell label='concept'>
        <Input
          ref={conceptRef}
          type='text'
          onKeyDown={handleKey}
          defaultValue={currentTransaction.concept}
        />
      </TableCell>

      <TableCell label='amount'>
        <Input
          ref={amountRef}
          type='number'
          onKeyDown={handleKey}
          defaultValue={parseFloat(currentTransaction.amount)}
        />
      </TableCell>

      <TableCell label='date'>
        <Input
          ref={dateRef}
          type='date'
          onKeyDown={handleKey}
          defaultValue={formatedDate}
        />
      </TableCell>

      <TableCell label='type'>
        {currentTransaction.type}
      </TableCell>

      {
        currentTransaction.type === 'EGRESS'
          ? (
            <TableCell label='category'>
              <Select
                ref={categoryRef}
                defaultValue={currentTransaction.category}
              >
                <option value='FOODS'>FOODS</option>
                <option value='BILLS'>BILLS</option>
                <option value='TRANSPORTS'>TRANSPORTS</option>
                <option value='TRANSFERS'>TRANSFERS</option>
                <option value='OTHERS'>OTHERS</option>
              </Select>
            </TableCell>
            )
          : (
            <TableCell label='category'>
              -
            </TableCell>
            )
      }

      <TableCell>
        <ButtonsWrapper>
          <MiniButton onClick={submitChanges}>
            <Confirm />
          </MiniButton>
          <MiniButton onClick={toggleEditMode}>
            <Cancel />
          </MiniButton>
        </ButtonsWrapper>
      </TableCell>
    </TableRow>
  )
}

EditableTransaction.propTypes = {
  currentTransaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    concept: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string
  }),
  toggleEditMode: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired
}
