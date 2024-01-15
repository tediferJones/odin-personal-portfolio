function TechnicalExperience() {
  return (
    <div className='pb-16 bg-sky-600 text-gray-100 w-full flex flex-col items-center'>
      <div className='w-4/5 pb-4 pt-16'>
        <h1 className='text-3xl self-start'>Relevant technical experience</h1>
      </div>

      <div className='w-4/5 flex flex-wrap text-lg'>
        <div className='flex flex-col justify-evenly flex-1'>
          <h4 className='text-2xl p-4'>Primary Language: TypeScript</h4>

          <ul className='list-inside list-disc p-2 flex flex-col items-center'>
            <h4 className='text-2xl p-2 self-start'>Languages I've Experimented with:</h4>
            <li className='w-4/5'>Python</li>
            <li className='w-4/5'>Bash</li>
            <li className='w-4/5'>Ruby</li>
          </ul>

          <ul className='list-inside list-disc p-2 flex flex-col items-center'>
            <h4 className='text-2xl p-2 self-start'>Frameworks/Libraries</h4>
            <li className='w-4/5'>React & NextJS</li>
            <li className='w-4/5'>ExpressJS</li>
            <li className='w-4/5'>NodeJS (technically, it's a runtime)</li>
            <li className='w-4/5'>Tailwind CSS</li>
          </ul>
        </div>

        <div className='flex flex-col justify-evenly flex-1'>
          <ul className='list-inside list-disc p-2 flex flex-col items-center'>
            <h4 className='text-2xl p-2 self-start'>Other Technologies & Skills:</h4>
            <li className='w-4/5'>Solid understanding of git</li>
            <li className='w-4/5'>Knowledge of basic testing practices</li>
            <li className='w-4/5'>Experience working with APIs</li>
            <li className='w-4/5'>Experience with SQL and NoSQL databases</li>
            <li className='w-4/5'>Familiarity with Linux</li>
            <li className='w-4/5'>Previous tech support experience (mainly hardware)</li>
          </ul>

          <ul className='list-inside list-disc p-2 flex flex-col items-center'>
            <h4 className='text-2xl p-2 self-start'>Interested in learning</h4>
            <li className='w-4/5'>SolidJS framework</li>
            <li className='w-4/5'>Functional programming</li>
            <li className='w-4/5'>A compiled language</li>
          </ul>
        </div>
      </div>
      <div className='bg-white w-4/5 p-8 mt-8 grid gap-4 grid-cols-3 justify-items-center sm:grid-cols-3 md:grid-cols-5'>
        <img className='w-28 h-28' 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
          alt='Typescript'
        />
        <img className='w-28 h-28' 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
          alt='Javascript'
        />
        <img className='w-28 h-28' 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" 
          alt='NextJS'
        />
        <img className='w-28 h-28' 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" 
          alt='React'
        />
        <img className='w-28 h-28'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt='Tailwind'
        />
        <img className='w-28 h-28'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
          alt='Express'
        />
        <img className='w-28 h-28'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt='NodeJS'
        />
        <img className='w-28 h-28'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" 
          alt='Bash'
        />
        <img className='w-28 h-28'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          alt='MongoDB'
        />
        <img className='w-28 h-28' 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" 
          alt='MySQL'
        />
        <img className='w-28 h-28' 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" 
          alt='HTML'
        />
        <img className='w-28 h-28' 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
          alt='CSS'
        />
        <img className='w-28 h-28' 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          alt='Git'
        />
        <img className='w-28 h-28'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg"
          alt='Ruby'
        />
        <img className='w-28 h-28'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
          alt='Python'
        />
      </div>
    </div>
  )
}

export default TechnicalExperience;
