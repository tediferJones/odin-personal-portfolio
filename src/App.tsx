import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import TechnicalExperience from './components/TechnicalExperience';
import BackEndProjects from './components/BackEndProjects';
import FrontEndProjects from './components/FrontEndProjects';
import CommandLineProjects from './components/CommandLineProjects';
import AllProjects from './components/AllProjects';
import { externalPages, ignoredRepos } from './contentConfig';
import { Repo, MenuState } from './types';
import Menu from './components/subcomponents/Menu';
// const idk = require('./resume.pdf')
// console.log(idk)

export default function App() {
  const [repos, setRepos] = useState<Array<Repo>>([]);
  const [showMenu, setShowMenu] = useState<MenuState>({ display: false, title: '' });

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
      <div className='bg-sky-600 text-gray-100 w-full flex justify-center'>
        <div className='w-4/5 flex justify-between items-center'>
          <h1 className='text-3xl p-8 font-bold'>Theo Drzewinski</h1>
          <div className='text-xl flex gap-1 flex-col sm:flex-row sm:gap-6'>
            <a className='hidden lg:flex gap-2 items-center hover:bg-sky-800 p-2 rounded-xl'
              href={require('./assets/documents/resume.pdf')}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className="fa-solid fa-file-invoice"></i>
              Resume
            </a>
            <a className='hidden lg:flex gap-2 items-center hover:bg-sky-800 p-2 rounded-xl'
              href='https://github.com/tediferJones'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
            <a className='hidden lg:flex gap-2 items-center hover:bg-sky-800 p-2 rounded-xl'
              href='mailto:theo_drz@live.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className="fa-solid fa-at"></i>
              Contact
            </a>
            <Menu icon='fa-solid fa-at' title='Contact'
              options={[]}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
            <Menu icon='fa-solid fa-bars' title='Menu'
              // options={{
              //   '#AboutMe': 'About Me',
              //   '#TechnicalExperience': 'Technical Experience',
              //   '#BackEndProjects': 'Back-End Projects',
              //   '#FrontEndProjects': 'Front-End Projects',
              //   '#CliProjects': 'CLI Projects',
              //   '#AllProjects': 'All Projects',
              // }}
              options={[
                { href: '#AboutMe', content: 'About Me' },
                { href: '#TechnicalExperience', content: 'Technical Experience' },
                { href: '#BackEndProjects', content: 'Back-End Projects' },
                { href: '#FrontEndProjects', content: 'Front-End Projects' },
                { href: '#CliProjects', content: 'CLI Projects' },
                { href: '#AllProjects', content: 'All Projects' },
              ]}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
         </div>
        </div>
      </div>
      <AboutMe />
      <TechnicalExperience />
      <BackEndProjects repos={repos} />
      <FrontEndProjects repos={repos} />
      <CommandLineProjects repos={repos} />
      <AllProjects repos={repos} />
    </div>
  );
}
