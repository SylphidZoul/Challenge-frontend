import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const FormWrapper = styled.div`
  width: 100%;
  min-height: 480px;
  padding: 24px 12%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.rgbMainWhite};
  background: linear-gradient(
    to right bottom, rgba(${colors.rgbMainWhite}, 0.8), rgba(${colors.rgbMainWhite}, 0.6)
  );
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
