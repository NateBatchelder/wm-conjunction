import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { screenWidth } from '../../utils/helpers';
import Button from '../Button/Button';
import { basicColors } from '../../utils/test';

const MDBImageOverlay = ({ icon, title, titleColor, description, btnColor, imgBGsrc, onPressed, ...attributes }) => {
  return (
    <ImageBackground
      style={StyleSheet.flatten([
        {
          width: screenWidth - 30,
          marginTop: 10,
          marginBottom: 10,
          height: 200,
          position: 'relative',
          zIndex: 1,
          borderRadius: 100
        },
        {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 5,
          borderRadius: 100
        }
      ])}
      source={{
        uri: imgBGsrc
      }}
    >
      <View
        style={StyleSheet.flatten([
          {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            borderRadius: 100
          }
        ])}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 3
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            {icon}
            <Text
              style={{
                color: titleColor,
                fontSize: 32,
                marginLeft: 8,
                fontWeight: 'bold'
              }}
            >
              {title}
            </Text>
          </View>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              padding: 10
            }}
          >
            {description}{' '}
          </Text>
        </View>
        <Button
          color={btnColor}
          title="More"
          style={{
            zIndex: 3
          }}
          onPressed={onPressed}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#000',
          opacity: 0.7,
          zIndex: 2
        }}
      ></View>
    </ImageBackground>
  );
};

export default MDBImageOverlay;
