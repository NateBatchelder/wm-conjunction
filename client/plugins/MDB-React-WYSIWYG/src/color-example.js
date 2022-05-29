import React from "react";
import MDBWysiwyg from "mdb-react-wysiwyg";

const colorExample = () => {
  const initialContent = `<br>
                        <p style="text-align: center;"><img src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                                class="img-fluid"></p>
                        <h1 style="text-align: center;">MDBootstrap</h1>
                        <p style="text-align: center;">WYSIWYG Editor</p>
                        <p style="text-align: center;"><a href="https://mdbootstrap.com" target="_blank" contenteditable="false"
                                style="font-size: 1rem; text-align: left;">MDBootstrap.com</a>&nbsp;© 2018</p>
                        `;

  return (
    <>
      <MDBWysiwyg
        initialContent={initialContent}
        colors={["#EA3C3B", "#E00065", "#FFFFFF", "#000000"]}
      />
    </>
  );
};

export default colorExample;
