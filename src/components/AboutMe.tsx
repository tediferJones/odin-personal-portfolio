import { Fragment } from 'react';
import portrait from '../assets/images/image0.jpeg';
import { bio } from '../contentConfig';

export default function AboutMe() {
  return (
    <div id='AboutMe' className='w-4/5 my-12'>
      <img className='float-left w-full md:w-3/5 lg:w-2/5 m-4 rounded-xl' 
        src={portrait}
        alt='Portrait'
      />
      <p className='text-xl'>
        {bio.map((paragraph, i) => {
          return <Fragment key={`AboutMe-${i}`}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{paragraph}
            {i < bio.length - 1 ? <><br/><br/></> : []}
          </Fragment>
        })}
      </p>
    </div>
  )
}
