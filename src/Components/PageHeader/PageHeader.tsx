import React from "react";
import { PageHeaderProps } from "./PageHeaderProps";

import "./page-header.scss";

const PageHeader = ({
  heading,
  ctaButtonLabel,
  onCtaButtonClick,
}: PageHeaderProps): JSX.Element => {
  return (
    <div className={"page-header"}>
      {heading && <h1>{heading}</h1>}
      {ctaButtonLabel && onCtaButtonClick && (
        <button onClick={onCtaButtonClick}>{ctaButtonLabel}</button>
      )}
    </div>
  );
};

export default PageHeader;
