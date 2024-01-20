import { useState } from 'react';
import Menu from './subcomponents/Menu';
import { MenuState } from '../types';
import { contactMenu, subsectionMenu } from '../contentConfig';

export default function Header() {
  const [showMenu, setShowMenu] = useState<MenuState>({ display: false, title: '' });
  return (
    <div className='bg-sky-600 text-gray-100 w-full flex justify-center sticky top-0 z-10'>
      <div className='w-full sm:w-4/5 flex justify-between items-center'>
        <h1 className='text-3xl p-8 font-bold'>Theo Drzewinski</h1>
        <div className='text-xl flex gap-1 flex-col sm:flex-row sm:gap-6'>
          <a className='hidden lg:flex gap-2 items-center hover:bg-sky-800 p-2 rounded-xl'
            href={require('../assets/documents/resume.pdf')}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa-solid fa-file-invoice'></i>
            Resume
          </a>
          <a className='hidden lg:flex gap-2 items-center hover:bg-sky-800 p-2 rounded-xl'
            href='https://github.com/tediferJones'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa-brands fa-github'></i>
            GitHub
          </a>
          <Menu icon='fa-solid fa-at' title='Contact'
            options={contactMenu}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <Menu icon='fa-solid fa-bars' title='Menu'
            options={subsectionMenu}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </div>
      </div>
    </div>
  )
}
