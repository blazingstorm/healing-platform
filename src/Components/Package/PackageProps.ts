import { Symptom } from "../Symptom/SymptomProps";

export type advancedPackageInformation = {
  body: string;
  mind: string;
  soul: string;
};

export type packageType = "starter" | "basic" | "intensive";

export type Package = {
  type: packageType;
  label: string;
  description: string;
};

export type AdvancedPackage = Package & {
  additionalInformation: advancedPackageInformation;
  symptom: Symptom;
};

export type StarterPackage = Package & {
  type: "starter";
};

export type BasicPackage = AdvancedPackage & {
  type: "basic";
};

export type IntensivePackage = AdvancedPackage & {
  type: "intensive";
};

export type PackageProps = StarterPackage | BasicPackage | IntensivePackage;
