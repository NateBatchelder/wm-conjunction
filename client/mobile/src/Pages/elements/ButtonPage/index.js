import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import MDBButton from "../../../components/Button/Button";

export default class MDBButtonsPage extends Component {
  static navigationOptions = {
    title: "Buttons"
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
              borderColor: "lightgrey",
              padding: 10,
              margin: 10
            }}
          >
            <MDBButton title="Primary" color="primary"></MDBButton>
            <MDBButton title="Danger" color="danger"></MDBButton>
            <MDBButton title="Success" color="success"></MDBButton>
            <MDBButton title="Info" color="info"></MDBButton>
            <MDBButton title="Secondary" color="secondary"></MDBButton>
            <MDBButton title="Warning" color="warning"></MDBButton>
            <MDBButton title="Dark" color="dark"></MDBButton>
          </View>

          <Text style={{ margin: 10 }}>Outline</Text>
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
            <MDBButton title="Primary" color="primary" outline></MDBButton>
            <MDBButton title="Danger" color="danger" outline></MDBButton>
            <MDBButton title="Success" color="success" outline></MDBButton>
            <MDBButton title="Info" color="info" outline></MDBButton>
            <MDBButton title="Secondary" color="secondary" outline></MDBButton>
            <MDBButton title="Warning" color="warning" outline></MDBButton>
            <MDBButton title="Dark" color="dark" outline></MDBButton>
          </View>

          <Text style={{ margin: 10 }}>With gradient</Text>
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
            <MDBButton title="Peach" gradient="peach"></MDBButton>
            <MDBButton title="Agua" gradient="aqua"></MDBButton>
            <MDBButton title="Blue" gradient="blue"></MDBButton>
            <MDBButton title="Purple" gradient="purple"></MDBButton>
            <MDBButton title="Custom1" gradient="blue, red"></MDBButton>
            <MDBButton title="Custom2" gradient="yellow, green"></MDBButton>
            <MDBButton title="Custom3" gradient="pink, purple"></MDBButton>
            <MDBButton
              title="Custom4"
              gradient={["lightblue", "rgb(255,255,11)"]}
            ></MDBButton>
            <MDBButton
              title="Custom5"
              gradient={["rgb(1,44,11)", "hsl(196,71%,81%)"]}
            ></MDBButton>
          </View>
        </View>
        <Text style={{ margin: 10 }}>Sizing</Text>
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
          <MDBButton title="Small" color="success" size="sm"></MDBButton>
          <MDBButton title="Normal" color="primary"></MDBButton>
          <MDBButton title="Large" color="danger" size="lg"></MDBButton>
        </View>

        <Text style={{ margin: 10 }}>Custom colors</Text>
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
          <MDBButton title="Light Blue" color="lightblue"></MDBButton>
          <MDBButton title="RGB" color="rgb(0,22,255)"></MDBButton>
          <MDBButton title="HEX" color="#FFB85C"></MDBButton>
          <MDBButton title="HSL" color="hsl(261, 72%, 54%)"></MDBButton>
        </View>
      </ScrollView>
    );
  }
}
