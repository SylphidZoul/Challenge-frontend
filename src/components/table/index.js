import React, { useReducer, forwardRef } from 'react'
import { initialState, actions, tableReducer } from '../../reducers/tableReducer'
import { TransactionsTable } from './component'
import PropTypes from 'prop-types'

export const TableContainer = forwardRef((
  { transactionsList, caption, onCreateSubmit, onEditSubmit, onDelete, isEditable },
  lastTransactionRef
) => {
  const [state, dispatch] = useReducer(tableReducer, initialState)

  const toggleCreateMode = () => {
    state.hasCreateModeOn
      ? dispatch({ type: actions.DISABLE_CREATE_MODE })
      : dispatch({ type: actions.ENABLE_CREATE_MODE })
  }

  const toggleEditMode = (index = -1) => {
    if (index === -1) {
      dispatch({ type: actions.DISABLE_EDIT_MODE })
      return
    }
    const payload = { selectedItem: index }
    dispatch({ type: actions.ENABLE_EDIT_MODE, payload })
  }

  return (
    <>
      <TransactionsTable
        {...state}
        fieldsList={['concept', 'amount', 'date', 'type', 'category']}
        transactionsList={transactionsList}
        caption={caption}
        isEditable={isEditable}
        toggleCreateMode={toggleCreateMode}
        toggleEditMode={toggleEditMode}
        onCreateSubmit={onCreateSubmit}
        onEditSubmit={onEditSubmit}
        onDelete={onDelete}
        ref={lastTransactionRef}
      />
    </>
  )
})

TableContainer.propTypes = {
  transactionsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    concept: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    category: PropTypes.string
  })),
  caption: PropTypes.string.isRequired,
  onCreateSubmit: PropTypes.func,
  onEditSubmit: PropTypes.func,
  onDelete: PropTypes.func,
  isEditable: PropTypes.bool
}
