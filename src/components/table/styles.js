import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 370px;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 900px;
    padding: 36px 24px;
    border-radius: 24px;
    overflow: hidden;
    background-color: rgba(${colors.rgbMainWhite}, 0.8);
  } 
  @media screen and (min-width: 1024px) {
    width: 70%;
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
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  color: ${colors.mainWhite};
  @media screen and (min-width: 768px) {
    color: ${colors.secBlue}
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

  & td:last-child {
    padding: 0;
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    display: table-row;
    padding: 32px;
    margin-bottom: initial;
    border-bottom: 1px solid #ddd;
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
  display: block;
  font-size: 14px;
  text-align: right;
  border-bottom: 1px solid rgba(${colors.rgbMainBlack}, 0.1);

  &::before {
    content: '${props => props.label}';
    float: left;
    font-weight: 500;
    text-transform: uppercase;
    color: ${colors.secBlue};
  }

  @media screen and (min-width: 768px) {
    ${cellsStyles}
    border: none;
    display: table-cell;
    &::before {
      content: none;
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 8px;
`

export const MiniButtons = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
`
