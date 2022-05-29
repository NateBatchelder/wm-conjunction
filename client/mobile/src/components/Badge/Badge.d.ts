import * as React from "react";

declare const MDBBadge: React.FunctionComponent<{
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
}>;

export default MDBBadge;
