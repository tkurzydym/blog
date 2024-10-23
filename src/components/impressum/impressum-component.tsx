import React, { useState } from "react";
import { Buffer } from "buffer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledImpressumButton = styled.div`
    button {
        background-color: transparent;  /* Make the button background transparent */
        border: none;                   /* Remove any borders */
        color: inherit;                 /* Inherit text color from parent */
        font-size: 16px;                /* Adjust font size */
        cursor: pointer;                /* Show pointer on hover */
        display: flex;                  /* Flexbox to align icon and text */
        align-items: center;            /* Vertically center icon and text */
        gap: 8px;                       /* Add spacing between icon and text */
    }

    button:focus {
        outline: none;                  /* Remove the focus outline */
    }

    button:hover {
        color: var(--violet);                 /* Change color on hover (optional) */
        transition: color 0.3s ease;    /* Smooth transition for hover effect */
    }

`

// Base64 encoded address, second address, and email
const encodedAddress = "VG9iaWFzIEt1cnp5ZHltCkhlcnJlbndlZyA2NAoyNjEzNSBPbGRlbmJ1cmc=";
const encodedEmail = "dG9iaWFzLmt1cnp5ZHltQGdtYWlsLmNvbQ=="; // xxx@gmail.com

const Impressum = () => {
  // State to handle accordion open/close
  const [isOpen, setIsOpen] = useState(false);

  // Toggle accordion open/close
  const toggleImpressum = () => {
    setIsOpen(!isOpen);
  };

  // Decode base64-encoded values
  const decodedAddress = Buffer.from(encodedAddress, 'base64').toString();
  const decodedEmail = Buffer.from(encodedEmail, 'base64').toString();

  return (
      <div className="impressum">
          <StyledImpressumButton>
              <button onClick={toggleImpressum}>
                  {isOpen ? (
                      <>
                          <FontAwesomeIcon icon={faChevronUp}/> Hide Impressum
                      </>
                  ) : (
                      <>
                          <FontAwesomeIcon icon={faChevronDown}/> Show Impressum
                      </>
                  )}
              </button>
          </StyledImpressumButton>
          {isOpen && (
              <div>
                  <h1>Impressum | Legal Notice</h1>
                  <p>Angaben gemäß § 5 TMG | Responsible according to § 5 TMG</p>
                  <p>
                      {/* Use decoded first address */}
                      {decodedAddress.split("\n").map((line, idx) => (
                          <span key={idx}>
                {line}
                              <br/>
              </span>
                      ))}
                  </p>
                  <p>
                      <strong>Kontakt | Contact:</strong> <br/>
                      E-Mail:{" "}
                      {/* Display decoded email */}
                      <a href={`mailto:${decodedEmail}`}>{decodedEmail}</a>
                      <br/>
                  </p>
                  <p>
                      <strong>
                          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV | Responsible
                          for the content according to § 55 Abs. 2 RStV:
                      </strong>
                      <br/>
                      {/* Use decoded second address */}
                      {decodedAddress.split("\n").map((line, idx) => (
                          <span key={idx}>
                {line}
                              <br/>
              </span>
                      ))}
                  </p>

                  <p>
                      <strong>Haftungsausschluss: </strong>
                      <br/>
                      <br/>
                      <strong>Haftung für Inhalte</strong>
                      <br/>
                      <br/>
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
                      die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
                      wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
                      gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                      allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                      als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                      gespeicherte fremde Informationen zu überwachen oder nach
                      Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                      hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
                      von Informationen nach den allgemeinen Gesetzen bleiben hiervon
                      unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                      Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                      Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                      Inhalte umgehend entfernen.
                      <br/>
                      <br/>
                      <strong>Haftung für Links</strong>
                      <br/>
                      <br/>
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                      Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                      fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                      verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                      der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                      Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                      Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                      erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
                      Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                      Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                      Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                      <br/>
                      <br/>
                      <strong>Urheberrecht</strong>
                      <br/>
                      <br/>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                      diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                      Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                      Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                      schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                      Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                      kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
                      Seite nicht vom Betreiber erstellt wurden, werden die
                      Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
                      als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                      Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                      entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                      werden wir derartige Inhalte umgehend entfernen.
                      <br/>
                      <br/>
                      <strong>Datenschutz</strong>
                      <br/>
                      <br/>
                      Die Nutzung unserer Webseite ist in der Regel ohne Angabe
                      personenbezogener Daten möglich. Soweit auf unseren Seiten
                      personenbezogene Daten (beispielsweise Name, Anschrift oder
                      eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                      stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
                      ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                      <br/>
                      Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
                      bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
                      Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                      nicht möglich.
                      <br/>
                      Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                      Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
                      angeforderter Werbung und Informationsmaterialien wird hiermit
                      ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
                      ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
                      von Werbeinformationen, etwa durch Spam-Mails, vor.
                      <br/>
                  </p>
                  <br/>
                  Website Impressum von{" "}
                  <a href="https://www.impressum-generator.de">impressum-generator.de</a>
              </div>
          )}
      </div>
  );
};

export default Impressum;
