import React from 'react'
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/partials/common/globalStyle'
import SEO from '../components/seo'
import { theme } from '../components/utils/theme';
import Header from '../components/header'
import SideMenu from '../components/sideMenu'
import Wrapper from '../components/partials/common/wrapper'
import BlogFooter from '../components/footer';

const PageTemplate = () => ( 
  <ThemeProvider theme={theme}>
    <>
      <SEO title='Some Page' keywords={[`javascript`, `react`, `frontend`, `HTML CSS`]} />
      <GlobalStyle/>
      <Header/>
      <SideMenu/>
      <Wrapper isGapped>
        <h1>Hello</h1>

        <BlogFooter/>
      </Wrapper>
    </>
  </ThemeProvider>
)

export default PageTemplate
