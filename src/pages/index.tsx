import React from "react"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../components/utils/theme"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO
        title="Home Page"
        keywords={[`javascript`, `react`, `frontend`, `HTML CSS`]}
      />
      <GlobalStyle />
      <Layout></Layout>
    </>
  </ThemeProvider>
)

export default IndexPage
