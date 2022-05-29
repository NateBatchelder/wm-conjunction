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
                    </MDBNavbarNav>
                </MDBNavbar>
                <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
                <MDBFreeBird>
                    <MDBRow>
                        <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
                            <MDBCardBody>
                                <div className="text-center">
                                    <h2 className="h2-responsive mb-4">MDB TABLE EDITOR PLUGIN</h2>
                                    <p>React Bootstrap Table Editor is a lightweight plugin that  allows you to add, edit and remove rows.</p>
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