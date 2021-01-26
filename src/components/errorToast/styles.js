import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Toast = styled.div`
  position: fixed;
  left: calc(50% - 150px);
  bottom: 5%;
  width: 300px;
  padding: 8px 28px 8px 16px;
  border: 2px double crimson;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  background: rgba(${colors.rgbMainWhite}, 0.9);
`
export const Message = styled.h3`
  font-size: 14px;
  letter-spacing: 3px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: crimson;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 4px;
  top: 2px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  font-weight: 700;
  color: crimson;
  cursor: pointer;
`
