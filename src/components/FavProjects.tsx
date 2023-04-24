import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface repo {
  name: string,
  language: string,
  html_url: string,
  updated_at: string,
  has_pages: boolean,
}

function FavProjects() {
  const [recentRepos, setRecentRepos] = useState<Array<repo>>([])

  useEffect(() => {
    fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          setRecentRepos(data.sort((a: repo, b: repo) => {
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          }).filter((item: repo) => item.has_pages).slice(0, 6));
        })
  }, []);

  // This page should return a series of cards for recent projects

  return (
    <div>
      <h1>Recent Projects</h1>
      {recentRepos.map((item: repo) => {
        return (
          <div key={uuidv4()}>
            <h3>{item.name}</h3>
            <h4>{item.language}</h4>
            <a href={item.html_url}>CODE LINK</a>
            <a href={`https://tediferjones.github.io/${item.name}`}>PAGE LINK</a>
            <iframe
              src={`https://tediferjones.github.io/${item.name}`}
              title={item.name}
              width='512'
              height='512'
            ></iframe>
          </div>
        )
      })}
    </div>
  )
}

export default FavProjects;
