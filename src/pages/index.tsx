import React from 'react'
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/partials/common/globalStyle'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { theme } from '../components/utils/theme';

const IndexPage = () => ( 
  <ThemeProvider theme={theme}>
    <>
      <SEO title='Home Page' keywords={[`javascript`, `react`, `frontend`, `HTML CSS`]} />
      <GlobalStyle/>
      <Layout></Layout>
    </>
  </ThemeProvider>
)

export default IndexPage
