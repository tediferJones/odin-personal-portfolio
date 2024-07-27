import home from '@/components/home'
import { externalPages, ignoredRepos } from './contentConfig';
import type { Repo } from '@/types';

fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
  .then((res: Response) => res.json())
  .then((data: Repo[]) => {
    if (data.length === undefined) {
      console.log('EARLY RETURN')
      return []
    }
    const keys = Object.keys(externalPages);
    const repos = data.filter(repo => repo.language && !ignoredRepos.includes(repo.name))
      .map((repo: Repo) => {
        const { name, has_pages } = repo;
        if (has_pages || keys.includes(name)) {
          repo.page_link = has_pages ? `https://tediferjones.github.io/${name}`
            : externalPages[name]; 
        }
        return repo
      }).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

    document.body.appendChild(home(repos))
  })
