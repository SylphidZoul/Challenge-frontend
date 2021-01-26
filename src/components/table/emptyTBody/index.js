import React from 'react'
import { TableRow, TableCell, MiniButton } from '../styles'
import Add from '../../../assets/add'
import PropTypes from 'prop-types'

export const EmptyTBody = ({ fieldsList, toggleCreateMode }) => {
  return (
    <>
      <TableRow>
        {fieldsList.map(field => (
          <TableCell
            label={field}
            key={field}
          >
            -
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell>
          <MiniButton onClick={toggleCreateMode}>
            <Add />
            <p>
              Add your first transaction
            </p>
          </MiniButton>
        </TableCell>
      </TableRow>
    </>
  )
}

EmptyTBody.propTypes = {
  fieldsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleCreateMode: PropTypes.func.isRequired
}
