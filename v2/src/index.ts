// HOME COMPONENT CAN BE DELETED NOW
// import home from '@/components/home'
import { externalPages, ignoredRepos } from '@/contentConfig';
import type { Repo } from '@/types';


import t from '@/lib/getTag';
// import type { Repo } from '@/types';
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import TechnicalExperience from '@/components/TechnicalExperience';
import RecentProjects from '@/components/RecentProjects';
// import FrontEndProjects from '@/components/FrontEndProjects';
// RENAME BACKEND PROJECTS TO FULL STACK PROJECTS
import BackEndProjects from '@/components/BackEndProjects';
import CommandLineProjects from '@/components/CommandLineProjects';
import AllProjects from '@/components/AllProjects';
import FrontEndProjectsV2 from '@/components/FrontEndProjectsV2';
import Loading from '@/components/subcomponents/Loading';

// TO DO
// Delete home component
// Increase font size for technical experience and repo name
// Consider making header full width even at larger screen sizes
// Rename FrontEndProjectsV2 and delete FrontEndProjects
// Change tailwind icon to the one without words

const loadingId = 'github'
document.body.appendChild(
  t('div', { id: 'root', className: 'mx-auto max-w-[1440px] w-full flex flex-col items-center' }, [
    Header(),
    AboutMe(),
    TechnicalExperience(),
    Loading({ loadingId }),
  ])
);

fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
  .then(res => res.ok ? res.json() : [])
  .then((data: Repo[]) => {
    if (!data.length) {
      const node = document.querySelector(`#${loadingId}`)
      if (node) node.textContent = 'Failed to fetch repo information from GitHub'
      return
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
    }).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

    // document.body.appendChild(home(repos));
    document.querySelector(`#${loadingId}`)?.remove();
    [
      RecentProjects({ repos }),
      // FrontEndProjects({ repos }),
      FrontEndProjectsV2({ repos }),
      BackEndProjects({ repos }),
      CommandLineProjects({ repos }),
      AllProjects({ repos }),
    ].forEach(node => document.querySelector('#root')?.appendChild(node));
  });
