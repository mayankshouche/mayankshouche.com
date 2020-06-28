import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutPage from "../components/about-page"

const About = () => (
    <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <AboutPage />
    </Layout>
)

export default About