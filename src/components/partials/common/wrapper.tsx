import styled from 'styled-components';

interface Props {
  isWide: boolean,
  isFlex: boolean,
  isGapped: boolean
}

const Wrapper = styled.div`
  max-width: ${(props: Props) => props.isWide ? '1200px' : '1050px'};
  margin: ${(props: Props) => props.isGapped ? '8rem auto' : 'auto'}; ;
  display: ${(props: Props) => props.isFlex ? 'flex' : 'block'};
  justify-content: ${(props: Props) => props.isFlex ? 'space-between' : 'center'};
  align-items: ${(props: Props) => props.isFlex ? 'center' : 'center'};
  height: 100%;
`;

export default Wrapper;
