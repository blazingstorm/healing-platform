import React from "react";
import { ProductSelectionProps } from "./ProductSelectionProps";
import { packages } from "../Package/Package";
import PageHeader from "../PageHeader/PageHeader";

import "./product-selection.scss";

const ProductSelection = ({
  onSelect,
  onGoBack,
  selectedProduct,
  onContinue,
}: ProductSelectionProps): JSX.Element => {
  return (
    <div className={"product-selection"}>
      <PageHeader
        heading={"Paket Auswahl"}
        ctaButtonLabel={"Zurück"}
        onCtaButtonClick={onGoBack}
      />
      {packages.map((product, index) => (
        <button
          key={index}
          className={`product-selection__item ${
            product === selectedProduct
              ? "product-selection__item--selected"
              : ""
          }`}
          onClick={() => onSelect(product)}
        >
          <span>{product.label}kurs</span>
        </button>
      ))}
      {selectedProduct && <div>{selectedProduct.description}</div>}
      {selectedProduct && <button onClick={() => onContinue()}>Weiter</button>}
    </div>
  );
};

export default ProductSelection;
