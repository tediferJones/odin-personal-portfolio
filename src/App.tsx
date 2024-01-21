import { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import TechnicalExperience from './components/TechnicalExperience';
import RecentProjects from './components/RecentProjects';
import FrontEndProjects from './components/FrontEndProjects';
import BackEndProjects from './components/BackEndProjects';
import CommandLineProjects from './components/CommandLineProjects';
import AllProjects from './components/AllProjects';
import { externalPages, ignoredRepos } from './contentConfig';
import { Repo } from './types';

export default function App() {
  const [repos, setRepos] = useState<Array<Repo>>([]);

  // Do we want to have control over the order repos are displayed in?
  // The easist way might be to turn the main Repo[], into { [repoName]: Repo }
  // But this would make the allProjects component much more convoluted
  // OR we could just use reduce to convert the obj back into an array
  // We would then have to sort by time, because obj will be sorted alphabetically
  //
  // See if get auto scroll to account for sticky header

  useEffect(() => {
    fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
      .then((res: Response) => res.json())
      .then((data: Repo[]) => {
        if (data.length === undefined) {
          throw Error('failed to get info from github')
        }
        const keys = Object.keys(externalPages);
        setRepos(
          data.filter(repo => repo.language && !ignoredRepos.includes(repo.name))
            .map((repo: Repo) => {
              const { name, has_pages } = repo;
              if (has_pages || keys.includes(name)) {
                repo.page_link = has_pages ? `https://tediferjones.github.io/${name}`
                  : externalPages[name]; 
              }
              return repo
            }).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        );
      })
  }, [])

  return (
    <div className='w-full flex flex-col items-center'>
      <Header />
      <AboutMe />
      <TechnicalExperience />
      <RecentProjects repos={repos} />
      <FrontEndProjects repos={repos} />
      <BackEndProjects repos={repos} />
      <CommandLineProjects repos={repos} />
      <AllProjects repos={repos} />
    </div>
  );
}
