import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/Layout'
import Section from '../../components/SectionHeader'
import Container from '../../components/SectionContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>{"<Hugo /> N°5 YouClone"}</title>
      </Head>

      <Layout path="index">
        <Section title="YouClone" />
        <Container>
          <h3>Next.js, Google API</h3>
          <p>Le but était de me familiariser avec les Framework Next et React.</p>
        </Container>
      </Layout>
    </>
  )
}
