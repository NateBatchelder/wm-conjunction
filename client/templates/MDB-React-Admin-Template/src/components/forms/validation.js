import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardImage,
  MDBBtn
} from 'mdbreact';
import LinkCard from '../LinkCard';

class basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: 'Mark',
      lname: 'Otto',
      email: '',
      city: '',
      state: '',
      zip: ''
    };
  }

  submitHandler = event => {
    event.preventDefault();
    event.target.className += ' was-validated';
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <section>
        <MDBCard narrow className='mb-5'>
          <MDBCardImage
            className='view view-cascade gradient-card-header blue-gradient'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive mb-2'>Validation</h2>
          </MDBCardImage>
          <MDBCardBody cascade>
            <h4 className='h4-responsive text-center'>
              Error &amp; Success messages{' '}
            </h4>
            <form
              className='needs-validation'
              onSubmit={this.submitHandler}
              noValidate
            >
              <MDBRow>
                <MDBCol md='4'>
                  <MDBInput
                    icon='user'
                    value={this.state.fname}
                    name='fname'
                    onChange={this.changeHandler}
                    type='text'
                    id='materialFormRegisterNameEx'
                    label='First name'
                    required
                  >
                    <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
                  </MDBInput>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBInput
                    icon='address-card'
                    value={this.state.lname}
                    name='lname'
                    onChange={this.changeHandler}
                    type='text'
                    id='materialFormRegisterEmailEx2'
                    label='Last name'
                    required
                  >
                    <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
                  </MDBInput>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBInput
                    icon='envelope-open'
                    value={this.state.email}
                    onChange={this.changeHandler}
                    type='email'
                    id='materialFormRegisterConfirmEx3'
                    name='email'
                    label='Your Email address'
                    required
                  >
                    <small id='emailHelp' className='form-text text-muted'>
                      We'll never share your email with anyone else.
                    </small>
                  </MDBInput>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='4'>
                  <MDBInput
                    icon='city'
                    value={this.state.city}
                    onChange={this.changeHandler}
                    type='text'
                    id='materialFormRegisterPasswordEx4'
                    name='city'
                    label='City'
                    required
                  >
                    <div className='invalid-feedback ml-4 pl-3'>
                      Please provide a valid city.
                    </div>
                    <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
                  </MDBInput>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBInput
                    icon='map-marked-alt'
                    value={this.state.state}
                    onChange={this.changeHandler}
                    type='text'
                    id='materialFormRegisterPasswordEx4'
                    name='state'
                    label='State'
                    required
                  >
                    <div className='invalid-feedback ml-4 pl-3'>
                      Please provide a valid state.
                    </div>
                    <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
                  </MDBInput>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBInput
                    icon='location-arrow'
                    value={this.state.zip}
                    onChange={this.changeHandler}
                    type='text'
                    id='materialFormRegisterPasswordEx4'
                    name='zip'
                    label='Zip'
                    required
                  >
                    <div className='invalid-feedback ml-4 pl-3'>
                      Please provide a valid zip.
                    </div>
                    <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
                  </MDBInput>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBInput
                  type='checkbox'
                  value='conditions'
                  id='materialInvalidCheck'
                  required
                  label='Agree to terms and conditions'
                >
                  <div className='invalid-feedback'>
                    You must agree before submitting.
                  </div>
                </MDBInput>
              </MDBRow>
              <MDBBtn color='primary' type='submit'>
                Submit Form
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>

        <LinkCard docs='https://mdbootstrap.com/docs/react/forms/validation/' />
      </section>
    );
  }
}

export default basic;
