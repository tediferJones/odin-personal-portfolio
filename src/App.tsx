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

// Pick the picture you want to stick with, delete the other and put the desired one in the assets folder

// GET SOME ICONS TO REPLACE SOME OF THE BUTTONS/LINKS
// ADD 'MORE' BUTTON TO FRONT-END PROJECTS
//    - Everytime the button is pressed, add 4 more projects to the array that ends up being displayed to the user
//    - All the other components show all of our projects related to that section, this one should do the same
//    - Otherwise it looks like you've only done 4 react projects

// Do we want to add client side routing?
//    - Each project could have a link to its own page
//    - PROJECTS FROM OUTSIDE OF GITHUB AND GITHUB REPOS THEMSELVES CANT BE IFRAMED, THIS IS A BIG PROBLEM FOR CLIENT SIDE ROUTING
// Consider adding a header, especially if we end up adding client side routing for each of our projects
//    - We want people to be able to navigate back to the home-page without hitting the back button
//    - Make the header a dark neutral color, dark gray, maybe a dark navy blue
// Consider making new component for FavoriteProjects and/or RecentProjects
//    - FavoriteProjects should be projects we want to show off
//    - RecentProjects should show a certain number of the most recently updated github repos
// Consider breaking up the bigger chunks of JSX into small components
//    - The view code and view page links would be a good example of this

export default App;
