function TechnicalExperience() {
  return (
    <div className='p-4 pb-8 bg-gray-100 w-full flex flex-col items-center'>
      <div className='w-4/5 py-4'>
        <h1 className='text-2xl self-start'>Relevant technical experience</h1>
      </div>

      {/*
      <div className='w-4/5 myGridContainer grid grid-cols-1 md:grid-cols-2'>
      */}
      <div className='w-4/5 flex flex-col flex-wrap lg:max-h-96'>
        <h4 className='text-xl p-4 row-start-1 row-end-2'>Primary Language: Javascript</h4>

        <ul className='list-inside list-disc p-2'>
          <h4 className='text-xl p-2'>Languages I've Experimented with:</h4>
          <li>TypeScript</li>
          <li>Ruby</li>
          <li>Bash</li>
          <li>Python</li>
        </ul>

        <ul className='list-inside list-disc p-2'>
          <h4 className='text-xl p-2'>Frameworks/Libraries</h4>
          <li>React</li>
          <li>ExpressJS</li>
          <li>NodeJS (technically, it's a runtime)</li>
          <li>Tailwind CSS</li>
        </ul>

        <ul className='list-inside list-disc p-2 lg:my-4'>
          <h4 className='text-xl p-2'>Other Technologies & Skills:</h4>
          <li>Very familiar with HTML and CSS</li>
          <li>Solid understanding of git</li>
          <li>Knowledge of basic testing practices</li>
          <li>Familiarity with linux</li>
          <li>Previous tech support experience (mainly hardware)</li>
        </ul>

        <ul className='list-inside list-disc p-2 lg:my-4'>
          <h4 className='text-xl p-2'>Currently learning or interest in learning</h4>
          <li>TypeScript</li>
          <li>NextJS</li>
          <li>SolidJS</li>
        </ul>
      </div>
    </div>
  )
}

export default TechnicalExperience;
