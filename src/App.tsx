import { useState, useEffect } from 'react';
import { repo, externalPageObj } from './types';
import AboutMe from './components/AboutMe';
import TechnicalExperience from './components/TechnicalExperience';
import BackEndProjects from './components/BackEndProjects';
import FrontEndProjects from './components/FrontEndProjects';
import AllProjects from './components/AllProjects';

function App() {
  const [repos, setRepos] = useState<Array<repo>>([]);
  const externalPages: externalPageObj = {
    // this appears to be working, check TOP website for links to all external pages
    'odin-blog-client-service': 'https://odin-blog-client-service-production.up.railway.app',
    'odin-blog-admin-service': 'https://odin-blog-admin-service-production.up.railway.app',
    'odin-blog-api-service': 'https://odin-blog-api-service-production.up.railway.app/api/posts/',
    'odin-members-only': 'https://odin-members-only-production.up.railway.app',
    'odin-inventory-application': 'https://odin-inventory-application-prod-production.up.railway.app',

    'odin-hangman': 'https://replit.com/@ted_jones671/odin-hangman#hangman.rb',
    'odin-mastermind': 'https://replit.com/@ted_jones671/odin-mastermind#mastermind.rb',
    'odin-tic-tac-toe': 'https://replit.com/@ted_jones671/odin-tic-tac-toe#tic_tac_toe.rb',
    'odin-basic-informational-site': 'https://replit.com/@ted_jones671/odin-basic-informational-site',

    // PROJECTS THAT NEED ATTENTION: odin-mini-message-board, express-locallibrary-tutorial, needs migrated to railway
  }

  useEffect(() => {
    fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
        .then(res => res.json())
        .then(data => {
          // console.log(data)
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
      <h1 className='text-3xl p-8'>HELLO WORLD w/ typescript</h1>
      <AboutMe />
      <TechnicalExperience />
      <BackEndProjects repos={repos} />
      <FrontEndProjects repos={repos} />
      <AllProjects repos={repos} />
    </div>
  );
}

// GET SOME ICONS TO REPLACE SOME OF THE BUTTONS/LINKS
// ALL LINKS SHOULD OPEN IN A NEW TAB

// Do we want to add client side routing?
//    - Each project could have a link to its own page
//    - PROJECTS FROM OUTSIDE OF GITHUB AND GITHUB REPOS THEMSELVES CANT BE IFRAMED, THIS IS A BIG PROBLEM FOR CLIENT SIDE ROUTING
// Consider adding a header, especially if we end up adding client side routing for each of our projects
//    - We want people to be able to navigate back to the home-page without hitting the back button
// Consider making new component for FavoriteProjects and/or RecentProjects
//    - FavoriteProjects should be projects we want to show off
//    - RecentProjects should show a certain number of the most recently updated github repos

export default App;
