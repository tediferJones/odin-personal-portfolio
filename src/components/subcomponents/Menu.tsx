import { MenuItem, MenuState } from '../../types'

export default function Menu({
  icon,
  title,
  options,
  showMenu,
  setShowMenu,
}: {
    icon: string,
    title: string,
    options: MenuItem[],
    showMenu: MenuState,
    setShowMenu: Function
  }) {
  return (
    <div className='flex items-center flex-col justify-center relative'
      onMouseLeave={() => setShowMenu({ display: false, title: '' })}
    >
      <button className={'flex gap-2 items-center hover:bg-sky-700 p-2 rounded-xl mr-4 sm:mr-0' + 
        (showMenu.display && showMenu.title === title ? ' bg-sky-700' : '')
      }
        onClick={() => {
          setShowMenu((oldState: MenuState) => {
            return {
              display: oldState.display ? false : true,
              title: title
            }
          })
        } }
      >
        <i className={icon}></i>
        <p>{title}</p>
      </button>
      {!showMenu.display || showMenu.title !== title ? [] : 
        <>
          <div className='h-8 w-8 bg-sky-700 absolute top-10 rotate-45'></div>
          <div className='bg-sky-700 absolute top-12 px-4 py-2 rounded-xl z-50 right-1 sm:right-auto'>
            {options.map(({ href, content, icon, isLink }, i) => {
              return <div key={`${title}-${href}`} className={(['Resume', 'GitHub'].includes(content) ? 'lg:hidden' : '')}>
                <a className='my-1 p-2 whitespace-nowrap flex justify-center items-center gap-4 hover:bg-sky-800 rounded-xl'
                  {...(isLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  href={href}
                >
                  {icon ? <i className={icon}></i> : []}
                  <p className='flex-1 flex justify-center'>{content}</p>
                </a>
                {i < options.length - 1 ? <hr /> : []}
              </div>
            })}
          </div>
        </>
      }
    </div>
  )
}
