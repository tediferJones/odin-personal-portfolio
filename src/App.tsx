import { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import TechnicalExperience from './components/TechnicalExperience';
import BackEndProjects from './components/BackEndProjects';
import FrontEndProjects from './components/FrontEndProjects';
import CommandLineProjects from './components/CommandLineProjects';
import AllProjects from './components/AllProjects';
import { externalPages, ignoredRepos } from './contentConfig';
import { Repo } from './types';

export default function App() {
  const [repos, setRepos] = useState<Array<Repo>>([]);

  // If you delete this then delete the styles from index.css too
  // Consider renaming index.css to styles.css
  // document.body.classList.add('innerScrollbar')
  //
  // TRY TO DELETE UUIDV4 FROM REPOLIST
  // CONSIDER SLICING THE REPOS ARRAY HERE
  // We want to be able to control the order things are displayed in
  // The easist way might be to turn the main Repo[], into { [repoName]: Repo }
  // But this would make the allProjects component much more convoluted
  // OR we could just use reduce to convert the obj back into an array
  // We would then have to sort by time, because obj will be sorted alphabetically
  //
  // As an extra bonus, if we can do the repo slicing in this component, 
  // then we can handle all import from contentConfig here too
  //
  // Fix RepoList spacing at bottom of DropDown components
  //
  // Add Menu with links to subsections (i.e. #AllProjects)
  // Add rounding to FrontEndProjects
  // Convert language name to language devicon in FrontEndProjects
  //  - If possible try to detect framework, if it is a react app, show the react devicon
  //
  //  Consider making an 'AnchorTag' subcomponent,
  //  Could be used for all links (internal and external)
  //  Make Resume, Github, and Phone links appear in Contact Menu
  //    - Resume and Github should only appear after screen is smaller than lg: size

  // Move backend projects to its own mini drop down and place it above cli projects
  // Then create a recent projects list that mimics the original backend projects component
  // 
  // Turn backend projects component into recent projects
  // Make a mini dropdown for backend projects

  useEffect(() => {
    fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
      .then((res: Response) => res.json())
      .then((data: Repo[]) => {
        const keys = Object.keys(externalPages);
        setRepos(
          data.filter(repo => repo.language && !ignoredRepos.includes(repo.name))
            .map((repo: Repo) => {
              const { name, has_pages } = repo;
              if (has_pages || keys.includes(name)) {
                repo.page_link = has_pages ? `https://tediferjones.github.io/${repo.name}`
                  : externalPages[repo.name]; 
              }
              return repo
            }).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        );
      })
  }, [])

  return (
    <div className='flex flex-col items-center w-full'>
      <Header />
      <AboutMe />
      <TechnicalExperience />
      <BackEndProjects repos={repos} />
      <FrontEndProjects repos={repos} />
      <CommandLineProjects repos={repos} />
      <AllProjects repos={repos} />
    </div>
  );
}
