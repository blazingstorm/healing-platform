import { PackageProps } from "../Package/PackageProps";

export type SummaryProps = {
  selectedProduct: PackageProps;
  onGoBack: () => void;
};

export type PaymentFormInputProps = {
  id: string;
  label: string;
  type: string;
};

export type PaymentFormSectionProps = {
  heading: string;
  inputs: PaymentFormInputProps[];
};
