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
  const [repos, setRepos] = useState<Repo[]>([]);
  useEffect(() => {
    fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
      .then((res: Response) => res.json())
      .then((data: Repo[]) => {
        if (data.length === undefined) return setRepos([])
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
  }, []);

  return (
    <div className='w-full flex flex-col items-center'>
      <Header />
      <AboutMe />
      <TechnicalExperience />
      {!repos.length ?
        <h1 className='p-4 my-12 text-xl bg-sky-600 w-4/5 text-center text-white rounded-xl'>
          Error: Couldn't fetch projects from GitHub, please try again later
        </h1> :
        <>
          <RecentProjects repos={repos} />
          <FrontEndProjects repos={repos} />
          <BackEndProjects repos={repos} />
          <CommandLineProjects repos={repos} />
          <AllProjects repos={repos} />
        </>
        }
    </div>
  );
}
