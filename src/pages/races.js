import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Races = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <h2>Гонки</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Races
