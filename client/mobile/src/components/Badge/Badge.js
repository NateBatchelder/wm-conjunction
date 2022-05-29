import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";
import * as Shadows from "../../utils/shadows";
import { basicColors } from "../../utils/test";
import { scs } from "../../utils/helpers";

const Badge = ({ title, style, color, pill, icon }) => {
  const { header, text } = defaultStyle;
  const bPill = pill ? badgeStyles.pill : null;
  const styles = scs(color, basicColors, true, [
    "backgroundColor",
    "borderColor"
  ]);
  const shadow = Shadows["shadow"];

  return (
    <View style={StyleSheet.flatten([header, styles, bPill, shadow, style])}>
      {icon ? null : (
        <Text numberOfLines={1} style={text}>
          {title}
        </Text>
      )}
      <View>{icon}</View>
    </View>
  );
};

const defaultStyle = StyleSheet.create({
  header: {
    padding: 2,
    margin: 5,
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#Fff",
    paddingLeft: 3,
    paddingRight: 3
  }
});

const badgeStyles = StyleSheet.create({
  pill: {
    borderRadius: 100,
    paddingRight: 4,
    paddingLeft: 4
  }
});

Badge.propTypes = {
  title: PropTypes.string,
  style: PropTypes.string,
  color: PropTypes.string,
  pill: PropTypes.bool
};

Badge.defaultProps = {
  title: "",
  style: "",
  color: basicColors[0].color,
  pill: false,
  icon: null
};

export default Badge;
export { Badge as MDBBadge };
