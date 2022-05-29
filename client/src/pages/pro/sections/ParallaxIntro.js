import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
import './ParallaxIntro.css';

class ParallaxIntro extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }
  render() {
    const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );

    const { collapsed } = this.state;
    return (
      <div id='parallaxintro'>
        <Router>
          <div>
            <MDBNavbar
              color='primary-color'
              style={navStyle}
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <MDBNavLink to='https://mdbootstrap.com/'>
                    <strong className='white-text'>MDB</strong>
                  </MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem>
                      <MDBNavLink to='#'>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#'>About</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className='md-form my-0'>
                          <input
                            className='form-control mr-sm-2'
                            type='text'
                            placeholder='Search'
                            aria-label='Search'
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView
          src={'https://mdbootstrap.com/img/Photos/Others/images/76.jpg'}
          fixed
        >
          <MDBMask className='rgba-white-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
                  MDB
                  <span className='indigo-text font-weight-bold'>Parallax</span>
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
                  Check documentation to see how to use MDBParallax
                </h5>
                <MDBBtn
                  className='btn-indigo'
                  size='lg'
                  href='https://mdbootstrap.com/docs/react/css/parallax/'
                  target='_blank'
                >
                  Parallax documentation
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <main>
          <MDBContainer>
            <MDBRow className='py-5'>
              <MDBCol md='12' className='text-center'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default ParallaxIntro;
