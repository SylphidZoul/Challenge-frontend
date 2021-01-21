import React, { useReducer, useEffect } from 'react'
import { initialState, actions, tableReducer } from '../../reducers/tableReducer'
import { TransactionsTable } from './component'
import PropTypes from 'prop-types'

export const TableContainer = ({ transactionsList, caption, onDelete, onSubmit, isEditable }) => {
  const [state, dispatch] = useReducer(tableReducer, initialState)

  const generateFieldsToMap = () => {
    const fieldsList = Object.keys(transactionsList[0]).filter(key => {
      key = key.toUpperCase()
      return (!key.includes('ID'))
    })

    const payload = { fields: fieldsList }

    dispatch({ type: actions.SET_FIELDS_LIST, payload })
  }

  const toggleEdit = (index = -1) => {
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
      onEdit={toggleEdit}
      onDelete={onDelete}
      onSubmit={onSubmit}
    />
  )
}

TableContainer.propTypes = {
  transactionsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    concept: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string
  })),
  caption: PropTypes.string.isRequired,
  isEditable: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
