import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { LandingPageProps } from "./LandingPageProps";

import "./landing-page.scss";

export const LandingPage = ({
  content,
  ctaButtonLabel,
  goToProductSelection,
}: LandingPageProps): JSX.Element => {
  return (
    <div className={"landing-page"}>
      <nav className={"landing-page__navigation"}>
        <ul className={"landing-page__navigation-list"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Kurse</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </nav>
      <div className={"landing-page__image"}>
        <div className={"landing-page__image-heading"}>
          WEG ZURÜCK ZUR WAHREN NATUR
        </div>
      </div>
      <section className={"landing-page__section"}>
        <div className={"landing-page__section-image"} />
        <div className={"landing-page__section-body"}>
          <h2 className={"landing-page__section-heading"}>DEIN KÖRPER</h2>
          <p className={"landing-page__section-paragraph"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            amet aspernatur at cumque dolores facilis hic ipsam iure libero,
            necessitatibus nesciunt nulla omnis perspiciatis praesentium, quas
            repellendus saepe voluptas voluptates!
          </p>
          <p className={"landing-page__section-paragraph"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium consequatur consequuntur eos iusto, magnam magni maxime
            molestiae, optio perspiciatis placeat ratione, velit voluptatum.
            Animi aspernatur beatae doloremque maxime molestias repellat.
          </p>
        </div>
      </section>
      <section className={"landing-page__section"}>
        <div className={"landing-page__section-image"} />
        <div className={"landing-page__section-body"}>
          <h2 className={"landing-page__section-heading"}>SEELE UND GEIST</h2>
          <p className={"landing-page__section-paragraph"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            amet aspernatur at cumque dolores facilis hic ipsam iure libero,
            necessitatibus nesciunt nulla omnis perspiciatis praesentium, quas
            repellendus saepe voluptas voluptates!
          </p>
          <p className={"landing-page__section-paragraph"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium consequatur consequuntur eos iusto, magnam magni maxime
            molestiae, optio perspiciatis placeat ratione, velit voluptatum.
            Animi aspernatur beatae doloremque maxime molestias repellat.
          </p>
        </div>
      </section>
      <section className={"landing-page__section"}>
        <div className={"landing-page__image"}>
          <div className={"landing-page__image-heading"}>
            WIE DIE NATUR DICH HEILT
          </div>
          <button onClick={goToProductSelection}>
            {"Hier geht's zu den Kursen"}
          </button>
        </div>
      </section>
      <PageHeader
        ctaButtonLabel={ctaButtonLabel}
        heading={"Landing Page"}
        onCtaButtonClick={goToProductSelection}
      />
      {content && <div className={"landing-page__intro"}>{content}</div>}
      {ctaButtonLabel && goToProductSelection && (
        <button onClick={goToProductSelection}>{ctaButtonLabel}</button>
      )}
    </div>
  );
};
