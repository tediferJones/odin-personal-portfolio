import LinkButtons from '@/components/subcomponents/LinkButtons';
import LanguageIconLinks from '@/components/subcomponents/LanguageIconLinks';
import type { Repo } from '@/types';
import { frontEndProjectNames } from '@/contentConfig';
import t from '@/lib/getTag';

export default function FrontEndProjects({ repos }: { repos: Repo[] }) {
  return (
    t('div', { id: 'FrontEndProjects', className: 'mb-12 bg-sky-600 p-12 w-full scroll-mt-48 md:scroll-mt-32' }, [
      t('h1', { className: 'pb-8 text-2xl text-white', textContent: 'Front-End Projects (Hosted with GitHub Pages)' }),
      t('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-8' },
        repos.filter(repo => frontEndProjectNames.includes(repo.name)).map((repo: Repo) => {
          return (
            t('div', { className: 'w-full' }, [
              t('div', { className: 'flex justify-between items-center bg-white p-4 text-lg rounded-t-xl' }, [
                t('h3', { textContent: repo.name }),
                t('div', { className: 'flex gap-2' }, 
                  LanguageIconLinks({ repo })
                )
              ]),
              t('iframe', {
                className: 'w-full bg-white',
                src: repo.page_link,
                height: '480',
                width: '360',
                title: repo.name,
              }),
              LinkButtons({
                codeUrl: repo.html_url,
                pageUrl: repo.page_link,
                addClasses: 'rounded-b-xl',
              })
            ])
          )
        })
      )
    ])
  )
}
