import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/Layout'
import Section from '../../components/SectionHeader'
import Container from '../../components/SectionContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>{"<Hugo /> N°1 Rosella Tea"}</title>
      </Head>

      <Layout path="index">
        <Section title="Rosella Tea">
          <h3>HTML, SASS, JS</h3>
        </Section>
        <Container>
          <h3>Next.js, Google API</h3>
          <p>Le but était de me familiariser avec les Framework Next et React.</p>
        </Container>
      </Layout>
    </>
  )
}
