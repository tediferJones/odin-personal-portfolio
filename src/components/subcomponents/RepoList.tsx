import { Repo } from '../../types';
import LinkButtons from './LinkButtons';
import LanguageIconLinks from './LanguageIconLinks';

export default function RepoList({ repos, title }: { repos: Repo[], title: string }) {
  return (
    <>
      {repos.map(repo => {
        return (
          <div className='text-xl flex flex-col lg:flex-row mx-16 mb-6 bg-white rounded-xl' 
            key={`${title}-${repo.name}`}
          >
            <div className='flex-1 p-4 flex justify-between items-center gap-4 text-center'>
              <h1 className='flex-1 text-center'>{repo.name}</h1>
              <div className='flex'>
                <LanguageIconLinks repo={repo} />
              </div>
            </div>
            <LinkButtons codeUrl={repo.html_url} pageUrl={repo.page_link} addClasses='rounded-xl'/>
          </div>
        )
      })}
    </>
  )
}
