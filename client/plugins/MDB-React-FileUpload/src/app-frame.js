import React, { Component } from 'react';
import { MDBNavbar, MDBNavItem, MDBNavbarNav, MDBNavLink, MDBNavbarBrand, MDBFreeBird, MDBCol, MDBRow, MDBCardBody, MDBEdgeHeader, MDBContainer } from "mdbreact";

class appFrame extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>
                <MDBNavbar color="unique-color-dark" expand="lg" dark>
                    <MDBNavbarBrand>
                        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="" />
                    </MDBNavbarBrand>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="/">Basic examples</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/usage">Usage</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBNavbar>
                <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
                <MDBFreeBird>
                    <MDBRow>
                        <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
                            <MDBCardBody>
                                <div className="text-center">
                                    <h2 className="h2-responsive mb-4">MDB FILEUPLOAD PLUGIN</h2>
                                    <p>Standard file inputs usually leave a lot to wish for in terms of design, but MDB takes care of
                                  that by enhancing them with Material Design best practices.</p>
                                </div>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBFreeBird>
                <MDBContainer>
                    <MDBRow center className="my-5">
                        <MDBCol md='8'>
                            {this.props.children}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    }
};

export default appFrame;