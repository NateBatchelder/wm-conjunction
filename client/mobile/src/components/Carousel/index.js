import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { screenWidth, screenHeight } from '../../utils/helpers';
import Image from '../Image/index';
import PropTypes from 'prop-types';

export default class MDBCarousel extends Component {
  scrollRef = React.createRef();

  state = {
    selectedIndex: 0
  };

  componentDidMount() {
    const { auto, interval, images } = this.props;

    if (auto) {
      setInterval(
        () => {
          this.setState(
            prev => ({
              selectedIndex: prev.selectedIndex === images.length - 1 ? 0 : prev.selectedIndex + 1
            }),
            () => {
              this.scrollRef.current.scrollTo({
                animated: true,
                y: 0,
                x: screenWidth * this.state.selectedIndex
              });
            }
          );
        },
        interval ? interval : 3000
      );
    }
  }

  setSelectedIndex = e => {
    const viewSize = e.nativeEvent.layoutMeasurement.width;
    const contentOffset = e.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);

    this.setState({ selectedIndex });
  };

  render() {
    const { images, imgStyle, fullBackground, auto } = this.props;
    const { selectedIndex } = this.state;

    const mapImg = images.map((e, i) => {
      return (
        <Image
          key={i}
          source={{ uri: e }}
          style={fullBackground ? styles.backgroundImage : imgStyle ? imgStyle : { width: screenWidth }}
        ></Image>
      );
    });
    const mapIndex = images.map((e, i) => {
      return (
        <View
          key={i}
          style={[styles.whiteCircle, { opacity: i === selectedIndex ? 0.5 : 1 }]}
          active={i === selectedIndex}
        ></View>
      );
    });
    return (
      <View style={{ height: '100%', width: '100%' }} pointerEvents={auto ? 'none' : 'auto'}>
        <ScrollView horizontal pagingEnabled onMomentumScrollEnd={this.setSelectedIndex} ref={this.scrollRef}>
          {mapImg}
        </ScrollView>
        <View style={[styles.circleDiv]}>{mapIndex}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: screenHeight,
    width: screenWidth
  },
  circleDiv: {
    position: 'absolute',
    bottom: 20,
    height: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: '#fff'
  }
});

MDBCarousel.propTypes = {
  images: PropTypes.array,
  fullBackground: PropTypes.bool,
  auto: PropTypes.bool
};

MDBCarousel.defaultProps = {
  fullBackground: false,
  auto: true
};
