import React, { useState, useContext } from 'react'
import { NavbarWrapper, Nav, UserData, Ul, Li, NavLink } from './styles'
import { AuthContext } from '../../context/userContext'
import { Burger } from '../burger'
import { HomeIcon } from '../../assets/home'
import { Coins } from '../../assets/coins'
import { ProfileIcon } from '../../assets/profile'
import { ProfilePictureIcon } from '../../assets/profilePicture'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { username, email, isAuth } = useContext(AuthContext)

  const handleOpen = () => {
    setIsOpen(prevState => !prevState)
  }

  if (isAuth) {
    return (
      <NavbarWrapper>
        <Burger
          isOpen={isOpen}
          onClick={handleOpen}
        />
        <Nav isOpen={isOpen}>
          <UserData>
            <ProfilePictureIcon />
            <h4>{username}</h4>
            <p>{email}</p>
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
              <NavLink to='/account'>
                Account
                <ProfileIcon />
              </NavLink>
            </Li>
          </Ul>
        </Nav>
      </NavbarWrapper>
    )
  } else {
    return null
  }
}
