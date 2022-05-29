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
                            <MDBNavLink to="/">Basic example</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/lightbox">Lightbox</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/custom-component">Custom Component</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBNavbar>
                <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
                <MDBFreeBird>
                    <MDBRow>
                        <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
                            <MDBCardBody>
                                <div className="text-center">
                                    <h2 className="h2-responsive mb-4">MDB Filter PLUGIN</h2>
                                    <p>MD Bootstrap Filter plugin is an extension perfect for introducing vistors to a number of images, which can be freely filtered depending on the category. Easy to use, setup and customize.</p>
                                </div>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBFreeBird>
                <MDBContainer center="true" className="mt-5">
                    {this.props.children}
                </MDBContainer>
            </>
        );
    }
};

export default appFrame;