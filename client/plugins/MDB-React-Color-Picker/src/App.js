import React, { Component } from "react";
import AppFrame from './app-frame'
import MDBColorPicker from 'mdb-react-color-picker';
import { MDBCard, MDBCardBody, MDBBtn, MDBRow, MDBCol, ListGroup, ListGroupItem } from 'mdbreact'
import './index.css';

class App extends Component {

  state = {
    colorPicker1: false,
    colorPickerValue1: 'rgba(48, 48, 48, 1)',
    colorPicker2: false,
    colorValue: '',
    colorPicker3: false,
    colorPickerValue3: 'rgba(252, 253, 255, 1)',
    colorPicker4: false,
    colorPickerValue4: 'rgba(48, 48, 48, 1)',
    colorPicker5: false,
    colorPickerValue5: '',
    colorPicker6: false,
    colorPickerValue6: {
      hex: "#fffe00",
      cmyk: "cmyk( 0%, 0%, 100%, 0%)",
      hsla: "hsla( 60, 100%, 50%, 1)",
      hsva: "hsva( 15240, 100%, 100%, 1)",
      rgba: "rgba(255, 254, 0, 1)"
    },
    colorPicker7: false,
    colorPickerValue7: '',
  }

  close = id => () => {
    const colorPickerId = `colorPicker${id}`;
    this.setState({ [colorPickerId]: false });
  }

  toggle = id => () => {
    const colorPickerId = `colorPicker${id}`;
    this.setState({ [colorPickerId]: !this.state[colorPickerId] });
  }

  saveColorValue = id => value => {
    const colorPickerValueId = `colorPickerValue${id}`;

    this.setState({ [colorPickerValueId]: value.rgba })
  }

  saveColorAllValues = value => {
    this.setState({ colorPickerValue6: value });
  }

  changeWebsiteBackgroundColor = value => {
    document.body.style.background = `${value.rgba}`
  }

  render() {
    return (
      <AppFrame>
        <h4 className="my-5">Basic Example</h4>
        <MDBCard>
          <MDBCardBody>
            <p className="text-center">Click the dark square to activate the Color Picker</p>
            <MDBColorPicker
              transitionType="linear"
              isOpen={this.state.colorPicker1}
              close={this.close(1)}
              getValue={this.saveColorValue(1)}
              colorSpace="hex"
            >
              <div
                style={{ backgroundColor: this.state.colorPickerValue1 }}
                className="pickr mx-auto"
                onClick={this.toggle(1)} />
            </MDBColorPicker>

          </MDBCardBody>
        </MDBCard>

        <h4 className="my-5">Using as button</h4>
        <MDBCard>
          <MDBCardBody className="text-center d-flex justify-content-center align-items-center flex-column">
            <p className="pt-2">Click the below button to activate the Color Picker</p>

            <MDBColorPicker
              isOpen={this.state.colorPicker2}
              close={this.close(2)}
              rgbaColor="rgba(18, 52, 86, 0.3)"
            >
              <MDBBtn size="sm" color="primary" onClick={this.toggle(2)}>Open picker</MDBBtn>
            </MDBColorPicker>

          </MDBCardBody>
        </MDBCard>

        <h4 className="my-5">Change color of the other elements</h4>
        <MDBRow>
          <MDBCol md="6" className="mx-auto">
            <MDBCard style={{ backgroundColor: this.state.colorPickerValue3 }}>
              <MDBCardBody className="text-center d-flex justify-content-center align-items-center flex-column">
                <p>My background color will be changed</p>

                <MDBColorPicker
                  isOpen={this.state.colorPicker3}
                  close={this.close(3)}
                  toggle={this.toggleColorPicker}
                  getValue={this.saveColorValue(3)}
                >
                  <MDBBtn outline size="sm" color="primary" onClick={this.toggle(3)}>Open picker</MDBBtn>
                </MDBColorPicker>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="mx-auto">
            <MDBCard>
              <MDBCardBody className="text-center d-flex justify-content-center align-items-center flex-column">
                <p style={{ color: this.state.colorPickerValue4 }} >My text color will be changed</p>

                <MDBColorPicker
                  isOpen={this.state.colorPicker4}
                  close={this.close(4)}
                  toggle={this.toggleColorPicker}
                  getValue={this.saveColorValue(4)}
                >
                  <MDBBtn outline size="sm" color="primary" onClick={this.toggle(4)}>Open picker</MDBBtn>
                </MDBColorPicker>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <h4 className="my-5">Copy saved colors to clipboard</h4>
        <MDBCard>
          <MDBCardBody className="text-center d-flex justify-content-center align-items-center flex-column">
            <p>Click the "Save" button and check the results by pasting the clipboard in some place.</p>

            <MDBColorPicker
              isOpen={this.state.colorPicker5}
              close={this.close(5)}
              rgbaColor="rgba(201, 175, 211, 1.0)"
            >
              <MDBBtn color="primary" size="sm" onClick={this.toggle(5)}>Open picker</MDBBtn>
            </MDBColorPicker>

          </MDBCardBody>
        </MDBCard>

        <h4 className="my-5">The color representation</h4>
        <MDBRow>
          <MDBCol md="6" className="mx-auto">
            <MDBCard style={{ backgroundColor: this.state.colorPickerValue3 }}>
              <MDBCardBody className="text-center d-flex justify-content-center align-items-center flex-column">
                <p>Change actual color and check how every color representation is described in the list</p>

                <MDBColorPicker
                  isOpen={this.state.colorPicker6}
                  close={this.close(6)}
                  toggle={this.toggleColorPicker}
                  rgbaColor="rgba(255, 254, 0, 1)"
                  getValue={this.saveColorAllValues}
                >
                  <MDBBtn outline size="sm" color="primary" onClick={this.toggle(6)}>Open picker</MDBBtn>
                </MDBColorPicker>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="mx-auto">
            <MDBCard>
              <MDBCardBody className="text-center d-flex justify-content-center align-items-center flex-column">
                <ListGroup>
                  <ListGroupItem>hex: {this.state.colorPickerValue6.hex} </ListGroupItem>
                  <ListGroupItem>rgba: {this.state.colorPickerValue6.rgba}</ListGroupItem>
                  <ListGroupItem>hsla: {this.state.colorPickerValue6.hsla}</ListGroupItem>
                  <ListGroupItem>hsva: {this.state.colorPickerValue6.hsva}</ListGroupItem>
                  <ListGroupItem>cmyk: {this.state.colorPickerValue6.cmyk}</ListGroupItem>
                </ListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <h4 className="my-5">Change the site background color</h4>
        <MDBCard>
          <MDBCardBody className="text-center d-flex justify-content-center align-items-center flex-column">
            <p>Change the background color if this site dynamically by changing the color in Color Picker</p>

            <MDBColorPicker
              isOpen={this.state.colorPicker7}
              close={this.close(7)}
              rgbaColor="rgba(255, 255, 255, 1.0)"
              getValue={this.changeWebsiteBackgroundColor}
            >
              <MDBBtn color="primary" size="sm" onClick={this.toggle(7)}>Open picker</MDBBtn>
            </MDBColorPicker>

          </MDBCardBody>
        </MDBCard>
      </AppFrame>
    );
  }
}

export default App;