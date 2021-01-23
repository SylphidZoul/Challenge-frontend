import React, { forwardRef } from 'react'
import { TableRow, TableCell, ButtonsWrapper, MiniButton } from '../styles'
import Pencil from '../../../assets/pencil'
import Thrash from '../../../assets/thrash'
import PropTypes from 'prop-types'

export const Transaction = forwardRef((
  { transaction, fieldsList, index, isEditable, toggleEditMode, onDelete },
  lastTransactionRef
) => {
  const formatedDate = new Date(transaction.date).toJSON().slice(0, 10).replace(/-/g, '/')

  return (
    <TableRow isEditable={isEditable} ref={lastTransactionRef}>
      {
        fieldsList.map((key, index) => {
          return (
            <TableCell key={index} label={key}>
              {key === 'date' ? formatedDate : transaction[key] || '-'}
            </TableCell>
          )
        }
        )
      }
      {
        isEditable && (
          <TableCell>
            <ButtonsWrapper>
              <MiniButton onClick={() => toggleEditMode(index)}>
                <Pencil />
              </MiniButton>
              <MiniButton onClick={() => onDelete(transaction.id)}>
                <Thrash />
              </MiniButton>
            </ButtonsWrapper>
          </TableCell>
        )
      }
    </TableRow>
  )
})

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    concept: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string
  }),
  fieldsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  isEditable: PropTypes.bool,
  toggleEditMode: PropTypes.func,
  onDelete: PropTypes.func
}
