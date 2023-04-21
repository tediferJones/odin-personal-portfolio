// import React from 'react';
import { useState } from 'react';

function App() {
  const [state, setState] = useState([]);
  // async function fetchData() {
  //   const data = await fetch('https://api.github.com/users/tediferJones')
  //   const betterData = await data.json()
  //   console.log(betterData)
  // }
  // fetchData();

  async function fetchRepos() {
    const data = await fetch('https://api.github.com/users/tediferjones/repos');
    const betterData = await data.json();
    // console.log(betterData);
    stateSetter(betterData);
    // return betterData;
  }

  function stateSetter(data: []) {
    console.log(data)
    setState(data);
  }

  console.log(state)
  // Ideally we should just have this run on component mount instead of when the state array is empty
  if (state.length === 0) {
    fetchRepos();
  }
  // fetchRepos();

  return (
    <div>
      <h1 className='text-3xl p-8'>HELLO WORLD w/ typescript</h1>
      <h1 className='text-2xl bold'>My Projects:</h1>
      {state.map((item: any) => {
        return (
          <div className='flex justify-between'>
            <p>{item.name}</p>
            <p>{item.language}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
