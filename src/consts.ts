import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "wicky.dev",
  DESCRIPTION: "Welcome to wicky.dev",
  AUTHOR: "Cullan Wickramasuriya",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "cullan.wick@gmail.com",
    HREF: "mailto:cullan.wickv@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "cullan_wick",
    HREF: "https://github.com/cullan-wick",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/cullan-wick/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "wicky__dev",
    HREF: "https://x.com/wicky__dev",
  },
]

