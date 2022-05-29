import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import MDBBadge from "../../../components/Badge/Badge";
import MDBIcon from "../../../components/Icon";
export default class BadgesPage extends Component {
  static navigationOptions = {
    title: "Badges"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={{ margin: 10 }}>Basic</Text>
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "lightgrey",
            padding: 10,
            margin: 10
          }}
        >
          <MDBBadge title="Primary" color="primary"></MDBBadge>
          <MDBBadge title="Danger" color="danger"></MDBBadge>
          <MDBBadge title="Success" color="success"></MDBBadge>
          <MDBBadge title="Info" color="info"></MDBBadge>
          <MDBBadge title="Secondary" color="secondary"></MDBBadge>
          <MDBBadge title="Warning" color="warning"></MDBBadge>
          <MDBBadge title="Dark" color="dark"></MDBBadge>
        </View>

        <Text style={{ margin: 10 }}>Pill</Text>
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "lightgrey",
            padding: 10,
            margin: 10
          }}
        >
          <MDBBadge title="Primary" color="primary" pill></MDBBadge>
          <MDBBadge title="Danger" color="danger" pill></MDBBadge>
          <MDBBadge title="Success" color="success" pill></MDBBadge>
          <MDBBadge title="Info" color="info" pill></MDBBadge>
          <MDBBadge title="Secondary" color="secondary" pill></MDBBadge>
          <MDBBadge title="Warning" color="warning" pill></MDBBadge>
          <MDBBadge title="Dark" color="dark" pill></MDBBadge>
        </View>

        <Text style={{ margin: 10 }}>With Icons</Text>
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "lightgrey",
            padding: 10,
            margin: 10
          }}
        >
          <MDBBadge
            color="primary"
            icon={<MDBIcon icon="home" size={16} color="#fff"></MDBIcon>}
          ></MDBBadge>
          <MDBBadge
            color="danger"
            icon={<MDBIcon icon="home" size={16} color="#fff"></MDBIcon>}
          ></MDBBadge>
          <MDBBadge
            color="success"
            icon={<MDBIcon icon="home" size={16} color="#fff"></MDBIcon>}
          ></MDBBadge>
          <MDBBadge
            color="info"
            icon={<MDBIcon icon="home" size={16} color="#fff"></MDBIcon>}
          ></MDBBadge>
          <MDBBadge
            color="secondary"
            icon={<MDBIcon icon="home" size={16} color="#fff"></MDBIcon>}
          ></MDBBadge>
          <MDBBadge
            color="warning"
            icon={<MDBIcon icon="home" size={16} color="#fff"></MDBIcon>}
          ></MDBBadge>
          <MDBBadge
            color="dark"
            icon={<MDBIcon icon="home" size={16} color="#fff"></MDBIcon>}
          ></MDBBadge>
        </View>
      </View>
    );
  }
}
