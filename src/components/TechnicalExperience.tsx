import { techExp, devicons } from '../contentConfig'
import BulletList from './subcomponents/BulletList';

export default function TechnicalExperience() {
  return (
    <div id='TechnicalExperience' className='py-12 bg-sky-600 text-gray-100 w-full flex flex-col items-center scroll-mt-48 md:scroll-mt-32'>
      <div className='w-4/5 pb-4'>
        <h1 className='text-2xl self-start'>Relevant technical experience</h1>
      </div>

      <div className='w-4/5 flex flex-wrap'>
        {techExp.map((col, i) => <div key={`columnNumber${i}`} className='flex flex-col justify-evenly flex-1'>
          {Object.keys(col).map(heading => <BulletList key={heading} heading={heading} points={col[heading]} />)}
        </div>)}
      </div>

      <div className='bg-white w-4/5 p-8 mt-8 grid gap-4 grid-cols-3 justify-items-center sm:grid-cols-3 md:grid-cols-5 rounded-xl'>
        {Object.keys(devicons).map(langName => {
          return <img className='w-20 h-20' 
            key={langName}
            src={devicons[langName]}
            alt={langName}
          />
        })}
      </div>
    </div>
  )
}
