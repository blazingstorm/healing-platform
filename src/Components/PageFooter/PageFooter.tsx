import React from "react";
import { PageFooterProps } from "./PageFooterProps";

import "./page-footer.scss";

const PageFooter = ({}: PageFooterProps): JSX.Element => {
  return (
    <div className={"page-footer"}>
      <h3>
        <i>Legal</i>
      </h3>
      <h3>
        <i>Credits</i>
      </h3>
    </div>
  );
};

export default PageFooter;
