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
          setRecentRepos(data.sort((a: any, b: any) => {
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          }).slice(0, 6));
        })
  }, []);

  return (
    <div>
      <h1>Recent Projects</h1>
      {recentRepos.map((item: any) => {
        return (
          <div key={uuidv4()}>
            {JSON.stringify(item)}
          </div>
        )
      })}
    </div>
  )
}

export default FavProjects;
