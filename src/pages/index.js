import React from 'react'

import { About, Contact, Intro, Projects, Skills } from 'components/landing'
import { Layout, SEO } from 'components/common'

const Index = () => (
  <Layout>
    <SEO />
    <Intro />
    <About />
    <Projects />
    <Skills />
    {/* <Contact /> */}
  </Layout>
)

export default Index
