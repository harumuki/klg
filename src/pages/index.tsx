import React, { FC, useEffect, useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SimulationCanvas from "../components/SimulationCanvas"
import { PageProps } from "gatsby"
import AboutMe from "../components/HomePage/AboutMe"
import Portfolio from "../components/HomePage/Portfolio"
import Contact from "../components/HomePage/Contact"

const tagKey = "kategoria"

const IndexPage: FC<PageProps> = ({ location }) => {
  const [tag, setTag] = useState<string>()

  useEffect(() => {
    // Not working with SSG - Gatsby bug -- see https://www.joshwcomeau.com/react/the-perils-of-rehydration/
    if (typeof window === "undefined") return

    const params = new URLSearchParams(location?.search)
    setTag(params?.get(tagKey) || undefined)
  })

  return (
    <>
      <SEO />
      <SimulationCanvas />
      <Layout largeDecoration>
        <AboutMe />
        <Portfolio tag={tag} />
        <Contact />
      </Layout>
    </>
  )
}
export default IndexPage
