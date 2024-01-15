import { v4 as uuidv4 } from 'uuid';
import { repo } from '../types';

function BackEndProjects(props: any) {
  const backEndProjectNames = [
    'chat-layers',
    'odin-blog-api-service',
    'odin-blog-admin-service',
    'odin-blog-client-service',
    'odin-members-only',
    'odin-inventory-application',
  ];
  const backEndRepos = props.repos.filter((item: repo) => backEndProjectNames.includes(item.name));

  return (
    <div className='bg-sky-600 w-full md:w-4/5 mt-16 mb-12 pb-4'>
      <h1 className='text-gray-100 text-3xl p-8'>Projects with a Back-End ({backEndProjectNames.length})</h1>
      {backEndRepos.map((item: repo) => {
        return (
          <div className='text-xl flex flex-col md:flex-row px-16 py-4' 
            key={uuidv4()}
          >
            <h1 className='flex-1 p-4 flex justify-center items-center bg-white'>{item.name}</h1>
            <div className='flex-1 flex'>
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
  )
}

export default BackEndProjects;
