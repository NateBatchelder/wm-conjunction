import React, { Component } from 'react';
import MDBFileupload from 'mdb-react-fileupload';
import axios from 'axios';
import { MDBInput, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from 'mdbreact';

class formExtendedExample extends Component {
    state = {
        selectedFile: null,
        surname: '',
        email: '',
        acceptTerm: false,
    }

    onSubmitHandler = e => {
        e.preventDefault();

        let data = new FormData();
        data.append('surname', this.state.surname);
        data.append('email', this.state.email);
        data.append('acceptTerm', this.state.acceptTerm);
        data.append('file', this.state.selectedFile);

        axios({
            method: 'post',
            url: 'fake/api',
            data: data,
            headers: {
                "Content-type": "multipart/form-data"
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
            this.fileupload.resetPreview()
            this.setState({
                selectedFile: null,
                surname: '',
                email: '',
                acceptTerm: false,
            })
        })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChexboxChange = e => {
        this.setState({
            acceptTerm: !this.state.acceptTerm
        })
    }

    handleFileuploadChange = file => {
        this.setState({
            selectedFile: file
        })
    }

    render() {
        return (

            <MDBCard className="px-3 grey-text">
                <MDBCardBody>
                    <h1>{this.state.loaded}</h1>
                    <h3 className="text-center mb-5 mt-4 font-weight-bold">
                        <strong>SIGN</strong>
                        <strong className="light-green-text font-weight-bold"> UP</strong>
                    </h3>
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="mb-4">
                            <MDBInput label="Surname" name="surname" icon="user" value={this.state.surname} onChange={this.handleInputChange} />
                            <MDBInput label="Email" name="email" type="email" icon="envelope" value={this.state.email} onChange={this.handleInputChange} />
                        </div>
                        <p className="py-3">Upload your references:</p>
                        <MDBFileupload getValue={this.handleFileuploadChange} maxFileSize="5M" ref={fileupload => this.fileupload = fileupload} />
                        <div className="form-check my-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="acceptTerm"
                                value={this.state.acceptTerm}
                                onChange={this.handleChexboxChange}
                                id="defaultCheck17"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck17">Accept the <span className="green-text">Terms and Conditions</span></label>
                        </div>
                        <div className="text-right mt-4">
                            <MDBBtn type="submit" color="success">Send<MDBIcon far icon="paper-plane" className="ml-2" /></MDBBtn>
                        </div>
                    </form>
                </MDBCardBody>
            </MDBCard>
        );
    }
};

export default formExtendedExample;