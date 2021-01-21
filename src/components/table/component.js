import React from 'react'
import { Transaction } from './transaction'
import { EditableTransaction } from './editableTransaction'
import { TableWrapper, Table, TableCaption, TableHead, TableRow, Field } from './styles'
import PropTypes from 'prop-types'

export const TransactionsTable = ({
  fieldsList,
  transactionsList,
  caption,
  editMode,
  selectedItem,
  isEditable,
  onEdit,
  onDelete,
  onSubmit
}) => {
  return (
    <TableWrapper>
      <Table>
        <TableCaption>
          {caption}
        </TableCaption>
        <TableHead>
          <TableRow>
            {
            fieldsList.map((field, index) => (
              <Field key={index}>
                {field}
              </Field>
            ))
          }
          </TableRow>
        </TableHead>
        <tbody>
          {
            transactionsList.map((transaction, index) => {
              if (editMode && selectedItem === index) {
                return (
                  <EditableTransaction
                    key={transaction.id}
                    transaction={transaction}
                    toggleEdit={onEdit}
                    onSubmit={onSubmit}
                  />
                )
              }
              return (
                <Transaction
                  key={transaction.id}
                  index={index}
                  transaction={transaction}
                  fieldsList={fieldsList}
                  isEditable={isEditable}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              )
            })
          }
        </tbody>
      </Table>
    </TableWrapper>
  )
}

TransactionsTable.propTypes = {
  fieldsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  transactionsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    concept: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string
  })),
  caption: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  selectedItem: PropTypes.number.isRequired,
  isEditable: PropTypes.bool,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
