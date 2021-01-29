import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 370px;
  padding: 48px 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.rgbMainWhite};
  background: linear-gradient(
    to right bottom, rgba(${colors.rgbMainWhite}, 0.8), rgba(${colors.rgbMainWhite}, 0.6)
  );

  @media screen and (min-width: 768px) {
    max-width: 450px;
    padding: 48px 40px;
  }
`

export const DataDiv = styled.div`
  width: 100%;
  margin: 24px 0;
  line-height: 20px;
`

export const DataRow = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

export const Field = styled.h4`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.mainBlue};
`

export const UserValue = styled.p`
  text-align: right;
  width: 50%;
  word-break: break-all;
  color: ${colors.mainBlack};
`

export const LogOutButton = styled.button`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 18px;
  color: ${colors.mainWhite};
  background-color: rgba(${colors.rgbMainBlue}, 0.85);
  outline-color: ${colors.mainSalmon};
  cursor: pointer;

  & svg {
    margin-left: 8px;
  }

  &:hover {
    background-color: ${colors.mainBlue};
  }
`
