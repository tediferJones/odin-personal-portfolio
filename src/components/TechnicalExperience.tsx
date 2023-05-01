function TechnicalExperience() {
  return (
    <div className='p-4 pb-8 bg-gray-100 w-full flex flex-col items-center'>
      <div className='w-4/5 py-4'>
        <h1 className='text-3xl self-start'>Relevant technical experience</h1>
      </div>

      <div className='w-4/5 flex flex-wrap text-lg'>
        <div className='flex flex-col flex-1'>
          <h4 className='text-2xl p-4'>Primary Language: Javascript</h4>

          <ul className='list-inside list-disc p-2 flex flex-col items-center'>
            <h4 className='text-2xl p-2 self-start'>Languages I've Experimented with:</h4>
            <li className='w-4/5'>TypeScript</li>
            <li className='w-4/5'>Ruby</li>
            <li className='w-4/5'>Bash</li>
            <li className='w-4/5'>Python</li>
          </ul>

          <ul className='list-inside list-disc p-2 flex flex-col items-center'>
            <h4 className='text-2xl p-2 self-start'>Frameworks/Libraries</h4>
            <li className='w-4/5'>React</li>
            <li className='w-4/5'>ExpressJS</li>
            <li className='w-4/5'>NodeJS (technically, it's a runtime)</li>
            <li className='w-4/5'>Tailwind CSS</li>
          </ul>
        </div>

        <div className='flex flex-col justify-evenly flex-1'>
          <ul className='list-inside list-disc p-2 flex flex-col items-center'>
            <h4 className='text-2xl p-2 self-start'>Other Technologies & Skills:</h4>
            <li className='w-4/5'>Very familiar with HTML and CSS</li>
            <li className='w-4/5'>Solid understanding of git</li>
            <li className='w-4/5'>Knowledge of basic testing practices</li>
            <li className='w-4/5'>Experience working with APIs</li>
            <li className='w-4/5'>Familiarity with linux</li>
            <li className='w-4/5'>Previous tech support experience (mainly hardware)</li>
          </ul>

          <ul className='list-inside list-disc p-2 flex flex-col items-center'>
            <h4 className='text-2xl p-2 self-start'>Currently learning or interested in learning</h4>
            <li className='w-4/5'>TypeScript</li>
            <li className='w-4/5'>NextJS</li>
            <li className='w-4/5'>SolidJS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TechnicalExperience;
