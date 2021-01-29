import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Foot = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding: 16px;
  background: rgba(${colors.rgbMainWhite}, 0.8);
`

export const Text = styled.p`
  font-size: 12px;
  color: ${colors.mainBlue};
  font-weight: 500;
  text-align: right;
  letter-spacing: 1.5px;

  & a {
    text-decoration: none;
    margin-left: 4px;
    color: inherit;
  }
`
