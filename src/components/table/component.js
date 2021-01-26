import React, { forwardRef } from 'react'
import { Transaction } from './transaction'
import { EditableTransaction } from './editableTransaction'
import { TableWrapper, Table, TableCaption, TableHead, TableRow, Field, MiniButton } from './styles'
import PropTypes from 'prop-types'
import { AddNewTransaction } from './newTransaction'
import { EmptyTBody } from './emptyTBody'
import AddIcon from '../../assets/add'

export const TransactionsTable = forwardRef((
  {
    fieldsList, transactionsList, caption, hasCreateModeOn, hasEditModeOn, selectedItem,
    isEditable, toggleCreateMode, toggleEditMode, onCreateSubmit, onEditSubmit, onDelete
  },
  lastTransactionRef
) => {
  const thereAreTransactions = transactionsList.length !== 0

  return (
    <TableWrapper>
      <Table>

        <TableCaption>
          {thereAreTransactions
            ? (
              <>
                {caption}
                <MiniButton onClick={toggleCreateMode}>
                  <AddIcon />
                </MiniButton>
              </>)
            : 'It seems there are not any transactions yet!'}
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
            !thereAreTransactions
              ? !hasCreateModeOn && (
                <EmptyTBody
                  fieldsList={fieldsList}
                  toggleCreateMode={toggleCreateMode}
                />
                )

              : transactionsList.map((transaction, index) => (
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
    id: PropTypes.number,
    concept: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    category: PropTypes.string
  })),
  caption: PropTypes.string.isRequired,
  hasCreateModeOn: PropTypes.bool.isRequired,
  hasEditModeOn: PropTypes.bool.isRequired,
  selectedItem: PropTypes.number.isRequired,
  toggleCreateMode: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
  onEditSubmit: PropTypes.func,
  onDelete: PropTypes.func
}
