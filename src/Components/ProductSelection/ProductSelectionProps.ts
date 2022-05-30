import { PackageProps } from "../Package/PackageProps";

export type ProductSelectionProps = {
  selectedProduct: PackageProps;
  onSelect: (product: PackageProps) => void;
  onGoBack: () => void;
  onContinue: () => void;
};
