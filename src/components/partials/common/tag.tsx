import styled from 'styled-components';
import { Link } from 'gatsby'

const Tag = styled(Link)`
  margin: .25rem;
  text-decoration: none;
  border: 1px solid ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.black};
  padding: .25rem .5rem;
  border-radius: 1.5rem;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (min-width: 480px) {
    margin: .5rem;
    padding: .5rem 1rem;
  }
  :hover {
    color: ${({theme}) => theme.colors.grey};
    border: 1px solid ${({theme}) => theme.colors.grey};
    box-shadow: 5px 5px 5px ${({theme}) => theme.colors.whiteDark};
  }
`;

export default Tag;
