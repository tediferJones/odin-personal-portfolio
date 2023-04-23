import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AllProjects() {
  const [repos, setRepos] = useState([{
    name: '',
    language: '',
    html_url: '',
    has_pages: false,
  }]);

  useEffect(() => {
    fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
        .then(res => res.json())
        .then(data => {
          // console.log(data.filter((item: { language: string }) => item.language !== null));
          // setRepos(data);
          setRepos(data.filter((item: { language: string }) => item.language !== null));
        })
  }, []);

  // filter out languages with no language, those are all practice repos we dont want to show

  return (
    <div>
      <h1>All Projects ({repos.length})</h1>
      {repos.map(item => {
        return (
          <div className='flex justify-around'
            key={uuidv4()}
          >
            <h3>{item.name}</h3>
            <h3>{item.language}</h3>
            <a href={item.html_url}>CODE LINK</a>
            {item.has_pages ? 
              <a href={`https://tediferjones.github.io/${item.name}`}>PAGE LINK</a>
              : []}
          </div>
        )
      })}
    </div>
  )
}

export default AllProjects;
