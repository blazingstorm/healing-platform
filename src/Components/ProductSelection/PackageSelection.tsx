import React from "react";
import { PackageSelectionProps } from "./PackageSelectionProps";
import { packages } from "../Package/Package";
import PageHeader from "../PageHeader/PageHeader";

import "./product-selection.scss";

const PackageSelection = ({
  onPackageSelection,
  onGoBack,
  selectedPackage,
  onContinue,
}: PackageSelectionProps): JSX.Element => {
  return (
    <div className={"package-selection"}>
      <PageHeader
        heading={"Paket Auswahl"}
        ctaButtonLabel={"Zurück"}
        onCtaButtonClick={onGoBack}
      />
      <div className={"package-selection__information"}>
        <div className={"package-selection__options"}>
          {packages.map((product, index) => (
            <button
              key={index}
              className={`package-selection__item ${
                product === selectedPackage
                  ? "package-selection__item--selected"
                  : ""
              }`}
              onClick={() => onPackageSelection(product)}
            >
              <span>{product.label}kurs</span>
            </button>
          ))}
        </div>
        {selectedPackage && selectedPackage.type === "starter" && (
          <>
            <div className={"package-selection__option-description"}>
              <div>{selectedPackage.description}</div>
            </div>
            <div className={"package-selection__option-features"}>
              <ul className={"package-selection__option-features-list"}>
                {selectedPackage.summaryLong.map((item, index) => {
                  return (<li key={index}>{item}</li>)
                })}
              </ul>
              <button onClick={() => onContinue()}>Weiter</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PackageSelection;
