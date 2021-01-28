import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 370px;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 900px;
    padding: 36px 24px;
    border-radius: 16px;
    overflow: hidden;
    background: ${colors.rgbMainWhite};
    background: linear-gradient(
      to right bottom, rgba(${colors.rgbMainWhite}, 0.8), rgba(${colors.rgbMainWhite}, 0.6)
    );
  } 
`

export const Table = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  border-collapse: collapse;
  table-layout: fixed;
`

export const TableCaption = styled.caption`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  line-height: 32px;
  color: ${colors.mainWhite};

  & button{
    float: right;
    display: ${props => props.isEditable ? 'block' : 'none'};
  }

  @media screen and (min-width: 768px) {
    color: ${colors.secBlue};
  
    & button{
      display: none;
    }
  }
`

export const TableHead = styled.thead`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: none;
  clip: rect(0 0 0 0);
  overflow: hidden;

  @media screen and (min-width: 768px){
    width: initial;
    height: initial;
    position: initial;
    margin: 0;
    margin-bottom: 16px;
    clip: none;
    overflow: initial;
  }
`

export const TableRow = styled.tr`
  display: block;
  padding: 6px;
  margin-bottom: 16px;
  border-bottom: 3px solid #ddd;
  border-radius: 12px;
  background-color: rgba(${colors.rgbMainWhite}, 0.8);

  ${props => props.isEditable && css`
    & td:last-child {
      padding: 0;
      border-bottom: none;
    }
  `}

  @media screen and (min-width: 768px) {
    display: table-row;
    margin-bottom: initial;
    border-bottom: 1px solid rgba(${colors.rgbMainBlack}, 0.1);
    background-color: transparent;
  }
`

const cellsStyles = css`
  padding: 8px;
  text-align: center;
`

export const Field = styled.th`
  font-size: 13px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: ${colors.secBlue};
  ${cellsStyles}
`

export const TableCell = styled.td`
  ${cellsStyles}
  border-bottom: 1px solid rgba(${colors.rgbMainBlack}, 0.1);
  display: flex;
  justify-content: ${props => props.label ? 'space-between' : 'center'};
  align-items: center;
  font-size: 14px;
  text-align: right;

  ${props => props.label && css`
    &::before {
      content: '${props => props.label}';
      margin-right: 20%;
      font-weight: 500;
      text-transform: uppercase;
      color: ${colors.secBlue};
    }
  `}

  @media screen and (min-width: 768px) {
    ${cellsStyles}
    display: table-cell;
    padding: 16px 8px;
    border: none;
    &::before {
      content: none;
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 4px;
`

export const MiniButton = styled.button`
  border: none;
  background: transparent;
  outline-color: ${colors.mainSalmon};
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2)
  }
`

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
