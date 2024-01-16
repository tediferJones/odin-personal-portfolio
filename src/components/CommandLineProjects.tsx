import { Repo } from '../types';
import DropDown from './subcomponents/DropDown';
import { cliRepos } from '../contentConfig';

export default function CommandLineProjects({ repos }: { repos: Repo[]}) {
  const commandLineRepos = Object.keys(cliRepos).reduce((obj, key) => {
    obj[key] = repos.filter(repo => cliRepos[key].includes(repo.name))
    return obj;
  }, {} as { [key: string]: Repo[] })
  
  const total = Object.keys(commandLineRepos)
    .reduce((total, key) => total += commandLineRepos[key].length, 0)

  return (
    <div className='bg-sky-600 w-full md:w-4/5 mb-12'>
      <h1 className='text-3xl text-gray-100 p-4'>Command Line Projects and Algorithms ({total})</h1>
      {Object.keys(commandLineRepos).map((item: string) => {
        return <DropDown key={item} repoArr={commandLineRepos[item]} title={item} />
      })}
    </div>
  )
}
