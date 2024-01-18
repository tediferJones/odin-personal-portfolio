interface Repo {
  name: string,
  language: string,
  html_url: string,
  updated_at: string,
  has_pages: boolean,
  page_link?: string,
}

interface MenuItem {
  href: string,
  content: string,
  icon?: string,
  isLink?: boolean,
}

interface MenuState {
  display: boolean,
  title: string,
}

export type {
  Repo,
  MenuItem,
  MenuState,
}
