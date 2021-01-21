import styled, { css } from 'styled-components'
import { colors } from '../../../styles/colors'

const inputStyles = css`
  width: 45%;
  height: 24px;
  padding: 0px 4px;
  border: 1px solid ${colors.mainBlue};
  border-radius: 4px;
  outline-color: ${colors.mainSalmon};
  text-align: left;
  font-size: 14px;
  background: transparent;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    width: 90%;
    text-align: center;
    text-align-last: center;
  }
`
export const Input = styled.input`
  ${inputStyles}
`
export const Select = styled.select`
  ${inputStyles}
  height: 28px;

`
