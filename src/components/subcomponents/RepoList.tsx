import { Repo } from '../../types';
import LinkButtons from './LinkButtons';

export default function RepoList({ repos, title }: { repos: Repo[], title: string }) {
  return (
    <>
      {repos.map(repo => {
        return (
          <div className='text-xl flex flex-col lg:flex-row mx-16 mb-6 bg-white rounded-xl' 
            key={`${title}-${repo.name}`}
          >
            <h1 className='flex-1 p-4 flex justify-center items-center'>{repo.name}</h1>
            <LinkButtons codeUrl={repo.html_url} pageUrl={repo.page_link} addClasses='rounded-xl'/>
          </div>
        )
      })}
    </>
  )
}
