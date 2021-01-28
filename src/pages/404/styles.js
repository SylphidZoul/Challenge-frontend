import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { colors } from '../../styles/colors'

export const MessageWrapper = styled.div`
  width: 100%;
  padding: 32px 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.rgbMainWhite};
  background: linear-gradient(
    to right bottom, rgba(${colors.rgbMainWhite}, 0.8), rgba(${colors.rgbMainWhite}, 0.6)
  );
  @media screen and (min-width: 768px) {
    padding: 64px;
  }
`

export const ErrorMessage = styled.h2`
  font-size: 20px;
  color: ${colors.secBlue};
  font-weight: 500;
  letter-spacing: 1.5px;
  text-align: center;
  margin-bottom: 20px;
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${colors.rgbSecBlue};
`
