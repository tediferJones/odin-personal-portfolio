import type { Repo } from '@/types';
import { backEndProjectNames } from '@/contentConfig';
import DropDown from '@/components/subcomponents/DropDown';
import t from '@/lib/getTag';

export default function BackEndProjects({ repos }: { repos: Repo[] }) {
  return (
    t('div', { id: 'BackEndProjects', className: 'w-full md:w-4/5 mb-12 md:rounded-xl overflow-clip scroll-mt-48 md:scroll-mt-32' }, [
      DropDown({
        title: 'Back-End Projects',
        repoArr: repos.filter(repo => backEndProjectNames.includes(repo.name))
      })
    ])
  )
}
