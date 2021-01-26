import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const SelectWrapper = styled.div`
  display: inline-block;
  padding: 18px 12px;
  border-radius: 12px;
  background-color: rgba(${colors.rgbMainWhite}, 0.8);
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 35%;
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 0;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: ${colors.secBlue};
  font-weight: 500;
  margin-bottom: 16px;
`

export const Select = styled.select`
  width: 100%;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid ${colors.mainBlue};
  border-radius: 4px;
  outline-color: ${colors.mainSalmon};
  text-align: left;
  font-size: 18px;
  background: transparent;

  @media screen and (min-width: 768px) {
    width: 90%;
    text-align: center;
    text-align-last: center;
  }
`
