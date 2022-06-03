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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At hoc in eo M. Quae similitudo in genere etiam humano apparet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At hoc in eo M. Quae similitudo in genere etiam humano apparet.",
  summaryLong: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
};

const basicPackage: BasicPackage = {
  type: "basic",
  label: "Basis",
  description:
    "Quid enim de amicitia statueris utilitatis causa expetenda vides. Duo Reges: constructio interrete.",
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
