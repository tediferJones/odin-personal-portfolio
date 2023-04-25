// import { useState } from 'react';
import AllProjects from './components/AllProjects';
import FavProjects from './components/FavProjects';
import TechnicalExperience from './components/TechnicalExperience';

function App() {
  return (
    <div>
      <h1 className='text-3xl p-8'>HELLO WORLD w/ typescript</h1>
      <div>
        <h3 className='text-2xl'>About Me Section</h3>
        {/* Give a little biography, why you're in tech, what you're interested in, etc... */}
      </div>
      {/* 
          USE THE float CSS PROP to make text wrap around some other structure like an img or div 
          Like so: https://jsfiddle.net/q5cn1Lm2/9/
      */}
      <TechnicalExperience />
      <FavProjects />
      <AllProjects />
    </div>
  );
}

// GET SOME ICONS TO REPLACE SOME OF THE BUTTONS/LINKS

// Consider only fetching from the github api once, then pass it to components that need it
// Do we want to add client side routing?
//    - Each project could have a link to its own page
// Consider adding a header, especially if we end up adding client side routing for each of our projects
//    - We want people to be able to navigate back to the home-page without hitting the back button

export default App;
