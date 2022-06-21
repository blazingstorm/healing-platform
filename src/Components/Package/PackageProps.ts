import { Symptom } from "../Symptom/SymptomProps";

export type packageType = "starter" | "basic" | "intensive";

export type Package = {
  type: packageType;
  label: string;
  description: string;
};

export type AdvancedPackage = Package & {
  symptoms: Symptom[];
};

export type StarterPackage = Package & {
  type: "starter";
  summaryLong: string[];
};

export type BasicPackage = AdvancedPackage & {
  type: "basic";
};

export type IntensivePackage = AdvancedPackage & {
  type: "intensive";
};

export type PackageProps = StarterPackage | BasicPackage | IntensivePackage;
