import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { NavLink as Link } from 'react-router-dom'

export const NavbarWrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 52px;
  z-index: 100;
`

export const Nav = styled.nav`
  width: 270px;
  height: 100vh;
  padding: 30% 24px;
  background-color: rgba(${colors.rgbMainWhite}, 0.8);
  transition: 500ms linear;
  opacity: ${(props) => props.isOpen ? '100%' : '0%'};
  transform: ${(props) => props.isOpen ? 'traslateX(0%)' : 'translateX(-100%)'};

  @media screen and (min-width: 480px) {
    padding: 5% 32px 0;
  }

  @media screen and (min-width: 768px) {
    padding: 30% 32px;
  }

  @media screen and (min-width: 1024px) {
    opacity: 100%;
    transform: none;
  }
`

export const UserData = styled.div`
  width: 100%;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(${colors.rgbMainBlack}, 0.9);

  & h4 {
    margin: 8px 0;
    font-size: 24px;
    font-weight: 600;
    word-break: break-word;
    text-align: center;
  }

  & p {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    word-break: break-word;
  }
`

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Li = styled.li` 
  width: 100%;
  margin-bottom: 32px;
  
  @media screen and (min-width: 480px) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${colors.secBlue};
  font-size: 16px;
  font-weight: 500;
`
