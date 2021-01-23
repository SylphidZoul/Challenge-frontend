import React, { forwardRef } from 'react'
import { Transaction } from './transaction'
import { EditableTransaction } from './editableTransaction'
import { TableWrapper, Table, TableCaption, TableHead, TableRow, Field, MiniButton } from './styles'
import PropTypes from 'prop-types'
import { AddNewTransaction } from './newTransaction'
import AddIcon from '../../assets/add'

export const TransactionsTable = forwardRef((
  {
    fieldsList, transactionsList, caption, hasCreateModeOn, hasEditModeOn, selectedItem,
    isEditable, toggleCreateMode, toggleEditMode, onCreateSubmit, onEditSubmit, onDelete
  },
  lastTransactionRef
) => {
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
                <Field key={index + field}>
                  {field}
                </Field>
              ))
            }

            {
              isEditable &&
                <Field onClick={toggleCreateMode}>
                  <MiniButton>
                    <AddIcon />
                  </MiniButton>
                </Field>
            }
          </TableRow>
        </TableHead>

        <tbody>
          {
            hasCreateModeOn && (
              <AddNewTransaction
                toggleCreateMode={toggleCreateMode}
                onCreateSubmit={onCreateSubmit}
              />
            )
          }

          {
            transactionsList.map((transaction, index) => (
              (hasEditModeOn && selectedItem === index)
                ? (
                  <EditableTransaction
                    key={transaction.id}
                    currentTransaction={transaction}
                    toggleEditMode={toggleEditMode}
                    onEditSubmit={onEditSubmit}
                  />
                  )
                : (
                  <Transaction
                    key={transaction.id}
                    index={index}
                    transaction={transaction}
                    fieldsList={fieldsList}
                    isEditable={isEditable}
                    toggleEditMode={toggleEditMode}
                    onDelete={onDelete}
                    {... transactionsList.length === index + 1 && { ref: lastTransactionRef }}
                  />
                  )
            ))
          }
        </tbody>
      </Table>
    </TableWrapper>
  )
})

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
  hasCreateModeOn: PropTypes.bool.isRequired,
  hasEditModeOn: PropTypes.bool.isRequired,
  selectedItem: PropTypes.number.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
  onEditSubmit: PropTypes.func,
  onDelete: PropTypes.func
}
