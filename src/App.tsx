import { useState, useEffect } from 'react';
import { repo, externalPageObj } from './types';
import AboutMe from './components/AboutMe';
import TechnicalExperience from './components/TechnicalExperience';
import BackEndProjects from './components/BackEndProjects';
import FrontEndProjects from './components/FrontEndProjects';
import CommandLineProjects from './components/CommandLineProjects';
import AllProjects from './components/AllProjects';

function App() {
  const [repos, setRepos] = useState<Array<repo>>([]);
  const externalPages: externalPageObj = {
    'odin-blog-client-service':      'https://odin-blog-client-service-production.up.railway.app',
    'odin-blog-admin-service':       'https://odin-blog-admin-service-production.up.railway.app',
    'odin-blog-api-service':         'https://odin-blog-api-service-production.up.railway.app/api/posts/',
    'odin-members-only':             'https://odin-members-only-production.up.railway.app',
    'odin-inventory-application':    'https://odin-inventory-application-prod-production.up.railway.app',

    'odin-hangman':                  'https://replit.com/@ted_jones671/odin-hangman#hangman.rb',
    'odin-mastermind':               'https://replit.com/@ted_jones671/odin-mastermind#mastermind.rb',
    'odin-tic-tac-toe':              'https://replit.com/@ted_jones671/odin-tic-tac-toe#tic_tac_toe.rb',
    'odin-basic-informational-site': 'https://replit.com/@ted_jones671/odin-basic-informational-site',
  }

  useEffect(() => {
    fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
        .then(res => res.json())
        .then(data => {
          const keys = Object.keys(externalPages);
          setRepos(data.map((item: repo) => {
            if (item.has_pages) {
              item.page_link = `https://tediferjones.github.io/${item.name}`
            }
            if (keys.includes(item.name)) {
              item.page_link = externalPages[item.name]; 
            }
            return item
          }));
        })
  }, [])

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='bg-gray-100 w-full mb-8 flex justify-center items-center'>
        <h1 className='text-3xl p-8 w-4/5 font-bold'>Theo Drzewinski</h1>
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

export default App;
