import React from 'react';
import { MDBCol } from 'mdbreact';
import FormExampleBasic from './form-example';
import FormExampleExtended from './form-extended-example';

const usageExamples = () => {
    return (
        <>
            <MDBCol style={{ maxWidth: "35rem", margin: "0 auto" }} >
                <h2 className="secondary-heading my-4">Multipart form</h2>
                <FormExampleExtended />
            </MDBCol>
            <MDBCol className="mt-5">
                <h2 className="secondary-heading my-4">Material file input</h2>
                <FormExampleBasic />
            </MDBCol>
        </>
    );
};

export default usageExamples;