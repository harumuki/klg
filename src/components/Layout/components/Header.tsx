import { Link } from "gatsby"
import React, { CSSProperties } from "react"
import Wrapper from "../../Wrapper"
import MenuLink from "./MenuLink"

export type HeaderProps = {
  largeDecoration?: boolean
}

const decorationStyles: CSSProperties = {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: -2,
}

const Header: React.FC<HeaderProps> = ({ largeDecoration }) => (
  <>
    <div
      style={{
        ...decorationStyles,
        height: largeDecoration ? "95vh" : "6.5rem",
        width: "calc(50% - 442px)",
      }}
      className="bg-lightGray hidden xxl:block"
    />
    <div
      style={{
        ...decorationStyles,
        height: largeDecoration ? "95vh" : "6.5rem",
        width: "24.5%",
      }}
      className="bg-lightGray block xxl:hidden"
    />
    <Wrapper>
      <header className="pt-6 md:pt-12 pb-10">
        <div className="md:w-3/4 z-1 relative">
          <nav className="flex text:md flex-wrap flex-col md:flex-row ml-0 xs:ml-10 md:ml-0">
            <h1 className="lowercase font-bold text-lg">
              <Link to="/">Magda Klag</Link>
            </h1>
            <ul className="mr-auto md:mr-0 md:ml-auto md:w-auto text-sm grid gap-x-3 grid-flow-col">
              <li>
                <MenuLink className="menuLink" to="/#o-mnie">
                  o mnie
                </MenuLink>
              </li>
              <li>
                <MenuLink className="menuLink" to="/#portfolio">
                  portfolio
                </MenuLink>
              </li>
              <li>
                <MenuLink className="menuLink" to="/#kontakt">
                  kontakt
                </MenuLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Wrapper>
  </>
)

export default Header
