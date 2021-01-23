import React, { useReducer, useEffect, forwardRef } from 'react'
import { initialState, actions, tableReducer } from '../../reducers/tableReducer'
import { TransactionsTable } from './component'

export const TableContainer = forwardRef((
  { transactionsList, caption, onCreateSubmit, onEditSubmit, onDelete, isEditable },
  lastTransactionRef
) => {
  const [state, dispatch] = useReducer(tableReducer, initialState)

  const generateFieldsToMap = () => {
    const fieldsList = Object.keys(transactionsList[0]).filter(key => {
      key = key.toUpperCase()
      return (!key.includes('ID'))
    })

    const payload = { fields: fieldsList }

    dispatch({ type: actions.SET_FIELDS_LIST, payload })
  }

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

  useEffect(() => {
    if (transactionsList.length !== 0) {
      generateFieldsToMap()
    }
  }, [transactionsList])

  return (
    <TransactionsTable
      {...state}
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
  )
})
