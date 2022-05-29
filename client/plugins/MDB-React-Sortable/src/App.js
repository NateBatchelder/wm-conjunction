import React from "react";
import Sortable from "sortable";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBFooter
} from "mdbreact";
import logo from "./mdb-react.png";
import "./index.css";

const Item = props => `Item ${props.title}`;

const Card = ({ title, index }) => {
  return (
    <MDBCol>
      <MDBCard>
        <MDBCardImage
          className="img-fluid"
          src={`https://mdbootstrap.com/img/Photos/Others/images/${[
            index + 1
          ]}.jpg`}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>Card {title}</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

function App() {
  const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const itemsAsObjects = [
    {
      value: "1",
      disabled: false
    },
    {
      value: "2",
      disabled: true
    },
    {
      value: "3",
      disabled: false
    }
  ];

  const renderedItems = items.map(item => {
    return <Item title={item} />;
  });

  const disabledItems = itemsAsObjects.map(item => {
    return <Item title={item.value} disabled={item.disabled} />;
  });

  const cards = items
    .slice(0, 4)
    .map((item, index) => <Card title={item} index={index} />);

  return (
    <>
      <MDBContainer className="my-5">
        <MDBRow>
          <MDBCol className="d-flex flex-column justify-content-center align-items-center my-5">
            <img src={logo} alt="MDB React Logo" />
            <h1 className="text-center">
              <a href="https://mdbootstrap.com/plugins/react/sortable/">
                MDB React Sortable Plugin
              </a>
            </h1>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol className="d-flex flex-column  text-center my-5">
            <h2 className="mb-3 dropShadow">
              Sorting by <span>"Y"</span> axis
            </h2>
            <p>
              Change the order of elements by the "y" axis in the DOM tree by
              dragging the element.
            </p>
            <Sortable
              axis="y"
              items={renderedItems}
              itemClassName="SortableItem"
            />
            <hr />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol className="my-5 text-center">
            <h2 className="mb-3 dropShadow">
              Sorting by <span>"X"</span> axis
            </h2>
            <p>
              Change the order of elements by the "x" axis in the DOM tree by
              dragging the element.
            </p>
            <Sortable
              axis="x"
              items={renderedItems}
              itemClassName="SortableItem"
              listClassName="SortableList"
            />
            <hr />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol className="my-5 text-center">
            <h2 className="mb-3 dropShadow">
              <span>Lock</span> axis
            </h2>
            <p>You can lock movement to an axis while sorting.</p>
            <Sortable
              helperClass="helper"
              axis="y"
              lockAxis="y"
              items={renderedItems.slice(0, 3)}
              itemClassName="SortableItem"
            />
            <Sortable
              helperClass="helper"
              axis="x"
              lockAxis="x"
              items={renderedItems}
              itemClassName="SortableItem"
              listClassName="SortableList mt-4"
            />
            <hr />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol className="my-5 d-flex align-items-center flex-column text-center">
            <h2 className=" mb-3 dropShadow">
              Sorting as <span>grid</span>
            </h2>
            <p>
              Displays items in a sortable grid - this can be used to determine
              the order in which photos or files are uploaded. To avoid
              incorrect display of elements{" "}
              <code>useWindowAsScrollContainer</code> property should be set to
              false and items container width should be set to minimum required
              for items.
            </p>
            <Sortable
              axis="xy"
              items={renderedItems}
              helperClass="helperGrid"
              itemClassName="SortableItem"
              listClassName="SortableListGrid"
            />
            <hr />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol className="my-5 text-center">
            <h2 className="mb-3 dropShadow">
              <span>Styling</span> sortable element
            </h2>
            <p>You can add your own styles to sortable element.</p>
            <Sortable
              axis="y"
              items={renderedItems.slice(0, 3)}
              helperClass="helperClass"
              itemClassName="SortableItem"
            />
            <hr />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol className="my-5 text-center">
            <h2 className=" mb-3 dropShadow">
              <span>Exclude</span> items from sorting
            </h2>
            <p>
              It is possible to exclude items from the possibility of sorting or
              dragging items before / after them.
            </p>
            <Sortable
              axis="xy"
              items={disabledItems}
              itemClassName="SortableItem"
              disabledClassName="disabled"
            />
            <hr />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol className="my-5 text-center">
            <h2 className="mb-3 dropShadow">
              <span>Keyboard</span> sorting
            </h2>
            <p>
              You can sort elements using keyboard.
              <br />
              To enable it, your element should be focused(use <code>tab</code>
              ), then press <code>"space"</code> and use <code>arrow keys</code>
              .<br />
              Press <code>"space"</code> again to finish sorting, press{" "}
              <code>"esc"</code> to cancel sorting.
            </p>
            <Sortable
              axis="x"
              items={renderedItems}
              itemClassName="SortableItem"
              listClassName="SortableList"
            />
            <hr />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol className="my-5 text-center">
            <h2 className=" mb-3 dropShadow">
              <span>Sortable</span> deck of cards
            </h2>
            <p>
              You can pass varied components as an items property for Sortable
              component.
            </p>
            <Sortable
              axis="xy"
              items={cards}
              helperClass="CardItem"
              listClassName="SortableListCards"
            />
            <hr />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBFooter color="blue" className="font-small mt-4">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://mdbootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </>
  );
}

export default App;
