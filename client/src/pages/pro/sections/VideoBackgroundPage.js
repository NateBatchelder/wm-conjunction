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
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
import './VideoBackgroundPage.css';

class VideoBackgroundPage extends React.Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapseID } = this.state;
    const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('navbarCollapse')}
      />
    );
    return (
      <div id='videobackground'>
        <Router>
          <div>
            <MDBNavbar style={navStyle} dark scrolling expand='md' fixed='top'>
              <MDBContainer>
                <MDBNavbarBrand>
                  <span className='white-text'>MDBNavbar</span>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse('navbarCollapse')}
                />
                <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem>
                      <MDBNavLink to='#!'>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink link to='#!'>
                        About
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink link to='#!'>
                        Features
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink link to='#!'>
                        Services
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink link to='#!'>
                        Opinions
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink link to='#!'>
                        Team
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink link to='#!'>
                        Contact
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink link to='!#'>
                        <MDBIcon fab icon='facebook' />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink link to='!#'>
                        <MDBIcon fab icon='twitter' />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink link to='!#'>
                        <MDBIcon fab icon='instagram' />
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapseID && overlay}
          </div>
        </Router>

        <MDBView>
          <MDBMask className='gradient'>
            <video
              className='video-intro'
              poster='https://mdbootstrap.com/img/Photos/Others/background.jpg'
              muted
              loop
              autoPlay
            >
              <source
                src='https://mdbootstrap.com/img/video/animation.mp4'
                type='video/mp4'
              />
            </video>
          </MDBMask>{' '}
          <MDBContainer
            className='d-flex justify-content-center align-items-center px-md-3 px-sm-0'
            style={{ height: '100vh', width: '100%' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h3 className='display-3 font-weight-bold mb-0 pt-md-5'>
                  Creative Agency{' '}
                </h3>
                <hr className='hr-light my-4 w-75' />
                <h4 className='subtext-header mt-2 mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  deleniti consequuntur nihil.
                </h4>
                <MDBBtn outline rounded color='white'>
                  <MDBIcon icon='home' /> Visit us
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

        <MDBContainer>
          <MDBRow className='pt-5 pb-4'>
            <MDBCol md='12' className='text-center'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default VideoBackgroundPage;
