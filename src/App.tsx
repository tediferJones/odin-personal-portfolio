// import { useState } from 'react';
import AllProjects from './components/AllProjects';
import FavProjects from './components/FavProjects';

function App() {
  return (
    <div>
      <h1 className='text-3xl p-8'>HELLO WORLD w/ typescript</h1>
      <h1>About Me Section</h1>
      {/* 
          USE THE float CSS PROP to make text wrap around some other structure like an img or div 
          Like so: https://jsfiddle.net/q5cn1Lm2/9/
      */}
      <h1>Relevant technical experience (React, Express, etc)</h1>
      <h1 className='text-2xl bold'>My Projects:</h1>
      <FavProjects />
      <AllProjects />
    </div>
  );
}

// Consider only fetching from the github api once, then pass it to components that need it
// Do we want to add client side routing?
//    - Each project could have a link to its own page

export default App;
