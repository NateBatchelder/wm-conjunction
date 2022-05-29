import PropTypes from "prop-types";
import pick from "../../../utils/helpers";

export const propTypes = {
  label: PropTypes.string,
  labelActiveColor: PropTypes.string,
  labelActiveScale: PropTypes.number,
  labelActiveTop: PropTypes.number,
  labelColor: PropTypes.string,
  labelDuration: PropTypes.number,
  activeColor: PropTypes.string,
  error: PropTypes.string,
  errorColor: PropTypes.string,
  focused: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  hasValue: PropTypes.bool,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number
};

export const defaultProps = {
  labelActiveScale: 0.8,
  labelActiveTop: -14,
  labelColor: "grey",
  labelDuration: 200
};

export const pickLabelProps = props => {
  return pick(props, Object.keys(propTypes));
};
