import { useState } from 'react';
import Menu from './subcomponents/Menu';
import LinkTo from './subcomponents/LinkTo';
import getLinkInfo from '../modules/getLinkInfo';
import { MenuState } from '../types';
import {
  linkOptions,
  contactMenu,
  contactMenuToggles,
  subsectionMenu
} from '../contentConfig';

export default function Header() {
  const [showMenu, setShowMenu] = useState<MenuState>({ display: false, title: '' });
  return (
    <div className='bg-sky-600 text-gray-100 w-full flex justify-center sticky top-0 z-20 scroll-mb-0'>
      <div className='w-full sm:w-4/5 flex flex-col sm:flex-row justify-between items-center'>
        <h1 className='text-2xl pb-2 p-8 sm:pb-8 font-bold'>Theo Drzewinski</h1>
        <div className='flex gap-1 sm:gap-6 p-2'>
          {contactMenuToggles.map((key, i) => {
            return <LinkTo className='hidden lg:flex gap-2 items-center hover:bg-sky-700 p-4 rounded-xl transition-colors duration-300'
              key={`toggleLink-${i}`}
              content={{ ...linkOptions[key], name: key }}
            />
          })}
          <Menu icon='fa-solid fa-at' title='Contact'
            content={contactMenu.map(key => getLinkInfo(key))}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <Menu icon='fa-solid fa-bars' title='Menu'
            content={subsectionMenu.map(key => getLinkInfo(key))}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </div>
      </div>
    </div>
  )
}
