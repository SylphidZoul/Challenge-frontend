import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const BalanceWrapper = styled.div`
  width: 100%;
  max-width: 370px;
  padding: 18px 12px;
  border-radius: 12px;
  background-color: rgba(${colors.rgbMainWhite}, 0.8);
  @media screen and (min-width: 768px) {
    max-width: 400px;
    padding: 24px;
    border-radius: 16px;
  }
`

export const H2 = styled.h2`
  color: ${colors.secBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const BalanceSpan = styled.span`
  color: ${props => props.actualBalance >= -1 ? 'olive' : 'crimson'};
  &::before {
    content: '${props => props.actualBalance >= -1 ? '$' : '-$'}';
    display: inline-block;
  }
`