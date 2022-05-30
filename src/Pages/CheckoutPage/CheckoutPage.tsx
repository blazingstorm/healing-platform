import React, { useState } from "react";
import { CheckoutPageProps } from "./CheckoutPageProps";
import Summary from "../../Components/Summary/Summary";
import ProductSelection from "../../Components/ProductSelection/ProductSelection";
import { PackageProps } from "../../Components/Package/PackageProps";

export const CheckoutPage = ({
  returnToLandingPage,
}: CheckoutPageProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedProduct, setSelectedProduct] =
    useState<PackageProps>(undefined);

  const goBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className={"checkout-page"}>
      {currentStep === 1 ? (
        <Summary selectedProduct={selectedProduct} onGoBack={() => goBack()} />
      ) : (
        <ProductSelection
          selectedProduct={selectedProduct}
          onSelect={(selectedProduct) => setSelectedProduct(selectedProduct)}
          onGoBack={() => returnToLandingPage()}
          onContinue={() => setCurrentStep(1)}
        />
      )}
    </div>
  );
};
