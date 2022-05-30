import React, { useState } from "react";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import Container from "./Components/Container/Container";
import { CheckoutPage } from "./Pages/CheckoutPage/CheckoutPage";
import PageFooter from "./Components/PageFooter/PageFooter";

import "./styles/reset.scss";
import "./styles/base-style.scss";

const App = (): JSX.Element => {
  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <>
      <Container>
        {isCheckout ? (
          <CheckoutPage returnToLandingPage={() => setIsCheckout(false)} />
        ) : (
          <LandingPage
            ctaButtonLabel={"Produkt Auswählen"}
            goToProductSelection={() => setIsCheckout(true)}
            content={
              "Adipiscing in dui parturient consectetur eu nibh eleifend accumsan vestibulum imperdiet adipiscing adipiscing parturient eget arcu ornare quam scelerisque a a metus."
            }
          />
        )}
        <PageFooter />
      </Container>
    </>
  );
};

export default App;
