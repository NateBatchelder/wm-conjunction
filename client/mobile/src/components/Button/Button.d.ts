import * as React from "react";

declare const MDBButton: React.FunctionComponent<{
  title?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  pill?: boolean;
  icon?: null;
  style?: string;
  title?: string;
  size?: string;
  color?: string;
  outline?: boolean;
  gradient?: "peach" | "aqua" | "blue" | "purple";
  start?: object;
  end?: object;
  onPress?: void;
  style?: object;
  disabled?: boolean;
  noShadow?: boolean;
}>;

export default MDBButton;
