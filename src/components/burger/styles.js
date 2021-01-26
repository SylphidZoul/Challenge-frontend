import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

const TransformLine = (props) => {
  if (props.first) {
    return css`transform: translateY(10px) rotate(135deg);`
  }
  if (props.second) {
    return css`opacity: 0;`
  }
  if (props.third) {
    return css`transform: translateY(-10px) rotate(-135deg);`
  }
}

export const BurgerDiv = styled.div`
  position: absolute;
  margin-left: 3%;
  top: 20%;
  z-index: 10;
  cursor: pointer;
  
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const BurgerLine = styled.div`
  width:30px;
  height:5px;
  margin:5px;
  background-color: ${colors.mainBlack};
  opacity: 80%;
  transition: all 0.3s ease-in-out;
  ${props => props.open && TransformLine(props)}
`
