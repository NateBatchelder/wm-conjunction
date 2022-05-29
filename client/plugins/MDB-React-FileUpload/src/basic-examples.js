import React from "react";
import MDBFileupload from "mdb-react-fileupload";
import img from "./assets/mdb-react.png";

const basicExamples = () => {
  return (
    <>
      <h2 className="secondary-heading mb-3">Material file input</h2>
      <p>Material Design styling for File Input component</p>
      <MDBFileupload />
      <p>You can add a default value</p>
      <MDBFileupload defaultFileSrc={img} />
      <p>You can set the height</p>
      <MDBFileupload containerHeight={600} />
      <p>You can combine options</p>
      <MDBFileupload containerHeight={400} defaultFileSrc={img} />
      <p>You can disabled the input</p>
      <MDBFileupload disabled />
      <p>Also with a default file</p>
      <MDBFileupload disabled defaultFileSrc={img} />
      <p>You can add a max file size</p>
      <MDBFileupload maxFileSize="1M" />
      <p>You can disable remove button</p>
      <MDBFileupload defaultFileSrc={img} showRemove={false} />
    </>
  );
};

export default basicExamples;
