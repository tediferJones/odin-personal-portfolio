import {/* Fragment,*/ useEffect, useState } from 'react';
import portrait from '../assets/images/image0.jpeg';
import getLinkInfo from '../modules/getLinkInfo';
import LinkTo from './subcomponents/LinkTo';
// import { bio } from '../contentConfig';

export default function AboutMe() {
  const [state, setState] = useState(true);
  useEffect(() => {
    setState(false);
  }, [])

  // <div className={/*-z-10 */`w-full flex justify-center gap-4 transition-all duration-1000 ${state ? 'bg-sky-600' : 'bg-white'}`}>
  // </div>
  // <div className='bg-red-500 w-2/5 my-12'></div>
  return (
    <div id='AboutMe' className='w-full flex justify-center gap-8 flex-col lg:flex-row overflow-hidden scroll-m-0'>
      <img className={`my-12 w-2/5 rounded-xl relative transition-all duration-1000 ${state ? 'right-[999px]' : 'right-[0px]'}`}
        src={portrait}
        alt='Portrait'
      />
      <div className='w-2/5 my-12 flex flex-col justify-between gap-8'>
        <h1 className={`bg-sky-600 rounded-xl p-8 text-white text-center text-3xl relative transition-all duration-1000 ${state ? 'bottom-[999px]' : 'bottom-[0px]'}`}>Welcome to my portfolio!</h1>
        <p className={`bg-sky-600 rounded-xl p-8 text-white text-2xl text-center relative transition-all duration-1000 ${state ? 'left-[999px]' : 'left-[0px]'}`}>
          I am a full stack web developer who really enjoys trying to find 
          new ways to solve novel and complex problems
          <br />
          <br />
          My goal is to learn as much as I can about how the web works
        </p>
        <div className={`flex gap-8 relative transition-all duration-1000 ${state ? 'top-[999px]' : 'top-[0px]'}`}>
          {/*
            <a className='flex-1 p-8 text-xl text-white flex gap-2 items-center justify-center bg-sky-600 hover:bg-sky-800 rounded-xl'
              href='mailto:theo_drz@live.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-solid fa-envelope-open-text'></i>
              Email
            </a>
            <a className='flex-1 p-8 text-xl text-white flex gap-2 items-center justify-center bg-sky-600 hover:bg-sky-800 rounded-xl'
              href='tel:+14128891992'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-solid fa-phone-volume'></i>
              Phone
            </a>
            */}
          {['Email', 'Phone'].map(key => {
            return (
              <LinkTo key={`AboutMe-${key}`} className='flex-1 p-8 text-xl text-white flex gap-2 items-center justify-center bg-sky-600 hover:bg-sky-800 rounded-xl'
                content={getLinkInfo(key)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className={`-z-10 flex justify-center items-center transition-all duration-1000 ${state ? 'bg-sky-600' : 'bg-white'}`}>
  //     <div id='AboutMe' className='w-4/5 my-12'>
  //       <img className={`float-left w-full md:w-3/5 lg:w-2/5 m-0 md:m-4 rounded-xl relative transition-all duration-1000 ${state ? 'right-[480px]' : 'right-[0px]'}`}
  //         src={portrait}
  //         alt='Portrait'
  //       />
  //       <div className={`text-xl relative transition-all duration-1000 ${state ? 'left-[9999px]' : 'left-[0px]'}`}>
  //         <h1 className={`flex justify-center items-center text-3xl relative transition-all duration-1000 ${state ? 'bottom-[999px]' : 'bottom-[0px]'}`}>Welcome to my portfolio!</h1>
  //         {bio.map((paragraph, i) => {
  //           return <Fragment key={`AboutMe-${i}`}>
  //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{paragraph}
  //             {i < bio.length - 1 ? <><br/><br/></> : []}
  //           </Fragment>
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // )
}
