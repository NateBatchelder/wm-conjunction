import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import Button from "../Button/Button";

const ButtonGroup = props => {
  const {
    direction,
    alignSelf,
    buttons,
    justify,
    alignItem,
    children,
    ...attributes
  } = props;
  const isDirection = direction ? direction : "row";
  const isAlignSelf = alignSelf ? alignSelf : "center";
  const isJustify = justify ? justify : "flex-start";
  const isAlignItem = alignItem ? alignItem : "flex-start";

  const mapButton = buttons.map((e, i) => {
    return (
      <Button
        style={styles.button}
        key={i}
        title={e.text}
        size={e.size}
        color={e.color}
        disabled={e.disabled}
        gradient={e.gradient}
        {...attributes}
      >
        {children}
      </Button>
    );
  });

  return (
    <View
      style={{
        display: "flex",
        flexDirection: isDirection,
        alignSelf: isAlignSelf,
        justifyContent: isJustify,
        alignItems: isAlignItem,
        width: "100%"
      }}
    >
      {mapButton}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 0
  }
});

ButtonGroup.propTypes = {
  direction: PropTypes.string.isRequired,
  alignSelf: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      size: PropTypes.string,
      color: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired
    })
  ).isRequired
};

ButtonGroup.defaultProps = {
  direction: "row",
  alignSelf: "center",
  buttons: [
    {
      text: "MDB RN",
      color: "primary",
      size: "",
      disabled: false,
      gradient: null
    },
    {
      text: "MDB RN",
      color: "primary",
      size: "",
      disabled: false,
      gradient: null
    },
    {
      text: "MDB RN",
      color: "primary",
      size: "",
      disabled: false,
      gradient: null
    }
  ]
};

export default ButtonGroup;
export { ButtonGroup as MDBButtonGroup };
