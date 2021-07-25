// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "react-seo-component"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Index: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO
      title={"Home"}
      titleTemplate={"21YunBox"}
      titleSeparator={`-`}
      description={"gatsbyjs+shopify - 21YunBox demo"}
      image={"https://i.ibb.co/6RWBX1d/Mindfulness-Capital.png"}
      pathname={"mainpage"}
      siteLanguage={"en"}
      siteLocale="en_gb"
      twitterUsername={"lidachao1122"}
    />
    index
  </Layout>
)

export default Index

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
