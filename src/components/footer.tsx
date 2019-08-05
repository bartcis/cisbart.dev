import React from "react"
import styled from "styled-components"

import Text from "./partials/common/text"

const BlogFooter = () => (
  <Footer>
    <Text isSmall>© Copyright {new Date().getFullYear()} Bartek Cis</Text>
  </Footer>
)

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.whiteDark};
  color: ${({ theme }) => theme.colors.grey};
  max-width: 600px;
  margin: 4rem auto 0;
`

export default BlogFooter
