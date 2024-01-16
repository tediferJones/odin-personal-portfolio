interface Repo {
  name: string,
  language: string,
  html_url: string,
  updated_at: string,
  has_pages: boolean,
  page_link?: string,
}

export type {
  Repo,
}
