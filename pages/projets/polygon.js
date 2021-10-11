import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/Layout'
import SubHeader from '../../components/SectionHeader'
import Container from '../../components/SectionContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>{"<Hugo /> N°3 Polygon Rôleplay"}</title>
      </Head>

      <Layout path="index">
        <SubHeader title="Polygon RôlePlay">
          <h3>Node.js, SQL, SteamAuth</h3>
        </SubHeader>
        <Container>
          <h3>Next.js, Google API</h3>
          <p>Le but était de me familiariser avec les Framework Next et React.</p>
        </Container>
      </Layout>
    </>
  )
}
