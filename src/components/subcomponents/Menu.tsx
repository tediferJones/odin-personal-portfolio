import { MenuItem } from "../../types"

export default function Menu({
  icon,
  title,
  options,
  isLink,
  showMenu,
  setShowMenu,
}: {
    icon: string,
    title: string,
    options: MenuItem[],
    isLink?: boolean,
    showMenu: { display: boolean, title: string },
    setShowMenu: Function
  }) {
  return (
    <div className='flex items-center flex-col justify-center relative'
      onMouseLeave={() => setShowMenu({ display: false, title: '' })}
    >
      <button className={'flex gap-2 items-center hover:bg-sky-700 p-2 rounded-xl' + 
        (showMenu.display && showMenu.title === title ? ' bg-sky-700' : '')
      }
        onClick={() => {
          setShowMenu((oldState: { display: boolean, title: string }) => {
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
          <div className='bg-sky-700 absolute top-12 px-4 py-2 rounded-xl'>
            {options.map(({ href, content, icon }, i) => {
              return <div key={`${title}-${href}`}>
                {i > 0 ? <hr /> : []}
                <a className='p-2 whitespace-nowrap flex justify-center hover:bg-sky-800' href={href}>{content}</a>
              </div>
            })}
          </div>
        </>
      }
    </div>
  )
}

// OLD
// <div className='flex items-center flex-col justify-center relative'>
//   <div className='flex gap-2 items-center hover:bg-sky-800 p-2 rounded-xl'>
//     <i className="fa-solid fa-bars"></i>
//     <p>Menu</p>
//   </div>
//   <div className='h-8 w-8 bg-sky-700 absolute top-10 rotate-45'></div>
//   <div className='bg-sky-700 absolute top-12 px-4 py-2'>
//     <a className='p-2 whitespace-nowrap flex justify-center hover:bg-sky-800' href='#AboutMe'>About Me</a>
//     <hr className=''/>
//     <a className='p-2 whitespace-nowrap flex justify-center' href='#TechnicalExperience'>Technical Experience</a>
//     <hr className=''/>
//     <a className='p-2 whitespace-nowrap flex justify-center' href='#BackEndProjects'>Back-End Projects</a>
//     <hr className=''/>
//     <a className='p-2 whitespace-nowrap flex justify-center' href='#FrontEndProjects'>Front-End Projects</a>
//     <hr className=''/>
//     <a className='p-2 whitespace-nowrap flex justify-center' href='#CliProjects'>CLI Projects</a>
//     <hr className=''/>
//     <a className='p-2 whitespace-nowrap flex justify-center' href='#AllProjects'>All Projects</a>
//   </div>
// </div>
// 
