import React, { CSSProperties } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import Wrapper from "../../Wrapper"
import HoverLink from "../../HoverLink"
import LayoutShift from "../../LayoutShift"
import "./Header.css"

export type HeaderProps = {
  largeDecoration?: boolean
}

const decorationStyles: CSSProperties = {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: -2,
}

const Header: React.FC<HeaderProps> = ({ largeDecoration }) => {
  const location = useLocation()
  const isHomePage = location?.pathname === "/"
  const navigation = ["o mnie", "portfolio", "kontakt"]

  return (
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
      <Wrapper className="relative z-10">
        <header className="pt-6 md:pt-12 pb-4 md:pb-10">
          <div className="md:w-3/4 z-1 relative">
            <LayoutShift>
              <nav className="flex text:md flex-wrap flex-col md:flex-row">
                <span data-test="logo" className="lowercase font-bold text-lg">
                  <Link to="/" className="outline-none headerLogo">
                    <span tabIndex={-1} className="outline-none">
                      Trần Thùy Chinh
                    </span>
                  </Link>
                </span>
                <ul
                  data-test="menu"
                  className="mr-auto md:mr-0 md:ml-auto md:w-auto text-sm grid gap-x-3 grid-flow-col"
                >
                  {navigation.map(text => {
                    const link = text.replace(/[^\w\d]/g, "-")
                    const to = isHomePage ? `#${link}` : `/#${link}`
                    return (
                      <li>
                        <HoverLink to={to}>{text}</HoverLink>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </LayoutShift>
          </div>
        </header>
      </Wrapper>
    </>
  )
}

export default Header
