import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles/colors'

const spin = keyframes`
  from { 
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const fallFromAbove = keyframes`
  from {
    transform: translateY(-90%);
  }
  to {
    transform: translateY(0%);
  }
`

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 5%;
  left: calc(50% - 20px);
  padding: 10px;
  border-radius: 50%;
  background: rgba(${colors.rgbSecWhite}, 0.7);
  animation: ${fallFromAbove} 0.3s ease-out;
`

export const Spinner = styled.div`
  margin: 0 auto;
  border: 5px solid rgba(${colors.rgbSecBlue}, 0.7);
  border-top: 5px solid ${colors.mainBlue};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 0.75s linear infinite;
`
