import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBSideNavLink,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBSideNavCatV5,
  MDBSideNavNavV5,
  MDBSideNavV5,
  MDBSideNavLinkV5
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class SideNavPage extends Component {
  state = {
    sideNavLeft: false,
    sideNavRight: false,

    sideNavLeftV5: false,
    sideNavRightV5: false,
    sideNavFixedHeader: false,
    sideNavSide: false,
    sideNavPush: false,
    sideNavDark: false
  };

  sidenavToggle = sidenavId => () => {
    const sidenavNr = `sideNav${sidenavId}`;
    this.setState({
      [sidenavNr]: !this.state[sidenavNr]
    });
  };

  render() {
    const {
      sideNavRight,
      sideNavLeft,
      sideNavLeftV5,
      sideNavRightV5,
      sideNavFixedHeader,
      sideNavSide,
      sideNavPush,
      sideNavDark
    } = this.state;
    return (
      <Router>
        <MDBContainer>
          <DocsLink title='Sidenav' href='https://mdbootstrap.com/docs/react/navigation/sidenav/' />
          <SectionContainer header='Basic examples' flexCenter>
            <MDBBtn onClick={this.sidenavToggle('Left')}>
              <MDBIcon size='lg' icon='bars' />
            </MDBBtn>
            <MDBBtn onClick={this.sidenavToggle('Right')}>
              <MDBIcon size='lg' icon='bars' />
            </MDBBtn>

            {/* the left SideNav: */}
            <MDBSideNav
              logo='https://mdbootstrap.com/img/logo/mdb-transparent.png'
              hidden
              triggerOpening={sideNavLeft}
              breakWidth={1300}
              className='deep-purple darken-4'
            >
              <li>
                <ul className='social'>
                  <li>
                    <a href='#!'>
                      <MDBIcon brand icon='facebook' />
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <MDBIcon brand icon='pinterest' />
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <MDBIcon brand icon='google-plus' />
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <MDBIcon brand icon='twitter' />
                    </a>
                  </li>
                </ul>
              </li>
              <MDBSideNavNav>
                <MDBSideNavLink to='/other-page' topLevel>
                  <MDBIcon icon='pencil-alt' className='mr-2' />
                  Submit listing
                </MDBSideNavLink>
                <MDBSideNavCat name='Submit blog' id='submit-blog' icon='chevron-right'>
                  <MDBSideNavLink>Submit listing</MDBSideNavLink>
                  <MDBSideNavLink>Registration form</MDBSideNavLink>
                </MDBSideNavCat>
                <MDBSideNavCat name='Instruction' id='instruction' icon='hand-pointer' href='#'>
                  <MDBSideNavLink>For bloggers</MDBSideNavLink>
                  <MDBSideNavLink>For authors</MDBSideNavLink>
                </MDBSideNavCat>
                <MDBSideNavCat name='About' id='about' icon='eye'>
                  <MDBSideNavLink>Instruction</MDBSideNavLink>
                  <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
                </MDBSideNavCat>
                <MDBSideNavCat name='Contact me' id='contact-me' icon='envelope'>
                  <MDBSideNavLink>FAQ</MDBSideNavLink>
                  <MDBSideNavLink>Write a message</MDBSideNavLink>
                </MDBSideNavCat>
              </MDBSideNavNav>
            </MDBSideNav>
            {/* the right SideNav: */}
            <MDBSideNav
              logo='https://mdbootstrap.com/img/logo/mdb-transparent.png'
              hidden
              triggerOpening={sideNavRight}
              className='side-nav-light'
              right
              breakWidth={1300}
            >
              <li>
                <ul className='social'>
                  <li>
                    <a href='#!'>
                      <MDBIcon brand icon='facebook' />
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <MDBIcon brand icon='pinterest' />
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <MDBIcon brand icon='google-plus' />
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <MDBIcon brand icon='twitter' />
                    </a>
                  </li>
                </ul>
              </li>
              <MDBSideNavNav>
                <MDBSideNavCat name='Submit blog' id='submit-blog2' icon='chevron-right'>
                  <MDBSideNavLink className='active'>Submit listing</MDBSideNavLink>
                  <MDBSideNavLink>Registration form</MDBSideNavLink>
                </MDBSideNavCat>
                <MDBSideNavCat name='Instruction' id='instruction2' icon='hand-pointer'>
                  <MDBSideNavLink>For bloggers</MDBSideNavLink>
                  <MDBSideNavLink>For authors</MDBSideNavLink>
                </MDBSideNavCat>
                <MDBSideNavCat name='About' id='about2' icon='eye'>
                  <MDBSideNavLink>Instruction</MDBSideNavLink>
                  <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
                </MDBSideNavCat>
                <MDBSideNavCat name='Contact me' id='contact-me2' icon='envelope'>
                  <MDBSideNavLink>FAQ</MDBSideNavLink>
                  <MDBSideNavLink>Write a message</MDBSideNavLink>
                </MDBSideNavCat>
              </MDBSideNavNav>
            </MDBSideNav>
          </SectionContainer>
          <DocsLink title='Sidenav version v5' href='https://mdbootstrap.com/docs/react/navigation/sidenav/' />
          <SectionContainer header='Basic examples' flexCenter>
            <MDBBtn onClick={this.sidenavToggle('LeftV5')}>
              <MDBIcon size='lg' icon='bars' />
            </MDBBtn>
            <MDBBtn onClick={this.sidenavToggle('RightV5')}>
              <MDBIcon size='lg' icon='bars' />
            </MDBBtn>
          </SectionContainer>
          <SectionContainer header='Fixed Header' flexCenter>
            <MDBBtn onClick={this.sidenavToggle('FixedHeader')}>
              <MDBIcon size='lg' icon='bars' />
            </MDBBtn>
          </SectionContainer>
          <SectionContainer header='Side' flexCenter>
            <MDBBtn onClick={this.sidenavToggle('Side')}>
              <MDBIcon size='lg' icon='bars' />
            </MDBBtn>
          </SectionContainer>{' '}
          <SectionContainer header='Push' flexCenter>
            <MDBBtn onClick={this.sidenavToggle('Push')}>
              <MDBIcon size='lg' icon='bars' />
            </MDBBtn>{' '}
          </SectionContainer>
          <SectionContainer header='Dark' flexCenter>
            <MDBBtn onClick={this.sidenavToggle('Dark')}>
              <MDBIcon size='lg' icon='bars' />
            </MDBBtn>
          </SectionContainer>
          {/* the left SideNav: */}
          <MDBSideNavV5
            logo='https://z9t4u9f6.stackpathcdn.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png'
            hidden
            triggerOpening={sideNavLeftV5}
            breakWidth={1300}
            id='sideNavLeftV5'
          >
            <li>
              <ul className='social'>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='facebook-f' className='blue-grey-text' />
                  </a>
                </li>

                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='linkedin' className='blue-grey-text' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='twitter' className='blue-grey-text' />
                  </a>
                </li>
              </ul>
            </li>
            <MDBSideNavNavV5>
              <MDBSideNavLinkV5 href='https://google.com' topLevel target='_blank' color='warning'>
                <div className='text-center' style={{ minWidth: 40, marginRight: -5 }}>
                  <MDBIcon icon='pencil-alt' />
                </div>
                Submit listing
              </MDBSideNavLinkV5>
              <MDBSideNavCatV5 name='Submit blog' id='submit-blog' icon='chevron-right' color='warning'>
                <MDBSideNavLinkV5 color='warning'>Submit listing</MDBSideNavLinkV5>
                <MDBSideNavLinkV5 color='warning'>Registration form</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Instruction' id='instruction' icon='hand-pointer' href='#' color='warning'>
                <MDBSideNavLinkV5>For bloggers</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>For authors</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='About' id='about' icon='eye' color='warning'>
                <MDBSideNavLinkV5>Instruction</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Monthly meetings</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope' color='warning'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
            </MDBSideNavNavV5>
          </MDBSideNavV5>
          {/* the right SideNav: */}
          <MDBSideNavV5
            logo='https://z9t4u9f6.stackpathcdn.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png'
            hidden
            triggerOpening={sideNavRightV5}
            className='side-nav-light'
            right
            breakWidth={1300}
          >
            <li>
              <ul className='social'>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='facebook' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='pinterest' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='google-plus' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='twitter' />
                  </a>
                </li>
              </ul>
            </li>
            <MDBSideNavNavV5>
              <MDBSideNavCatV5 name='Submit blog' id='submit-blog2' icon='chevron-right'>
                <MDBSideNavLinkV5 className='active'>Submit listing</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Registration form</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Instruction' id='instruction2' icon='hand-pointer'>
                <MDBSideNavLinkV5>For bloggers</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>For authors</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='About' id='about2' icon='eye'>
                <MDBSideNavLinkV5>Instruction</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Monthly meetings</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me2' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
            </MDBSideNavNavV5>
          </MDBSideNavV5>
          <MDBSideNavV5
            logo='https://z9t4u9f6.stackpathcdn.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png'
            hidden
            triggerOpening={sideNavFixedHeader}
            breakWidth={1300}
            fixedHeader
          >
            <li>
              <ul className='social'>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='facebook-f' className='blue-grey-text' />
                  </a>
                </li>

                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='linkedin' className='blue-grey-text' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='twitter' className='blue-grey-text' />
                  </a>
                </li>
              </ul>
            </li>
            <MDBSideNavNavV5>
              <MDBSideNavLinkV5 to='/other-page' topLevel>
                <div className='text-center' style={{ minWidth: 40 }}>
                  <MDBIcon icon='pencil-alt' />
                </div>
                Submit listing
              </MDBSideNavLinkV5>
              <MDBSideNavCatV5 name='Submit blog' id='submit-blog' icon='chevron-right'>
                <MDBSideNavLinkV5>Submit listing</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Registration form</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Instruction' id='instruction' icon='hand-pointer' href='#'>
                <MDBSideNavLinkV5>For bloggers</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>For authors</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='About' id='about' icon='eye'>
                <MDBSideNavLinkV5>Instruction</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Monthly meetings</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
            </MDBSideNavNavV5>
          </MDBSideNavV5>
          <MDBSideNavV5
            logo='https://z9t4u9f6.stackpathcdn.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png'
            hidden
            triggerOpening={sideNavSide}
            breakWidth={1300}
            id='sideNavSide'
            side
          >
            <li>
              <ul className='social'>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='facebook-f' className='blue-grey-text' />
                  </a>
                </li>

                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='linkedin' className='blue-grey-text' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='twitter' className='blue-grey-text' />
                  </a>
                </li>
              </ul>
            </li>
            <MDBSideNavNavV5>
              <MDBSideNavLinkV5 to='/other-page' topLevel>
                <div className='text-center' style={{ minWidth: 40 }}>
                  <MDBIcon icon='pencil-alt' />
                </div>
                Submit listing
              </MDBSideNavLinkV5>
              <MDBSideNavCatV5 name='Submit blog' id='submit-blog' icon='chevron-right'>
                <MDBSideNavLinkV5>Submit listing</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Registration form</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Instruction' id='instruction' icon='hand-pointer' href='#'>
                <MDBSideNavLinkV5>For bloggers</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>For authors</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='About' id='about' icon='eye'>
                <MDBSideNavLinkV5>Instruction</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Monthly meetings</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
            </MDBSideNavNavV5>
          </MDBSideNavV5>
          <MDBSideNavV5
            logo='https://z9t4u9f6.stackpathcdn.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png'
            hidden
            triggerOpening={sideNavPush}
            breakWidth={1300}
            id='sideNavPush'
            push
          >
            <li>
              <ul className='social'>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='facebook-f' className='blue-grey-text' />
                  </a>
                </li>

                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='linkedin' className='blue-grey-text' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <MDBIcon brand icon='twitter' className='blue-grey-text' />
                  </a>
                </li>
              </ul>
            </li>
            <MDBSideNavNavV5>
              <MDBSideNavLinkV5 topLevel>
                <div className='text-center' style={{ minWidth: 40 }}>
                  <MDBIcon icon='pencil-alt' />
                </div>
                Submit listing
              </MDBSideNavLinkV5>
              <MDBSideNavCatV5 name='Submit blog' id='submit-blog' icon='chevron-right'>
                <MDBSideNavLinkV5>Submit listing</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Registration form</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Instruction' id='instruction' icon='hand-pointer' href='#'>
                <MDBSideNavLinkV5>For bloggers</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>For authors</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='About' id='about' icon='eye'>
                <MDBSideNavLinkV5>Instruction</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Monthly meetings</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope'>
                <MDBSideNavLinkV5>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
            </MDBSideNavNavV5>
          </MDBSideNavV5>
          <MDBSideNavV5
            logo='https://z9t4u9f6.stackpathcdn.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png'
            hidden
            triggerOpening={sideNavDark}
            breakWidth={1300}
            id='sideNavDark'
            dark
          >
            <MDBSideNavNavV5>
              <MDBSideNavLinkV5 href='https://google.com' topLevel target='_blank' color='warning'>
                <div className='text-center' style={{ minWidth: 40, marginRight: -5 }}>
                  <MDBIcon icon='pencil-alt' />
                </div>
                Submit listing
              </MDBSideNavLinkV5>
              <MDBSideNavCatV5 name='Submit blog' id='submit-blog' icon='chevron-right' color='warning'>
                <MDBSideNavLinkV5 color='warning'>Submit listing</MDBSideNavLinkV5>
                <MDBSideNavLinkV5 color='warning'>Registration form</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Instruction' id='instruction' icon='hand-pointer' href='#' color='warning'>
                <MDBSideNavLinkV5>For bloggers</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>For authors</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='About' id='about' icon='eye' color='warning'>
                <MDBSideNavLinkV5>Instruction</MDBSideNavLinkV5>
                <MDBSideNavLinkV5>Monthly meetings</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
              <MDBSideNavCatV5 name='Contact me' id='contact-me' icon='envelope' color='warning'>
                <MDBSideNavLinkV5 color='warning'>FAQ</MDBSideNavLinkV5>
                <MDBSideNavLinkV5 color='warning'>Write a message</MDBSideNavLinkV5>
              </MDBSideNavCatV5>
            </MDBSideNavNavV5>
          </MDBSideNavV5>
        </MDBContainer>
      </Router>
    );
  }
}

export default SideNavPage;
