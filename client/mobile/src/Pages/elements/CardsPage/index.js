import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import MDBCardBody from "../../../components/CardBody";
import MDBCardTitle from "../../../components/CardTitle";
import MDBCardText from "../../../components/CardText";
import MDBCard from "../../../components/Card/Card";
import MDBImage from "../../../components/Image";
import MDBButton from "../../../components/Button/Button";

export default class CardsPage extends Component {
  static navigationOptions = {
    title: "Cards"
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{ margin: 10 }}>Basic</Text>
          <View
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "lightgrey"
            }}
          >
            <MDBCard>
              <MDBImage
                styleName="cardTop"
                source={{
                  uri: "https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                }}
              />

              <MDBCardBody>
                <MDBCardTitle> Example Card </MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi autem distinctio, dolor doloremque ex expedita explicabo
                  id illo in maxime nihil numquam, officia pariatur porro quia
                  quidem quis, vel voluptas.
                </MDBCardText>
                <MDBButton color="primary" title="Text"></MDBButton>
              </MDBCardBody>
            </MDBCard>
          </View>
        </View>
      </ScrollView>
    );
  }
}
