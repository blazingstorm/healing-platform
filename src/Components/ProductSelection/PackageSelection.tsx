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
      <div className={"package-selection__image"}>
        <div className={"package-selection__image-heading"}>
          <span className={"package-selection__image-heading-primary"}>DER PASSENDE KURS</span>
          <span className={"package-selection__image-heading-secondary"}>für dich und deine Transformation</span>
        </div>
      </div>
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
              <h3>Dein Starter Paket</h3>
              <div>{selectedPackage.description}</div>
            </div>
            <div className={"package-selection__option-features"}>
              <ul className={"package-selection__option-features-list"}>
                {selectedPackage.summaryLong.map((item, index) => {
                  return (<li className={"package-selection__option-features-list-item"} key={index}>{item}</li>)
                })}
              </ul>
              <div className={"package-selection__cta"}>
                <div className={"package-selection__cta-text"}>
                  Mit diesem Kurs wirst du in nur wenigen Wochen...
                </div>
                <button className={"package-selection__cta-button"} onClick={() => onContinue()}>Jetzt loslegen!</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PackageSelection;
