import React, { useState, useRef } from 'react'
import { MainWrapper, SelectWrapper, Label, Select } from './styles'
import PropTypes from 'prop-types'

export const TransactionsFilters = ({ onChange }) => {
  const [isIngress, setIsIngress] = useState(false)

  const typeRef = useRef()
  const categoryRef = useRef()

  const handleChange = (e) => {
    e.target.value === 'INGRESS' ? setIsIngress(true) : setIsIngress(false)
    const typeQuery = typeRef.current.value ? `type=${typeRef.current.value}` : ''
    const categoryQuery = categoryRef.current.value ? `category=${categoryRef.current.value}` : ''

    onChange(`${typeQuery}&${categoryQuery}`)
  }

  return (
    <MainWrapper>
      <SelectWrapper>
        <Label>Filter by type</Label>
        <Select
          defaultValue=''
          onChange={handleChange}
          ref={typeRef}
        >
          <option value=''>All</option>
          <option value='EGRESS'>Egress</option>
          <option value='INGRESS'>Ingress</option>
        </Select>
      </SelectWrapper>
      <SelectWrapper>
        <Label>Filter by category</Label>
        <Select
          defaultValue=''
          onChange={handleChange}
          disabled={isIngress}
          ref={categoryRef}
        >
          <option value=''>All</option>
          <option value='FOODS'>Foods</option>
          <option value='BILLS'>Bills</option>
          <option value='TRANSPORTS'>Transports</option>
          <option value='TRANSFERS'>Transfers</option>
          <option value='OTHERS'>Others</option>
        </Select>
      </SelectWrapper>
    </MainWrapper>
  )
}

TransactionsFilters.propTypes = {
  onChange: PropTypes.func.isRequired
}
