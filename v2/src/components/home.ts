import t from '@/lib/getTag';
import type { Repo } from '@/types';
import Header from '@/components/Header';

export default function home(repos: Repo[]) {
  return t('div', { className: 'w-full flex flex-col items-center'}, [
    Header(),
    // AboutMe(),
    // TechnicalExperience(),
    !repos.length ?
    t('h1', {
        className: 'p-4 my-12 text-xl bg-sky-600 w-4/5 text-center text-white rounded-xl',
        textContent: "Error: Couldn't fetch projects from GitHub, please try again later"
      }) :
      t('div', {}, [
        // RecentProjects(repos),
        // FrontEndProjects(repos),
        // BackEndProjects(repos),
        // CommandLineProjects(repos),
        // AllProjects(repos),
      ])
  ])
}
