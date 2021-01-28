import styled, { css } from 'styled-components'

const Layout = css`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 56px 20px;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 30px;
  justify-content: center;
`

export const MainLayout = styled.main`
  ${Layout}
  justify-items: center;
  grid-auto-columns: 1fr;
  @media screen and (min-width: 1024px) {
  grid-template-columns: minmax(min-content, 900px);
  padding: 50px 5% 50px calc(5% + 270px);
  }
`

export const NotAuthLayout = styled.main`
  ${Layout}
  grid-auto-columns: minmax(270px, 480px);
  align-content: center;
`
