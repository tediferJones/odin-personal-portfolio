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
    <div className='w-4/5 p-4'>
      <h1 className='text-3xl py-4'>Recent Projects</h1>
      <div className='flex flex-wrap'>
        {recentRepos.map((item: repo) => {
          return (
            <div className='w-full lg:w-1/2 p-4'
              key={uuidv4()}
            >
              <div className='flex justify-between p-4 text-xl'>
                <h3 className='text-2xl'>{item.name}</h3>
                <h4 className='text-xl'>{item.language}</h4>
              </div>
              <iframe
                className='w-full'
                src={`https://tediferjones.github.io/${item.name}`}
                height='360'
                width='360'
                title={item.name}
              ></iframe>
              <div className='flex my-4 text-xl font-medium'>
                <a className='flex-1 text-center p-4 flex justify-center items-center bg-blue-400'
                  href={item.html_url}
                >View Code</a>
                <a className='flex-1 text-center p-4 flex justify-center items-center bg-orange-400'
                  href={`https://tediferjones.github.io/${item.name}`}
                >View Page</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FavProjects;
