import React, {Component} from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showMenu as showMenuAction } from '../../store/app';

class PageList extends Component {

  render() {
    return (
      <>
        <ListContainer>
          {this.props.pages.map(page => (
            <Page key={page.id} to={page.slug}>
              <Icon src={page.icon.url}/>
              <h2 dangerouslySetInnerHTML={{ __html: page.title }}
                onClick={() => this.props.showMenu('false')}></h2>
            </Page>
          ))
          }
        </ListContainer>
      </>
    )
  }
}

export default connect(
  state => ({ menuState: state.app.menuState }),
  dispatch => ({ showMenu: (status) => dispatch(showMenuAction(status))}),
)(PageList);


const ListContainer = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.whiteDark};
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1.5rem;
`;

const Page = styled(Link)`
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  h2 {
    transition: color .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      color: ${({theme}) => theme.colors.turquoise};
    }
  }
`;
