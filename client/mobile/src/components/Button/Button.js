import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Shadows from "../../utils/shadows";
import LinearGradient from "react-native-linear-gradient";
import { scs } from "../../utils/helpers";
import { basicColors, gradients } from "../../utils/test";

class Button extends Component {
  state = {};

  render() {
    const {
      title,
      size,
      color,
      outline,
      gradient,
      start,
      noShadow,
      end,
      style,
      disabled,
      onPressed,
      children,
      textColor,
      ...attributes
    } = this.props;
    const {
      defaultBG,
      mainText,
      defaultSize,
      small,
      large,
      outlineBtn,
      noBorder,
      changedOpacity
    } = btnStyle;
    const isSmall = size === "sm" ? small : null;
    const isLarge = size === "lg" ? large : null;
    const isDisabled = disabled ? disabled : false;
    const addOpacityIsDisabled = disabled ? changedOpacity : null;
    const isOutline = outline ? outlineBtn : null;
    const isOutlineAddText = outline
      ? scs(color, basicColors, true, ["color"])
      : null;
    const shadow = !noShadow && Shadows["shadow"];
    const defaultStartGradient = { x: 0, y: 0 };
    const defaultEndGradient = { x: 1, y: 0 };
    const checkTitle = typeof title === "string" ? title.toUpperCase() : title;
    let button;

    if (gradient) {
      return (button = (
        <LinearGradient
          colors={scs(gradient, gradients, false)}
          style={[
            defaultBG,
            defaultSize,
            isSmall,
            isLarge,
            shadow,
            noBorder,
            style,
            addOpacityIsDisabled
          ]}
          start={start ? start : defaultStartGradient}
          end={end ? end : defaultEndGradient}
        >
          <TouchableOpacity disabled={isDisabled} {...attributes}>
            <Text
              style={StyleSheet.flatten([
                mainText,
                { color: textColor ? textColor : "#fff" }
              ])}
            >
              {checkTitle} {children}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      ));
    } else {
      return (button = (
        <TouchableOpacity
          style={[
            defaultBG,
            defaultSize,
            isSmall,
            isLarge,
            scs(color, basicColors, true, ["backgroundColor", "borderColor"]),
            shadow,
            isOutline,
            style,
            addOpacityIsDisabled
          ]}
          disabled={isDisabled}
          onPress={onPressed}
          {...attributes}
        >
          <Text
            style={StyleSheet.flatten([
              mainText,
              { color: textColor ? textColor : "#fff" },
              isOutlineAddText
            ])}
          >
            {checkTitle}
            {children}
          </Text>
        </TouchableOpacity>
      ));
    }
  }
}

const btnStyle = StyleSheet.create({
  defaultBG: {
    backgroundColor: basicColors[2].color,
    borderRadius: 1
  },
  mainText: {
    textAlign: "center",
    color: "#fff"
  },
  defaultSize: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    paddingLeft: 15,
    paddingRight: 15
  },
  small: {
    alignItems: "center",
    justifyContent: "center",
    height: 30
  },
  large: {
    alignItems: "center",
    justifyContent: "center",
    height: 50
  },
  outlineBtn: {
    backgroundColor: "#fff"
  },
  noBorder: {
    borderWidth: 0
  },
  changedOpacity: {
    opacity: 0.5
  }
});

Button.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
  gradient: PropTypes.oneOfType(PropTypes.string, PropTypes.array),
  start: PropTypes.object,
  end: PropTypes.object,
  onPress: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  noShadow: PropTypes.bool
};

Button.defaultProps = {
  title: "",
  size: "",
  color: basicColors[0].color,
  outline: false,
  gradient: "",
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  disabled: false,
  noShadow: false
};

export default Button;
export { Button as MDBButton };
