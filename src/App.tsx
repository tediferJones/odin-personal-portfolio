import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import AllProjects from './components/AllProjects';
import FavProjects from './components/FavProjects';
import TechnicalExperience from './components/TechnicalExperience';

interface repo {
  name: string,
  language: string,
  html_url: string,
  updated_at: string,
  has_pages: boolean,
  page_link?: string,
}

interface externalPageObj {
  [key: string]: string
}

function App() {
  const [repos, setRepos] = useState<Array<repo>>([]);
  const externalPages: externalPageObj = {
    // this appears to be working, check TOP website for links to all external pages
    'odin-blog-client-service': 'https://odin-blog-client-service-production.up.railway.app'
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
      <FavProjects repos={repos} />
      <AllProjects repos={repos} />
    </div>
  );
}

// GET SOME ICONS TO REPLACE SOME OF THE BUTTONS/LINKS
//
// WE NEED A WAY TO ADD PAGES WE HAVE POSTED IN PLACES OTHER THAN GITHUB
//    - cant iframe pages posted from railway or repl.it, 
//        - so we will have to rename the section with iframe to something like ghPagesProjects
//        - then we should create an actual Recent Projects component, with a display similar to AllProjects

// Do we want to add client side routing?
//    - Each project could have a link to its own page
// Consider adding a header, especially if we end up adding client side routing for each of our projects
//    - We want people to be able to navigate back to the home-page without hitting the back button
// Rename FavProjects to GH-pages
//    - Consider making a favProjects component for specific project we thinkg are worth showing off
// Do we want to create a types file? Instead of copying certain interfaces to certain components we could just import what we need

export default App;
