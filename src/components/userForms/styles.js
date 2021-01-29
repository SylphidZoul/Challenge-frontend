import styled, { keyframes, css } from 'styled-components'
import { colors } from '../../styles/colors'

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: ${colors.mainBlue};
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${colors.secBlue};
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
  background-color: rgba(${colors.rgbMainBlue}, 0.85);
  outline-color: ${colors.mainSalmon};
  cursor: pointer;

  &:hover {
  background-color: ${colors.mainBlue};
  }
`

const dots = keyframes`
  0%, 20% {
    content: '.'
  }
  40% {
    content: '..'
  }
  60% {
    content: '...'
  }
  90%, 100% {
    content: ''
  }
`

export const ButtonText = styled.span`
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 16px;
  color: ${colors.mainWhite};

  ${props => props.isFetching && css`
    &::after {
      animation: ${dots} 2s linear infinite;
      content: '';
    }
  `}
`
