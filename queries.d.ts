interface AllPosts {
  edges: PostEdge[]
}

interface PostEdge {
  node: Post
}

interface Post {
  title: string
  meta: Meta
  series?: Series
  portfolioItem?: unknown
  body: {
    body: string
    childMarkdownRemark: MarkdownRemark
  }
}

interface Meta {
  id: string
  slug: string
  entryDate: string
  desc: {
    desc: string
    childMarkdownRemark: MarkdownRemark
  }
  tags: string[]
  thumbnail?: Image
}

interface Series {
  id: string
  meta: Meta
  post: Post[]
  title: string
}

interface MarkdownRemark {
  excerpt: string
  excerptAst: unknown
  fields: {
    readingTime: {
      text: string
      [key: 'minutes' | 'time' | 'words']: number
    }
  }
  html: string
  htmlAst: unknown
  rawMarkdownBody: string
  wordCount: {
    [key: 'paragraphs' | 'sentences' | 'words']: number
  }
}

interface Image {
  id: string
  title: string
  description?: string
  fluid: import('gatsby-image').FluidObject
  fixed: import('gatsby-image').FixedObject
}

interface AllPages {
  edges: PageEdge[]
}

interface PageEdge {
  node: Page
}

interface Page {
  index: number
  isTopLevel: boolean
  meta: Meta | SiteMetaData
  title: string
}

interface PageHome extends Page {
  blocks: HomeBlocks
}

interface PageAbout extends Page {
  blocks: AboutBlocks
}

interface PageContact extends Page {
  blocks: ContactBlocks
}

interface SiteMetaData {
  title: string
  baseURL?: string
  description?: string
  builtWith?: string[]
}

interface HomeBlocks {
  title: string
  subTitle?: string
  authorBio: Bio
}

interface Bio {
  firstName: string
  lastName: string
  blurbTitle?: string
  blurbDesc?: {
    blurbDesc: string
    childMarkdownRemark: MarkdownRemark
  }
  profilePicture: Image
  socialLinks: SocialLinks
}

interface SocialLinks {
  [key:
    'dev' |
    'email' |
    'facebook' |
    'github' |
    'instagram' |
    'linkedin' |
    'nickname' |
    'twitter'
  ]: string
}

interface AboutBlocks {
  title: string
  body: {
    body: string
    childMarkdownRemark: MarkdownRemark
  }
}

interface ContactBlocks {
  title: string
  body: {
    body: string
    childMarkdownRemark: MarkdownRemark
  }
  contactPerson: Bio
}

