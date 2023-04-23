import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function FavProjects() {
  const [recentRepos, setRecentRepos] = useState([{
    name: '',
    language: '',
    html_url: '',
    has_pages: false,
  }])

  useEffect(() => {
    fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          setRecentRepos(data.sort((a: any, b: any) => {
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          }).filter((item: any) => item.has_pages).slice(0, 6));
        })
  }, []);

  // fetch('https://www.github.com/tediferjones', {mode: 'no-cors'}).then((data: any) => console.log(data.json()))

  // This page should return a series of cards for recent projects

  return (
    <div>
      <h1>Recent Projects</h1>
      {recentRepos.map((item: any) => {
        // console.log(item);
        return (
          <div key={uuidv4()}>
            <h3>{item.name}</h3>
            <h4>{item.language}</h4>
            <a href={item.html_url}>CODE LINK</a>
            {/* 
            {item.has_pages ? 
              <a href={`https://tediferjones.github.io/${item.name}`}>PAGE LINK</a>
              : []}
            */}
            {/* only generate iframe if item has the has_pages property */}
            {item.has_pages ?
              <>
                <a href={`https://tediferjones.github.io/${item.name}`}>PAGE LINK</a>
                <iframe src={`https://tediferjones.github.io/${item.name}`} width='512' height='512'></iframe>
              </> : []}
          </div>
        )
      })}
    </div>
  )
}

export default FavProjects;
