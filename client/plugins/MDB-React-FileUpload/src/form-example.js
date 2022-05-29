import React, { Component } from 'react';
import MDBFileupload from 'mdb-react-fileupload';

class formExample extends Component {
    state = {
        selectedFile: null,
    }

    handleFileuploadChange = file => {
        this.setState({
            selectedFile: file
        })
    }

    onSubmitHandler = e => {
        e.preventDefault();

        let data = new FormData();
        data.append('file', this.state.selectedFile);

        console.log('submit', data)

        this.fileupload.resetPreview();
    }

    render() {
        return (
            <>
                <form>
                    <MDBFileupload
                        getValue={this.handleFileuploadChange}
                        maxFileSize="5M"
                        showSubmitButton
                        onSubmitHandler={this.onSubmitHandler}
                        ref={fileupload => this.fileupload = fileupload}
                    />
                </form>
            </>
        );
    }
};

export default formExample;