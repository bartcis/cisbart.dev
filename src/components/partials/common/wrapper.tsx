import styled from "styled-components"

interface Props {
  isWide: boolean
  isFlex: boolean
  isGapped: boolean
}

const Wrapper = styled.div`
  max-width: ${(props: Props) => (props.isWide ? "1040px" : "800px")};
  margin: ${(props: Props) => (props.isGapped ? "6rem 1rem 0" : "1rem")};
  display: ${(props: Props) => (props.isFlex ? "flex" : "block")};
  justify-content: ${(props: Props) =>
    props.isFlex ? "space-between" : "center"};
  align-items: ${(props: Props) => (props.isFlex ? "center" : "center")};
  height: 100%;
  @media (min-width: 900px) {
    margin: ${(props: Props) => (props.isGapped ? "6rem auto 0" : "auto")};
  }
`

export default Wrapper
