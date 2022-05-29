import PropTypes from "prop-types";
import {
  TextInput
} from "react-native";

import pick from "../../../utils/helpers";

export const propTypes = {
  accessibilityLabel: PropTypes.string,
  activeColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  icon: PropTypes.any,
  iconOverlay: PropTypes.any,
  labelSpacingTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  onFocus: PropTypes.func,
  onLayout: PropTypes.func,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  register: PropTypes.func.isRequired,
  style: PropTypes.node,
  textAlign: PropTypes.string
};

export const defaultProps = {
  accessible: true,
  style: {},
  color: "black",
  fontSize: 15,
  fontWeight: "normal",
  labelSpacingTop: 8 * 2,
  marginBottom: 8,
  marginTop: 0,
  onBlur: () => {},
  onChangeText: () => {},
  onContentSizeChange: () => {},
  onFocus: () => {},
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 8 / 2,
  register: function () {},
  textAlign: "left",
  value: undefined
};

export const pickTextInputProps = props => {
  return pick(props, Object.keys(TextInput.propTypes));
};
