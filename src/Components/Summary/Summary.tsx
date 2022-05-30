import React from "react";
import {
  PaymentFormInputProps,
  PaymentFormSectionProps,
  SummaryProps,
} from "./SummaryProps";
import PageHeader from "../PageHeader/PageHeader";
import { paymentFormFields } from "./payment-form-fields";

import "./summary.scss";

const PaymentFormInput = ({ id, type, label }: PaymentFormInputProps) => (
  <label htmlFor={id} className="summary-input">
    <span>{label}: </span>
    <input id={id} type={type} />
  </label>
);

const PaymentFormSection = ({ heading, inputs }: PaymentFormSectionProps) => (
  <div className={"payment-form__section"}>
    <h4 className={"payment-form__section-heading"}>
      <i>{heading}</i>
    </h4>
    {inputs.map((input, index) => (
      <PaymentFormInput
        key={index}
        id={input.id}
        label={input.label}
        type={input.type}
      />
    ))}
  </div>
);

const PaymentForm = () => (
  <form action="" className="summary-form">
    <PaymentFormSection heading={"Name"} inputs={paymentFormFields.name} />
    <PaymentFormSection
      heading={"Rechnungsadresse"}
      inputs={paymentFormFields.address}
    />
    <PaymentFormSection
      heading={"Kontaktdaten"}
      inputs={paymentFormFields.contact}
    />
  </form>
);

const Summary = ({ selectedProduct, onGoBack }: SummaryProps): JSX.Element => {
  return (
    <div className={"summary"}>
      <PageHeader
        heading={"Zusammenfassung"}
        ctaButtonLabel={"Zurück"}
        onCtaButtonClick={onGoBack}
      />
      <h3>{selectedProduct.label}</h3>
      <div>{selectedProduct.description}</div>
      {selectedProduct.type !== "starter" ? (
        <>
          <div>Level: {selectedProduct.symptom.level}</div>
          <div>Dauer: {selectedProduct.symptom.treatmentDuration}</div>
        </>
      ) : null}
      <PaymentForm />
    </div>
  );
};

export default Summary;
