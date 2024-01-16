import LinkButtons from './subcomponents/LinkButtons';
import { Repo } from '../types';
import { frontEndProjectNames } from '../contentConfig';

export default function FrontEndProjects({ repos }: { repos: Repo[] }) {
  const frontEndRepos = repos.filter(repo => frontEndProjectNames.includes(repo.name))
  return (
    <div className='mb-12 bg-sky-600 px-12 py-4'>
      <h1 className='p-4 text-3xl text-white'>Front-end Projects (Hosted with GitHub Pages)</h1>
      <div className='flex flex-wrap'>
        {frontEndRepos.map((repo: Repo) => {
          return (
            <div className='w-full p-4 lg:w-1/2' key={repo.name + '-iframe'}>
              <div className='flex justify-between bg-white p-4 text-xl'>
                <h3 className='text-2xl'>{repo.name}</h3>
                <h4 className='text-xl'>{repo.language}</h4>
              </div>
              <iframe
                className='w-full bg-white'
                src={repo.page_link}
                height='480'
                width='360'
                title={repo.name}
              ></iframe>
              <LinkButtons codeUrl={repo.html_url} pageUrl={repo.page_link} addClasses='text-xl'/>
            </div>
          )
        })}
      </div>
    </div>
  )
}
