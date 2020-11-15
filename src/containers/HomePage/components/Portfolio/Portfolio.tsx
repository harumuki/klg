import React, { FC } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { P } from "../../../../components/Typo"
import Dot from "../../../../components/Dot"
import "./Portfolio.css"

type PortfolioProps = {}

const Portfolio: FC<PortfolioProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      przeplotki: file(relativePath: { eq: "przeplotki/cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1328) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section id="portfolio" className="pt-24 pb-56">
      <Link to="/portfolio/przeplotki" className="portfolio-item">
        <div className="relative grid grid-cols-2 gap-6 mx-auto">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold uppercase">Przeplotki</h3>
            <P className="mb-4 text-lg leading-tight">
              zabawki
              <Dot />
              opakowania
              <Dot />
              materiały reklamowe
              <Dot />
              systemy wystawiennicze
            </P>
          </div>
          <div>
            <Img
              fluid={{
                ...data.przeplotki.childImageSharp.fluid,
                aspectRatio: 5 / 3,
              }}
            />
          </div>
        </div>
      </Link>
    </section>
  )
}

export default Portfolio