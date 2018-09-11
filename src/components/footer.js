import React from 'react'
import Link from 'gatsby-link'

import './footer.scss'
import map from '../assets/images/site/map.png'

const Footer = () => (
  <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="map">
                <img src={map} alt="Zimmervermietung Stenz -Karte" />
            </div>
            <div className="intro-text">
                <h3>zimmerfrei.stenz.de</h3>
                <p>
                    Wir vermieten <Link to="/zimmer/">Zimmer</Link> in <Link to="/leezen/">Leezen am Schweriner See</Link> nur 15 km entfernt von Schwerin, der
                    Landeshauptstadt von Mecklenburg-Vorpommern.
                </p>
                <p>
                    Unsere Zimmer sind komplett ausgestattet mit Küche, Duschbad, Geschirr, Fernseher usw. Ideal für einen längeren Aufenthalt, egal ob Sie Urlaub
                    machen oder Angehörige in der <Link to="/klinik-leezen/">Klinik Leezen</Link> besuchen.
                </p>
            </div>
            <div className="contact-address">
                <h3>Kontakt</h3>
                <p>
                    Ursula Stenz<br />
                    Hauptstrasse 25<br />
                    19067 Leezen
                </p>
                <p>
                    Telefon: +49 3866 81627<br />
                    Fax: +49 3866 839439<br />
                </p>
                <p>
                    E-Mail: <a href="mailto:zimmerfrei@stenz.de">zimmerfrei@stenz.de</a><br />
                </p>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="footer-nav">
            <ul>
                <li>
                    <Link exact to="/">Startseite</Link>
                </li>
                <li>
                    <Link exact to="/buchung/">Buchungsbedingungen</Link>
                </li>
                <li>
                    <Link exact to="/anfahrt/">Anfahrt</Link>
                </li>
                <li>
                    <Link exact to="/kontakt/">Kontakt</Link>
                </li>
                <li>
                    <Link exact to="/impressum/">Impressum</Link>
                </li>
            </ul>
        </div>
    </div>
  </footer>
)

export default Footer
