import { useEffect, useState } from 'react';
import portrait from '../assets/images/portrait.jpg';
import getLinkInfo from '../modules/getLinkInfo';
import LinkTo from './subcomponents/LinkTo';

export default function AboutMe() {
  const [state, setState] = useState(true);
  useEffect(() => {
    setState(false);
  }, [])

  return (
    <div id='AboutMe' className='overflow-clip w-full flex justify-center items-center gap-8 flex-col-reverse lg:flex-row rounded-xl scroll-m-32'>
      <img className={`-z-10 lg:w-2/5 w-4/5 mb-12 lg:my-12 rounded-xl relative transition-all duration-1000 lg:top-0 ${state ? 'top-[999px] lg:right-[999px]' : 'top-[0px] lg:right-[0px]'}`}
        src={portrait}
        alt='Portrait'
      />
      <div className='lg:w-2/5 w-4/5 pt-12 lg:py-12 flex flex-col justify-between gap-8'>
        <h1 className={`bg-sky-600 rounded-xl p-8 text-white text-center text-3xl relative transition-all duration-1000 ${state ? 'bottom-[999px]' : 'bottom-[0px]'}`}>Welcome to my portfolio!</h1>
        <p className={`bg-sky-600 rounded-xl p-8 text-white text-2xl text-center relative transition-all duration-1000 ${state ? 'left-[999px]' : 'left-[0px]'}`}>
          I am a full stack web developer who really enjoys trying to find 
          new ways to solve novel and complex problems
          <br />
          <br />
          My goal is to learn as much as I can about how the web works
        </p>
        <div className={`flex flex-wrap gap-8 relative transition-all duration-1000 lg:right-0 ${state ? 'right-[999px] lg:top-[999px]' : 'right-[0px] lg:top-[0px]'}`}>
          {['Email', 'Phone'].map(key => {
            return (
              <LinkTo key={`AboutMe-${key}`} className='flex-1 p-8 text-xl text-white flex gap-2 items-center justify-center bg-sky-600 hover:bg-sky-800 rounded-xl transition-colors duration-300'
                content={getLinkInfo(key)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
