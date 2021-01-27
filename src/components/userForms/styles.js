import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: ${colors.secBlue};
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${colors.mainBlue};
  border-radius: 4px;
  margin-bottom: 32px;
  outline-color: ${colors.mainSalmon};
  font-size: 14px;
  background: transparent;
  box-sizing: border-box;
`

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  border: none;
  margin-top: 8px;
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 16px;
  color: ${colors.mainWhite};
  background-color: rgba(${colors.rgbSecBlue}, 0.85);
  outline-color: ${colors.mainSalmon};
  cursor: pointer;

  &:hover {
  background-color: ${colors.secBlue};
  }
`
