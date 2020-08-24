import React from "react"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location, pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} className="blogPageArticle">
            <small className="blogDate">{node.frontmatter.date}</small>
            <header>
              <h3 className="blogTitle">{title}</h3>
            </header>
            <section className="blogBody">
              {node.frontmatter.image && (
                <img
                  src={`/images/${node.frontmatter.image}`}
                  alt={title}
                  onError={i => (i.target.style.display = "none")}
                  className="postImage"
                />
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
            </section>
          </article>
        )
      })}
      <div className="pagination">
        {previousPagePath && (
          <Link to={previousPagePath} className="prev">
            &lt; Previous
          </Link>
        )}
        {nextPagePath && (
          <Link to={nextPagePath} className="next">
            Next &gt;
          </Link>
        )}
      </div>
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image
          }
        }
      }
    }
  }
`
