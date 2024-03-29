import { Repo } from '../types';
import DropDown from './subcomponents/DropDown';
import { backEndProjectNames } from '../contentConfig';

export default function BackEndProjects({ repos }: { repos: Repo[] }) {
  return (
    <div id='BackEndProjects' className='w-full md:w-4/5 mb-12 md:rounded-xl overflow-clip scroll-mt-48 md:scroll-mt-32'>
      <DropDown title='Back-End Projects'
        repoArr={repos.filter(repo => backEndProjectNames.includes(repo.name))}
      />
    </div>
  )
}
