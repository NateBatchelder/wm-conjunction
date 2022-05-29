import PropTypes from 'prop-types'
import pick from '../../../utils/helpers';

export const propTypes = {
  underlineActiveColor: PropTypes.string,
  underlineActiveHeight: PropTypes.number,
  underlineColor: PropTypes.string,
  underlineDuration: PropTypes.number,
  underlineHeight: PropTypes.number,
  activeColor: PropTypes.string,
  error: PropTypes.string,
  errorColor: PropTypes.string,
  focused: PropTypes.bool
}

export const defaultProps = {
  underlineActiveHeight: 1,
  underlineColor: 'grey',
  underlineDuration: 2000,
  underlineHeight: 1
}

export const pickUnderlineProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
