import {
  BasicPackage,
  IntensivePackage,
  PackageProps,
  StarterPackage,
} from "./PackageProps";

const starterPackage: StarterPackage = {
  type: "starter",
  label: "Starter",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At hoc in eo M. Quae similitudo in genere etiam humano apparet. Eam stabilem appellas.",
};

const basicPackage: BasicPackage = {
  type: "basic",
  label: "Basis",
  description:
    "Quid enim de amicitia statueris utilitatis causa expetenda vides. Duo Reges: constructio interrete.",
  additionalInformation: {
    body: "",
    mind: "",
    soul: "",
  },
  symptom: {
    level: 1,
    name: "",
    treatmentDuration: 3,
    description: "",
  },
};

const intensivePackage: IntensivePackage = {
  type: "intensive",
  label: "Intensiv",
  description:
    "Sed nimis multa. Sed quot homines, tot sententiae; Zenonis est, inquam, hoc Stoici. Tuo vero id quidem, inquam, arbitratu.",
  additionalInformation: {
    body: "",
    mind: "",
    soul: "",
  },
  symptom: {
    level: 1,
    name: "",
    treatmentDuration: 3,
    description: "",
  },
};

export const packages: PackageProps[] = [
  starterPackage,
  basicPackage,
  intensivePackage,
];
