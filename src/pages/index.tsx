import * as React from "react"
import { Layout } from "../components/layout"
import type { HeadFC, PageProps } from "gatsby"
import { socials as socialsClass } from "../components/social.module.css"

type SocialType = {
  icon: string,
  url: string,
  name: string,
  extra_tags?: any
}
const socials: SocialType[] = [
  {
    name: "Mastodon",
    url: "https://toot.lgbt/@auscyber",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/48/Mastodon_Logotype_%28Simple%29.svg",
    extra_tags: {
      rel: "me"
    },
  },
  {
    name: "Twitter",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg",
    url: "https://twitter.com/@phoebeebridgers"
  },
  {
    name: "Instagram",
    url: "https://instagra.com/@seeourreflectioninthewaterr",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
  }
]
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={socialsClass}>
        {socials.map((social) =>

          <a href={social.url} {...social.extra_tags}><img src={social.icon} style={{ display: "inline-block", height: "1em" }}></img></a>
        )}</div>
    </Layout>)
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
