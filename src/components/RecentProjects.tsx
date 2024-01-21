import RepoList from './subcomponents/RepoList'
import { Repo } from '../types'

export default function RecentProjects({ repos }: { repos: Repo[] }) {
  return (
    <div id='RecentProjects' className='bg-sky-600 w-full md:w-4/5 my-12 pb-4 md:rounded-xl scroll-m-16'>
      <h1 className='text-gray-100 text-3xl p-8'>Recent Projects</h1>
      <RepoList repos={repos.slice(0, 8)} title={'RecentProjects'}/>
    </div>
  )
}
