import React from "react";
import { ContainerProps } from "./ContainerProps";

import "./container.scss";

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className={"container"}>{children}</div>;
};

export default Container;
