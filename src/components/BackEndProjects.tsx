import { Repo } from '../types';
import RepoList from './subcomponents/RepoList';
import { backEndProjectNames } from '../contentConfig';

export default function BackEndProjects({ repos }: { repos: Repo[] }) {
  const backEndRepos = repos.filter(repo => backEndProjectNames.includes(repo.name));
  return (
    <div className='bg-sky-600 w-full md:w-4/5 mt-16 mb-12 pb-4'>
      <h1 className='text-gray-100 text-3xl p-8'>Projects with a Back-End ({backEndProjectNames.length})</h1>
      <RepoList repos={backEndRepos}/>
    </div>
  )
}
