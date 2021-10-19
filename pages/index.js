import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`<Hugo /> Développeur FullStack JavaScript Junior`}</title>
      </Head>
      <Layout path="index">
          <Section title="YouClone" number="05" year="2021" path="youclone" />
          <Section title="Where In The World ?" number="04" year="2021" path="where-in-the-world" />
          <Section title="Polygon RôlePlay" number="03" year="2021" path="polygon" />
          <Section title="Maison des ados virtuelle" number="02" year="2020" path="mdav" />
          <Section title="Rosella tea" number="01" year="2020" path="rosella-tea" />
      </Layout>
    </>
  )
}
