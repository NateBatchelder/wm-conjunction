import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, fab, far);

const Icon = props => {
  const { ...attributes } = props;

  return (
    <View>
      <FontAwesomeIcon {...attributes}></FontAwesomeIcon>
    </View>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.number,
  color: PropTypes.string
};

export default Icon;
