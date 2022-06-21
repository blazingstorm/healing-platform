import { PackageProps } from "../Package/PackageProps";

export type PackageSelectionProps = {
  selectedPackage: PackageProps;
  onPackageTypeSelection: (product: PackageProps) => void;
  onGoBack: () => void;
  onContinue: () => void;
};
