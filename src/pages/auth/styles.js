import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const AuthLayout = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 56px 20px;
  display: grid;
  grid-auto-columns: minmax(270px, 480px);
  grid-auto-rows: min-content;
  grid-gap: 30px;
  justify-content: center;
  align-content: center;
`

export const FormWrapper = styled.div`
  width: 100%;
  min-height: 480px;
  padding: 24px 12%;
  border-radius: 16px;
  background-color: rgba(${colors.rgbMainWhite}, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  & form {
    margin-bottom: 32px;
  }
`

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
  & svg {
    margin-bottom: 8px;
  }

  & h3 {
    font-size: 18px;
    font-weight: 500;
    color: ${colors.secBlue};
    letter-spacing: 2px;
  }
`

export const LinkP = styled.p`
  font-size: 14px;
  color: rgba(${colors.rgbMainBlack}, 0.8);
  align-self: center;
  & a {
    margin-left: 8px;
    text-decoration: none;
    color: ${colors.secBlue}
  }
`
