import React from 'react'
import { TableRow, TableCell, ButtonsWrapper, MiniButtons } from '../styles'
import Pencil from '../../../assets/pencil'
import Thrash from '../../../assets/thrash'
import PropTypes from 'prop-types'

export const Transaction = ({
  transaction,
  fieldsList,
  index,
  isEditable,
  onEdit,
  onDelete
}) => {
  const formatedDate = new Date(transaction.date).toJSON().slice(0, 10).replace(/-/g, '/')
  return (
    <TableRow index={index}>
      {
        fieldsList.map((key, index) => {
          return (
            <TableCell key={index} label={key}>
              {key === 'date' ? formatedDate : transaction[key]}
            </TableCell>
          )
        }
        )
      }
      {
        isEditable && (
          <TableCell>
            <ButtonsWrapper>
              <MiniButtons onClick={() => onEdit(index)}>
                <Pencil />
              </MiniButtons>
              <MiniButtons onClick={() => onDelete(transaction.id)}>
                <Thrash />
              </MiniButtons>
            </ButtonsWrapper>
          </TableCell>
        )
      }
    </TableRow>
  )
}

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
  isEditable: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
