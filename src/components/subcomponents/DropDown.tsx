import { useState } from 'react';
import RepoList from './RepoList';
import { Repo } from '../../types';

export default function DropDown({ repoArr, title }: { repoArr: Repo[], title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`transition-colors duration-500 ${isOpen ? 'bg-sky-700' : 'bg-sky-600'}`}>
      <hr />
      <button id={title.split(' ').join('').replace('&', '-')} className={'w-full text-2xl text-gray-100 p-4 px-8 flex justify-between'}
        value={`${title}RepoList`}
        onClick={() => setIsOpen(old => !old)}
      >
        <div className='pointer-events-none'>{title} ({repoArr.length})</div>
        <i className={`fa-solid fa-chevron-left flex justify-center items-center text-3xl pointer-events-none transition-all duration-500
          ${isOpen ? '-rotate-90' : 'rotate-0'}`
        }></i>
      </button>
      <div className={`overflow-hidden transition-maxHeight ease-in-out duration-500 ${(isOpen ? 'max-h-[9999px]' : 'max-h-[0px]')}`}>
        <RepoList repos={repoArr} title={title} />
      </div>
    </div>
  )
}
