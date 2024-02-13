import LinkButtons from './subcomponents/LinkButtons';
import LanguageIconLinks from './subcomponents/LanguageIconLinks';
import { Repo } from '../types';
import { frontEndProjectNames } from '../contentConfig';

export default function FrontEndProjects({ repos }: { repos: Repo[] }) {
  return (
    <div id='FrontEndProjects' className='mb-12 bg-sky-600 p-12 w-full scroll-mt-48 md:scroll-mt-32'>
      <h1 className='pb-8 text-2xl text-white'>Front-End Projects (Hosted with GitHub Pages)</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {repos.filter(repo => frontEndProjectNames.includes(repo.name)).map((repo: Repo) => {
          return (
            <div className='w-full' key={repo.name + '-iframe'}>
              <div className='flex justify-between items-center bg-white p-4 text-lg rounded-t-xl'>
                <h3>{repo.name}</h3>
                <div className='flex gap-2'>
                  <LanguageIconLinks repo={repo} />
                </div>
              </div>
              <iframe
                className='w-full bg-white'
                src={repo.page_link}
                height='480'
                width='360'
                title={repo.name}
              ></iframe>
              <LinkButtons codeUrl={repo.html_url} pageUrl={repo.page_link} addClasses='rounded-b-xl' />
            </div>
          )
        })}
      </div>
    </div>
  )
}
