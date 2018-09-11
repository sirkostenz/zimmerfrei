import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './gatstrap.scss'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Zimmervermietung Stenz in Leezen bei Schwerin (Mecklenburg-Vorpommern)' },
        { name: 'keywords', content: 'Zimmervermietung, Helios Klinik Leezen, Leezen bei Schwerin, Ferienwohnung, Unterkunft, Unterkünfte, Ferienwohnungen, Ferienwohnung, Pension, Gästezimmer, Ferienzimmer, Apartment, Zimmer, Fewo, Mecklenburg Vorpommern, Schwerin, Landeshauptstadt, Reha Klinik Leezen, Helios' },
      ]}
    />

    <Header siteTitle={data.site.siteMetadata.title} />

      <div id="content"

    >
      {children()}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
