import { v4 as uuidv4 } from 'uuid';
import { repo } from '../types';

function FrontEndProjects(props: any) {
  const frontEndProjectNames = [
    'html-to-pdf',
    'instagram-history-finder',
    'odin-shopping-cart',
    'odin-memory-card',
  ]
  
  const frontEndRepos = props.repos.sort((a: repo, b:repo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .filter((item: repo) => item.has_pages)
      .filter((item: repo) => frontEndProjectNames.includes(item.name))

  // This page should return a series of cards for front-end projects we want to show off

  return (
    <div className='px-12 py-4 bg-sky-600 mb-12'>
      <h1 className='text-3xl p-4 text-white'>Front-end Projects (Hosted with GitHub Pages)</h1>
      <div className='flex flex-wrap'>
        {frontEndRepos.map((item: repo) => {
          console.log(item.name)
          return (
            <div className='w-full lg:w-1/2 p-4'
              key={uuidv4()}
            >
              <div className='flex justify-between p-4 text-xl bg-white'>
                <h3 className='text-2xl'>{item.name}</h3>
                <h4 className='text-xl'>{item.language}</h4>
              </div>
              <iframe
                className='w-full bg-white'
                src={item.page_link}
                height='480'
                width='360'
                title={item.name}
              ></iframe>
              <div className='flex text-xl font-medium'>
                <a className='flex-1 text-center p-4 flex justify-center items-center bg-blue-800 text-gray-100 border-solid border-8 border-white'
                  href={item.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >View Code</a>
                <a className='flex-1 text-center p-4 flex justify-center items-center bg-teal-500 text-gray-100 border-solid border-8 border-white'
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
