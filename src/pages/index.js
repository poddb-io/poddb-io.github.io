import * as React from 'react'
import Intro from '../components/heroes/intro'
import Ecosystem from '../components/heroes/ecosystem'
import Roadmap from '../components/heroes/roadmap'
import Layout from '../components/layout'
import Contacts from '../components/heroes/contacts'
import Headline from '../components/heroes/headline'
import Doing from '../components/heroes/doing'
import Audit from '../components/heroes/audit'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Headline />
      <Intro />
      <Doing />
      <Ecosystem />
      <Roadmap />
      <Audit />
      <Contacts />
    </Layout>
  )
}

export default IndexPage