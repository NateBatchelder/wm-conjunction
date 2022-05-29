import React from 'react';
import { Text, View } from 'react-native';

const Section = ({ header, column, children, center, ...style }) => {
  return (
    <>
      <Text style={{ margin: 10 }}>{header}</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: column ? 'column' : 'row',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          borderWidth: 1,
          borderColor: 'lightgrey',
          padding: 10,
          margin: 10,
          ...style
        }}
      >
        {children}
      </View>
    </>
  );
};

export default Section;
