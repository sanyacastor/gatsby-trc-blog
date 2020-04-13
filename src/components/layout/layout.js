/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {motion, AnimatePresence} from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import './layout.scss'

import Header from "../header/header" 

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main className="page">
          <AnimatePresence>
          <motion.div
            initial={{ opacity: 0,
                        y: "-50px",
                        }}
            animate={{ opacity: 1,
                        y: "0px",
                         }}
            exit={{ opacity: 0,
                    y: "150px" }}
            >
            {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
