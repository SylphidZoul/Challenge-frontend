import React, { useState } from 'react'
import { NavbarWrapper, Nav, UserData, Ul, Li, NavLink } from './styles'
import { Burger } from '../burger'
import { HomeIcon } from '../../assets/home'
import { Coins } from '../../assets/coins'
import { ProfileIcon } from '../../assets/profile'
import { ProfilePictureIcon } from '../../assets/profilePicture'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(prevState => !prevState)
  }
  return (
    <NavbarWrapper>
      <Burger
        isOpen={isOpen}
        onClick={handleOpen}
      />
      <Nav isOpen={isOpen}>
        <UserData>
          <ProfilePictureIcon />
          <h4>Username</h4>
          <p>emaiasdasdasdasdl@emailtest.com</p>
        </UserData>
        <Ul>
          <Li onClick={handleOpen}>
            <NavLink to='/'>
              Home
              <HomeIcon />
            </NavLink>
          </Li>
          <Li onClick={handleOpen}>
            <NavLink to='/transactions'>
              Transactions
              <Coins />
            </NavLink>
          </Li>
          <Li onClick={handleOpen}>
            <NavLink to='/profile'>
              Profile
              <ProfileIcon />
            </NavLink>
          </Li>
        </Ul>
      </Nav>
    </NavbarWrapper>
  )
}
