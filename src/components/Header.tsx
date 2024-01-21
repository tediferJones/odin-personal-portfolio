import { useState } from 'react';
import Menu from './subcomponents/Menu';
import { MenuState } from '../types';
// import { contactMenu, subsectionMenu } from '../contentConfig';
import LinkTo from './subcomponents/LinkTo';
import { linkOptions } from '../contentConfig';
import getLinkInfo from '../modules/getLinkInfo';

export default function Header() {
  const [showMenu, setShowMenu] = useState<MenuState>({ display: false, title: '' });
  return (
    <div className='bg-sky-600 text-gray-100 w-full flex justify-center sticky top-0 z-10'>
      <div className='w-full sm:w-4/5 flex justify-between items-center'>
        <h1 className='text-3xl p-8 font-bold'>Theo Drzewinski</h1>
        <div className='text-xl flex gap-1 flex-col sm:flex-row sm:gap-6'>
          {/*
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
          */}
          {['Resume', 'GitHub'].map((key, i) => {
            return <LinkTo className='hidden lg:flex gap-2 items-center hover:bg-sky-800 p-2 rounded-xl'
              key={`toggleLink-${i}`}
              content={{ ...linkOptions[key], name: key }}
            />
          })}
          <Menu icon='fa-solid fa-at' title='Contact'
            content={['Resume', 'GitHub', 'Email', 'Phone'].map(key => getLinkInfo(key))}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <Menu icon='fa-solid fa-bars' title='Menu'
            content={[
              'About Me',             
              'Technical Experience', 
              'Recent Projects',      
              'Front-End Projects',   
              'Back-End Projects',    
              'CLI Projects',         
              'All Projects',         
            ].map(key => getLinkInfo(key))
            }
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </div>
      </div>
    </div>
  )
}
