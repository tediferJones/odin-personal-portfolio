import { v4 as uuidv4 } from 'uuid';
import { repo } from '../types';

function FrontEndProjects(props: any) {
  const frontEndProjectNames = [
    'instagram-history-finder',
    'odin-shopping-cart',
    'odin-memory-card',
    'odin-cv-application-v2',
  ]
  
  const frontEndRepos = props.repos.sort((a: repo, b:repo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .filter((item: repo) => item.has_pages)
      .filter((item: repo) => frontEndProjectNames.includes(item.name))

  // This page should return a series of cards for recent front-end projects

  return (
    <div className='w-4/5 p-4'>
      <h1 className='text-3xl py-4'>Front-end Projects (Hosted with GitHub Pages)</h1>
      <div className='flex flex-wrap'>
        {frontEndRepos.map((item: repo) => {
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
                src={item.page_link}
                height='360'
                width='360'
                title={item.name}
              ></iframe>
              <div className='flex my-4 text-xl font-medium'>
                <a className='flex-1 text-center p-4 flex justify-center items-center bg-blue-400'
                  href={item.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >View Code</a>
                <a className='flex-1 text-center p-4 flex justify-center items-center bg-orange-400'
                  href={item.page_link}
                  target='_blank'
                  rel='noopener noreferrer'
                >View Page</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FrontEndProjects;
