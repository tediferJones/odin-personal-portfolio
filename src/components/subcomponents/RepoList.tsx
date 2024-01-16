import { v4 as uuidv4 } from 'uuid';
import { Repo } from '../../types';
import LinkButtons from './LinkButtons';

export default function RepoList({ repos }: { repos: Repo[] }) {
  return (
    <>
      {repos.map(repo => {
        return (
          <div className='text-xl flex flex-col md:flex-row px-16 py-4' 
            key={uuidv4()}
          >
            <h1 className='flex-1 p-4 flex justify-center items-center bg-white'>{repo.name}</h1>
            <LinkButtons codeUrl={repo.html_url} pageUrl={repo.page_link}/>
          </div>
        )
      })}
    </>
  )
}
