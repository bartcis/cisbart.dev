import React from "react"
import { ThemeProvider } from "styled-components"
import styled, { createGlobalStyle } from "styled-components"

import SEO from "../components/seo"
import { theme } from "../components/utils/theme"
import Header from "../components/header"
import SideMenu from "../components/sideMenu"
import homeIcon from "../images/pineapple.svg"
import info from "../images/sign.svg"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const NotFound = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <SEO title="Page not found" keywords={[`javascript`, `frontend`]} />
      <Header />
      <SideMenu />
      <BombingContainer>
        <Bomb />
        <Bomb />
        <Bomb />
        <Bomb />
        <Bomb />
        <Bomb />
        <Bomb />
        <Bomb />
        <Bomb />
        <Bomb />
        <Bomb />
        <Bomb />
      </BombingContainer>
      <Info />
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
      transform: translate(0, -10vh) rotate(0deg);
    }
    to {
      transform: translate(0, 120vh) rotate(360deg);
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: -1;
  position: fixed;
  left: 0;
  top: 0;

  div {
    transform: translateY(-100px);
  }

  div:nth-child(1) {
    width: 5rem;
    height: 5rem;
    animation-duration: 6s;
    animation-timing-function: ease-in-out;
    animation-delay: 2s;
  }
  div:nth-child(2) {
    width: 2.5rem;
    height: 2.5rem;
    animation-duration: 6.5s;
    animation-timing-function: ease-out;
    animation-delay: 4s;
  }
  div:nth-child(3) {
    width: 1.5rem;
    height: 1.5rem;
    animation-duration: 7s;
    animation-timing-function: ease;
    animation-delay: 5s;
  }
  div:nth-child(4) {
    width: 2.75rem;
    height: 2.75rem;
    animation-duration: 7.5s;
    animation-timing-function: ease-in;
    animation-delay: 2.5s;
  }
  div:nth-child(5) {
    width: 1.75rem;
    height: 1.75rem;
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-delay: 5s;
  }
  div:nth-child(6) {
    width: 4rem;
    height: 4rem;
    animation-duration: 6.5s;
    animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9);
    animation-delay: 1.5s;
  }
  div:nth-child(7) {
    width: 3rem;
    height: 3rem;
    animation-duration: 7s;
    animation-timing-function: ease-in-out;
    animation-delay: 2.5s;
  }
  div:nth-child(8) {
    width: 2.25rem;
    height: 2.25rem;
    animation-duration: 7.5s;
    animation-timing-function: ease-out;
    animation-delay: 4.5s;
  }
  div:nth-child(9) {
    width: 3.25rem;
    height: 3.25rem;
    animation-duration: 8s;
    animation-timing-function: ease;
    animation-delay: 0s;
  }
  div:nth-child(10) {
    width: 1rem;
    height: 1rem;
    animation-duration: 8.5s;
    animation-timing-function: ease-in;
    animation-delay: 1s;
  }
  div:nth-child(11) {
    width: 1.75rem;
    height: 1.75rem;
    animation-duration: 9s;
    animation-timing-function: linear;
    animation-delay: 6s;
  }
  div:nth-child(12) {
    width: 2.25rem;
    height: 2.25rem;
    animation-duration: 9.5s;
    animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9);
    animation-delay: 2s;
  }
`
