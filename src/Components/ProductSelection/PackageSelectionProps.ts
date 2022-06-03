import { PackageProps } from "../Package/PackageProps";

export type PackageSelectionProps = {
  selectedPackage: PackageProps;
  onPackageSelection: (product: PackageProps) => void;
  onGoBack: () => void;
  onContinue: () => void;
};
