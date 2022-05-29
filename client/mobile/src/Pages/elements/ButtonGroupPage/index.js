import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import MDBButtonGroup from "../../../components/ButtonGroup/ButtonGroup";

export default class ButtonsGroupPage extends Component {
  static navigationOptions = {
    title: "Buttons Group"
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
            <View style={{ margin: 5 }}>
              <MDBButtonGroup></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                buttons={[
                  {
                    text: "MDB RN",
                    color: "danger",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "danger",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "danger",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                buttons={[
                  {
                    text: "MDB RN",
                    color: "warning",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "warning",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "warning",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                buttons={[
                  {
                    text: "MDB RN",
                    color: "success",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "success",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "success",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                buttons={[
                  {
                    text: "MDB RN",
                    color: "secondary",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "secondary",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "secondary",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                buttons={[
                  {
                    text: "MDB RN",
                    color: "dark",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "dark",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "dark",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                buttons={[
                  {
                    text: "MDB RN",
                    color: "info",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "info",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "info",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
          </View>

          <Text style={{ margin: 10 }}>VerticalColorful</Text>
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
            <View style={{ margin: 5 }}>
              <MDBButtonGroup direction="column"></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                direction="column"
                buttons={[
                  {
                    text: "MDB RN",
                    color: "danger",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "danger",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "danger",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                direction="column"
                buttons={[
                  {
                    text: "MDB RN",
                    color: "warning",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "warning",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "warning",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                direction="column"
                buttons={[
                  {
                    text: "MDB RN",
                    color: "success",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "success",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "success",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                direction="column"
                buttons={[
                  {
                    text: "MDB RN",
                    color: "secondary",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "secondary",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "secondary",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                direction="column"
                buttons={[
                  {
                    text: "MDB RN",
                    color: "dark",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "dark",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "dark",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
            <View style={{ margin: 5 }}>
              <MDBButtonGroup
                direction="column"
                buttons={[
                  {
                    text: "MDB RN",
                    color: "info",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "info",
                    size: "",
                    disabled: false
                  },
                  {
                    text: "MDB RN",
                    color: "info",
                    size: "",
                    disabled: false
                  }
                ]}
              ></MDBButtonGroup>
            </View>
          </View>

          <Text style={{ margin: 10 }}>Vertical centred </Text>
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
            <MDBButtonGroup
              direction="column"
              alignSelf="center"
              justify="center"
              alignItem="center"
              buttons={[
                {
                  text: "MDB RN",
                  color: "info",
                  size: "",
                  disabled: false
                },
                {
                  text: "MDB RN",
                  color: "info",
                  size: "",
                  disabled: false
                },
                {
                  text: "MDB RN",
                  color: "info",
                  size: "",
                  disabled: false
                }
              ]}
            ></MDBButtonGroup>
          </View>
        </View>
        <Text style={{ margin: 10 }}>Vertical right aligned</Text>
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
          <MDBButtonGroup
            direction="column"
            alignSelf="center"
            justify="flex-end"
            alignItem="flex-end"
            buttons={[
              {
                text: "MDB RN",
                color: "info",
                size: "",
                disabled: false
              },
              {
                text: "MDB RN",
                color: "info",
                size: "",
                disabled: false
              },
              {
                text: "MDB RN",
                color: "info",
                size: "",
                disabled: false
              }
            ]}
          ></MDBButtonGroup>
        </View>
        <Text style={{ margin: 10 }}>Disabled</Text>
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
          <MDBButtonGroup
            direction="column"
            alignSelf="center"
            justify="center"
            alignItem="center"
            buttons={[
              {
                text: "MDB RN",
                color: "info",
                size: "",
                disabled: true
              },
              {
                text: "MDB RN",
                color: "info",
                size: "",
                disabled: true
              },
              {
                text: "MDB RN",
                color: "info",
                size: "",
                disabled: true
              }
            ]}
          ></MDBButtonGroup>
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
          <MDBButtonGroup
            direction="row"
            alignSelf="center"
            justify="center"
            alignItem="center"
            buttons={[
              {
                text: "MDB RN",
                color: "info",
                size: "sm",
                disabled: false
              },
              {
                text: "MDB RN",
                color: "info",
                size: "",
                disabled: false
              },
              {
                text: "MDB RN",
                color: "info",
                size: "lg",
                disabled: false
              }
            ]}
          ></MDBButtonGroup>
        </View>
        <Text style={{ margin: 10 }}>Custom Colors</Text>
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
          <MDBButtonGroup
            direction="row"
            alignSelf="center"
            justify="center"
            alignItem="center"
            buttons={[
              {
                text: "MDB RN",
                color: "rgb(255,111,33)",
                size: "",
                disabled: false
              },
              {
                text: "MDB RN",
                color: "rgb(135,111,84)",
                size: "",
                disabled: false
              },
              {
                text: "MDB RN",
                color: "rgb(85,131,133)",
                size: "",
                disabled: false
              }
            ]}
          ></MDBButtonGroup>
        </View>
        <Text style={{ margin: 10 }}>Gradients</Text>
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
          <MDBButtonGroup
            direction="row"
            alignSelf="center"
            justify="center"
            alignItem="center"
            buttons={[
              {
                text: "MDB RN",
                gradient: "peach"
              },
              {
                text: "MDB RN",
                gradient: "blue"
              },
              {
                text: "MDB RN",
                gradient: "purple"
              }
            ]}
          ></MDBButtonGroup>
        </View>
      </ScrollView>
    );
  }
}
