import React from "react"
import styled from "styled-components"

import Text from "./partials/common/text"

const BlogFooter = () => (
  <Footer>
    <Revolut href="https://revolutforbusiness.ngih.net/zVBmG">
      <img
        src="https://bedekodzic.pl/wp-content/uploads/2020/03/ab632a12-a240-490f-b485-53b145a7c9eb-1581441379572-min.png"
        alt=""
      />
    </Revolut>
    <Text isSmall>© Copyright {new Date().getFullYear()} Bartek Cis</Text>
    <div></div>
  </Footer>
)

const Revolut = styled.a`
  img {
    width: 100px;
  }
`

const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.whiteDark};
  color: ${({ theme }) => theme.colors.grey};
  max-width: 600px;
  margin: 4rem auto 0;
  display: flex;
  justify-content: space-between;
`

export default BlogFooter
