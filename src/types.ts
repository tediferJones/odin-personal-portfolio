interface repo {
  name: string,
  language: string,
  html_url: string,
  updated_at: string,
  has_pages: boolean,
  page_link?: string,
}

interface stateContainer {
  [key: string]: Array<repo>
}

interface externalPageObj {
  [key: string]: string
}

export type { repo, stateContainer, externalPageObj }
