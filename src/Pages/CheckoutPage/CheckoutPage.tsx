import React, { useState } from "react";
import { CheckoutPageProps } from "./CheckoutPageProps";
import Summary from "../../Components/Summary/Summary";
import PackageSelection from "../../Components/ProductSelection/PackageSelection";
import { PackageProps } from "../../Components/Package/PackageProps";
import {packages} from "../../Components/Package/Package";

export const CheckoutPage = ({
  returnToLandingPage,
}: CheckoutPageProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPackageType, setSelectedPackageType] =
    useState<PackageProps>(packages[0]);

  const goBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className={"checkout-page"}>
      {currentStep === 1 ? (
        <Summary selectedProduct={selectedPackageType} onGoBack={() => goBack()} />
      ) : (
        <PackageSelection
          selectedPackage={selectedPackageType}
          onPackageTypeSelection={(selectedPackageType) => setSelectedPackageType(selectedPackageType)}
          onGoBack={() => returnToLandingPage()}
          onContinue={() => setCurrentStep(1)}
        />
      )}
    </div>
  );
};
