import { Fragment, useEffect, useState } from 'react';
import LinkTo from './subcomponents/LinkTo';
import getLinkInfo from '../modules/getLinkInfo';
import { portrait, bio } from '../contentConfig';

export default function AboutMe() {
  const [state, setState] = useState(true);
  useEffect(() => {
    setState(false);
  }, [])

  return (
    <div id='AboutMe' className='overflow-clip w-full flex justify-center items-center gap-8 flex-col-reverse md:flex-row rounded-xl scroll-mt-48 md:scroll-mt-32'>
      <img className={`-z-10 md:w-2/5 w-4/5 mb-12 md:my-12 rounded-xl relative transition-all duration-1000 md:top-0 ${state ? 'top-[999px] md:right-[999px]' : 'top-[0px] md:right-[0px]'}`}
        src={portrait}
        alt='Portrait'
      />
      <div className='md:w-2/5 w-4/5 pt-12 md:py-12 flex flex-col justify-between gap-8'>
        <h1 className={`bg-sky-600 rounded-xl p-8 text-white text-center text-2xl relative transition-all duration-1000 ${state ? 'bottom-[999px]' : 'bottom-[0px]'}`}>
          Welcome to my portfolio!
        </h1>
        <p className={`bg-sky-600 rounded-xl p-8 text-white text-lg text-center relative transition-all duration-1000 ${state ? 'left-[999px]' : 'left-[0px]'}`}>
          {bio.map((str, i) => {
            return (
              <Fragment key={`AboutMe-${i}`}>
                {str}
                {i < bio.length - 1 ? [<br key={`AboutMe-${i}-br1`}/>, <br key={`AboutMe-${i}-br2`} />] : []}
              </Fragment>
            )
          })}
        </p>
        <div className={`flex flex-wrap gap-8 relative transition-all duration-1000 md:right-0 ${state ? 'right-[999px] md:top-[999px]' : 'right-[0px] md:top-[0px]'}`}>
          {['Email', 'Phone'].map(key => {
            return (
              <LinkTo key={`AboutMe-${key}`} className='flex-1 p-8 text-lg text-white flex gap-2 items-center justify-center bg-sky-600 hover:bg-sky-800 rounded-xl transition-colors duration-300'
                content={getLinkInfo(key)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
