import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, ImageBackground, View } from 'react-native';

import * as SuperLightenColors from '../../utils/sLightColors';
import * as LightenColors from '../../utils/lightenColors';
import * as StrongColors from '../../utils/strongColors';

export default class MDBMask extends Component {
  render() {
    const { children, light, pattern, resizeMethod, resizeMode, slight, source, style, overlay } = this.props;

    const size = Image.resolveAssetSource(this.props.source);
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          position: 'relative',
          overflow: 'hidden',
          ...style
        }}
      >
        <Image
          source={source}
          style={{
            width: '100%',
            aspectRatio: size.width / size.height
          }}
        />
        <ImageBackground
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',

            backgroundColor: slight
              ? SuperLightenColors[overlay]
              : light
              ? LightenColors[overlay]
              : StrongColors[overlay]
          }}
          source={pattern}
          resizeMode="repeat"
        >
          {children}
        </ImageBackground>
      </View>
    );
  }
}

MDBMask.propTypes = {
  light: PropTypes.bool,
  slight: PropTypes.bool,
  resizeMethod: PropTypes.string,
  resizeMode: PropTypes.string,
  // source: PropTypes.string,
  style: PropTypes.object,
  overlay: PropTypes.string
};
