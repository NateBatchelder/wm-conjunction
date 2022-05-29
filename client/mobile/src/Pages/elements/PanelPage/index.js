import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import MDBCardBody from '../../../components/CardBody';
import MDBCardTitle from '../../../components/CardTitle';
import MDBCardText from '../../../components/CardText';
import MDBCard from '../../../components/Card';
import MDBCardFooter from '../../../components/CardFooter';
import MDBCardLink from '../../../components/CardLink';

export default class CardsPage extends Component {
  static navigationOptions = {
    title: 'Panels'
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{ margin: 10 }}>Basic</Text>
          <View
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: 'lightgrey',
              margin: 10
            }}
          >
            <View>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Panel Example</MDBCardTitle>
                  <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi beatae consectetur enim eos est
                    hic inventore ipsa, minima nam placeat praesentium quaerat quam quibusdam quisquam ratione, tenetur
                    ullam vitae?
                  </MDBCardText>
                  <MDBCardFooter>
                    <MDBCardLink>Card link</MDBCardLink>
                    <MDBCardLink>Another link</MDBCardLink>
                  </MDBCardFooter>
                </MDBCardBody>
              </MDBCard>
            </View>
          </View>
        </View>

        <View>
          <Text style={{ margin: 10 }}>Simple</Text>
          <View
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: 'lightgrey',
              margin: 10
            }}
          >
            <View>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi beatae consectetur.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
