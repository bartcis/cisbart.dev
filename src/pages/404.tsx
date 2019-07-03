import React from 'react'
import { ThemeProvider } from 'styled-components'
import styled, { createGlobalStyle } from 'styled-components'

import SEO from '../components/seo'
import { theme } from '../components/utils/theme'
import Header from '../components/header'
import SideMenu from '../components/sideMenu'
import homeIcon from '../images/pineapple.svg'
import info from '../images/sign.svg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const NotFound = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle/>
      <SEO title='Page not found' keywords={[`javascript`, `frontend`]} />
      <Header/>
      <SideMenu/>
      <BombingContainer>
        <Bomb/>
        <Bomb/>
        <Bomb/>
        <Bomb/>
        <Bomb/>
        <Bomb/>
        <Bomb/>
        <Bomb/>
        <Bomb/>
        <Bomb/>
        <Bomb/>
        <Bomb/>
      </BombingContainer>
      <Info/>
    </>
  </ThemeProvider>
)

export default NotFound

const Info = styled.div`
    background-image: url(${info});
    background-repeat: no-repeat;
    background-position: center;
    width: 300px;
    height: 200px;
    margin: 40vh auto;
    @media (min-width: 600px) {
      width: 500px;
      height: 350px;
      margin: 20vh auto;
    }
`

const Bomb = styled.div`
  @keyframes falling {
    from {
      transform:
        translate(0, 0)
        rotate(0deg)
    }
    to {
      transform:
        translate(0, 120vh)
        rotate(360deg)
    }
  }
  width: 5rem;
  height: 5rem;
  background-image: url(${homeIcon});
  background-repeat: no-repeat;
  background-position: center;
  animation: falling;
  animation-iteration-count: infinite;
`

const BombingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: -1;
  position: fixed;
  left: 0;
  top: 0;

  div:nth-child(3n+0) {
    width: 1.5rem;
    height: 1.5rem;
  }
  div:nth-child(3n+1) {
    width: 2.5rem;
    height: 2.5rem;
  }
  div:nth-child(3n+2) {
    width: 3.5rem;
    height: 3.5rem;
  }
  div:nth-child(3n+3) {
    width: 4.5rem;
    height: 4.5rem;
  }
  div:nth-child(n+0) {
    animation-duration: 6s;
    animation-timing-function: ease-in-out;
  }
  div:nth-child(n+1) {
    animation-duration: 6.5s;
    animation-timing-function: ease-out;
  }
  div:nth-child(n+2) {
    animation-duration: 7s;
    animation-timing-function: ease;
  }
  div:nth-child(n+3) {
    animation-duration: 7.5s;
    animation-timing-function: ease-in;
  }
  div:nth-child(n+4) {
    animation-duration: 6s;
    animation-timing-function: linear;
  }
  div:nth-child(n+5) {
    animation-duration: 6.5s;
    animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9);
  }
  div:nth-child(n+6) {
    animation-duration: 7s;
    animation-timing-function: ease-in-out;
  }
  div:nth-child(n+7) {
    animation-duration: 7.5s;
    animation-timing-function: ease-out;
  }
  div:nth-child(n+8) {
    animation-duration: 8s;
    animation-timing-function: ease;
  }
  div:nth-child(n+9) {
    animation-duration: 8.5s;
    animation-timing-function: ease-in;
  }
  div:nth-child(n+10) {
    animation-duration: 9s;
    animation-timing-function: linear;
  }
  div:nth-child(n+11) {
    animation-duration: 9.5s;
    animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9);
  }
  div:nth-child(4n+0) {
    animation-delay: 0s;
  }
  div:nth-child(4n+1) {
    animation-duration: 1s;
  }
  div:nth-child(4n+2) {
    animation-duration: 2s;
  }
`