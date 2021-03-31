import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import { RenderAuthors } from "../components/helper"
import SEO from "../components/seo"
import { ShareButtons } from "../components/partials/social"

const PreviewOther = ({ post, isPrevious }) => {
  if (post)
    return (
      <div className="m-4">
        <b>
          {isPrevious === true ? "Previous Post: " : "Next Up: "}
          <Link to={"/blog/" + post.relativeDirectory}>
            {post.childMarkdownRemark.frontmatter.title}
          </Link>
        </b>
        <div className="post-info">
          <span>
            By&nbsp;
            <b>
              {RenderAuthors(post.childMarkdownRemark.frontmatter.authors, "")}
            </b>
          </span>
          <br />
          <span>{post.childMarkdownRemark.frontmatter.date}</span>
        </div>
        {post.childMarkdownRemark.excerpt}
      </div>
    )
  else return null
}

export const BlogArticle = ({ data, location }) => {
  return (
    <Layout>
      <SEO title={data.post.childMarkdownRemark.frontmatter.title} />
      <main className="page blog-post">
        <section className="clean-block clean-post dark">
          <div className="container">
            <div className="block-content">
              {data.post.childMarkdownRemark.frontmatter.displayOnBlog ===
              false ? null : (
                <>
                  <div
                    className="post-image"
                    style={{
                      backgroundImage: `url('${
                        data.post.childMarkdownRemark.frontmatter.image &&
                        data.post.childMarkdownRemark.frontmatter.image
                          .publicURL
                      }')`,
                      backgroundAttachment: "fixed",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </>
              )}

              <div className="post-body">
                <h3 className="pt-4">{data.post.childMarkdownRemark.frontmatter.title}</h3>
                <div className="post-info">
                  {data.post.childMarkdownRemark.timeToRead} minute read
                  <br />
                  <span>
                    By&nbsp;
                    <b>
                      {RenderAuthors(
                        data.post.childMarkdownRemark.frontmatter.authors,
                        ""
                      )}
                    </b>
                  </span>
                  -<span>{data.post.childMarkdownRemark.frontmatter.date}</span>
                  <br />
                  <ShareButtons
                    url={location.href}
                    title={data.post.childMarkdownRemark.frontmatter.title}
                    author={data.post.childMarkdownRemark.frontmatter.authors}
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.post.childMarkdownRemark.html,
                  }}
                />
                <span>
                  Written by&nbsp;
                  <b>
                    {RenderAuthors(
                      data.post.childMarkdownRemark.frontmatter.authors,
                      ""
                    )}
                    <br />
                    on {data.post.childMarkdownRemark.frontmatter.date}
                  </b>
                </span>
                <br />
                <ShareButtons
                  url={location.href}
                  title={data.post.childMarkdownRemark.frontmatter.title}
                  author={data.post.childMarkdownRemark.frontmatter.authors}
                />
              </div>
              <div className="post-body pt-4 pb-4">
                <Disqus
                  config={{
                    url: location.href,
                    identifier: data.post.childMarkdownRemark.id,
                    title: data.post.childMarkdownRemark.frontmatter.title+" | IET NITK",
                  }}
                />
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-6">
                  <PreviewOther post={data.before.nodes[0]} isPrevious={true} />
                </div>
                <div className="col-lg-6">
                  <PreviewOther post={data.after.nodes[0]} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!, $articleDate: Date!) {
    post: file(
      sourceInstanceName: { eq: "blog" }
      extension: { eq: "md" }
      relativeDirectory: { eq: $pathSlug }
    ) {
      childMarkdownRemark {
        frontmatter {
          authors
          date(formatString: "MMMM Do, YYYY")
          title
          displayOnBlog
          image {
            publicURL
          }
        }
        html
        id
        timeToRead
      }
    }
    before: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        ext: { eq: ".md" }
        childMarkdownRemark: { frontmatter: { date: { lt: $articleDate } } }
      }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      limit: 1
    ) {
      nodes {
        relativeDirectory
        
        childMarkdownRemark {
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
            authors
          }
          excerpt
        }
      }
    }

    after: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        ext: { eq: ".md" }
        childMarkdownRemark: { frontmatter: { date: { gt: $articleDate } } }
      }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      limit: 1
    ) {
      nodes {
        relativeDirectory
        childMarkdownRemark {
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
            displayOnBlog
            authors
          }
          excerpt
        }
      }
    }
  }
`

export default BlogArticle
