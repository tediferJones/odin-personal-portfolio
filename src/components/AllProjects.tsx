import { Repo } from '../types';
import DropDown from './subcomponents/DropDown';

export default function AllProjects({ repos }: { repos: Repo[] }) {
  const languages = repos.reduce((obj, repo) => {
    // const lang = ['HTML', 'CSS'].includes(repo.language) ? 'HTML & CSS' : repo.language;
    let lang = repo.language;
    if (['HTML', 'CSS'].includes(repo.language)) {
      lang = 'HTML & CSS';
    }
    if (repo.language === 'Shell') {
      lang = 'Bash'
    }
    obj[lang] = obj[lang] ? obj[lang].concat(repo) : [repo];
    return obj;
  }, {} as { [key: string]: Repo[] });
  
  const total = Object.keys(languages)
    .reduce((total, key) => total += languages[key].length, 0);

  return (
    <div id='AllProjects' className='bg-sky-600 w-full md:w-3/5 mb-12 md:rounded-xl overflow-clip scroll-mt-48 md:scroll-mt-32'>
      <h1 className='text-2xl text-gray-100 p-4'>All Projects ({total})</h1>
      {Object.keys(languages).sort().map((languageKey: string) => {
        return <DropDown key={languageKey} repoArr={languages[languageKey]} title={languageKey} />
      })}
    </div>
  )
}
