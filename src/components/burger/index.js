import React from 'react'
import { BurgerDiv, BurgerLine } from './styles'
import PropTypes from 'prop-types'

export const Burger = ({ isOpen, onClick }) => {
  return (
    <BurgerDiv onClick={onClick}>
      <BurgerLine open={isOpen} first />
      <BurgerLine open={isOpen} second />
      <BurgerLine open={isOpen} third />
    </BurgerDiv>
  )
}

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
