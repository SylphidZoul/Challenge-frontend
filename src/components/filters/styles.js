import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const SelectWrapper = styled.div`
  display: inline-block;
  padding: 18px 12px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: ${colors.rgbMainWhite};
  background: linear-gradient(
    to right bottom, rgba(${colors.rgbMainWhite}, 0.8), rgba(${colors.rgbMainWhite}, 0.6)
  );
  @media screen and (min-width: 768px) {
    width: 35%;
    padding: 24px;
    margin-bottom: 0;
    border-radius: 16px;
  }
`

export const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  font-size: 16px;
  color: ${colors.mainBlue};
  font-weight: 500;
`

export const Select = styled.select`
  width: 100%;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid ${colors.secBlue};
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
