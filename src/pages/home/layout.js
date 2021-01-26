import styled from 'styled-components'

export const MainLayout = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 56px 20px;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 30px;
  justify-content: center;

  @media screen and (min-width: 1024px) {
  grid-template-columns: minmax(min-content, 900px);
  padding: 50px 5% 50px calc(5% + 270px);
  }

`
