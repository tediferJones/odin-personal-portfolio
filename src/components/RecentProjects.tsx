import RepoList from './subcomponents/RepoList'
import { Repo } from '../types'

export default function RecentProjects({ repos }: { repos: Repo[] }) {
  const length = 8;
  return (
    <div id='RecentProjects' className='bg-sky-600 w-full md:w-4/5 my-12 pb-4 rounded-xl'>
      <h1 className='text-gray-100 text-3xl p-8'>Recent Projects ({length})</h1>
      <RepoList repos={repos.slice(0, length)} title={'RecentProjects'}/>
    </div>
  )
}
