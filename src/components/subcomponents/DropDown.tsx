import { useRef } from 'react';
import RepoList from './RepoList';
import { Repo } from '../../types';

export default function DropDown({ repoArr, title }: { repoArr: Repo[], title: string }) {
  const indicator = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLDivElement>(null);
  return (
    <div className={'flex flex-col'}>
      <hr />
      <button className='text-2xl text-gray-100 p-4 px-8 flex justify-between'
        value={`${title}RepoList`}
        onClick={() => {
          toggle.current && toggle.current.classList.toggle('hidden')
          if (indicator.current) {
            indicator.current.textContent = indicator.current.textContent === '+' ? '-' : '+'
          }
        }}
      >
        <div className='pointer-events-none'>{title} ({repoArr.length})</div>
        <div className='text-3xl font-extrabold pointer-events-none'
          ref={indicator}
        >+</div>
      </button>
      <div className='hidden' ref={toggle}>
        <RepoList repos={repoArr} />
      </div>
    </div>
  )
}
