import React from "react";
import { Package } from "../Package/PackageProps";

const RefinedProductSelection = ({
  label,
  description,
  type,
}: Package): JSX.Element => {
  return (
    <>
      <div>{label}</div>
      <div>{type}</div>
      <div>{description}</div>
    </>
  );
};

export default RefinedProductSelection;
