import { v4 as uuidv4 } from 'uuid';
import { repo, stateContainer } from '../types';

function AllProjects(props: any) {
  let languages: stateContainer = {};
  [...new Set<string>(props.repos.map((item: repo) => item.language))].forEach((item: string) => {
    languages[item] = props.repos.filter((dataItem: repo) => dataItem.language === item)
  })
  if (Object.keys(languages).includes('HTML' && 'CSS')) {
    languages['HTML & CSS'] = languages.HTML.concat(languages.CSS);
    delete languages.HTML;
    delete languages.CSS;
  }
  
  function getTotal() {
    // try using reduce instead
    let total = 0;
    Object.keys(languages)
        .filter((item: string) => item !== 'null')
        .forEach((item: string) => total += languages[item].length)
    return total;
  }

  function toggleRepoList(e: any) {
    document.getElementById(e.target.value)?.classList.toggle('hidden');
    const indicatorState = document.getElementById(e.target.value + 'Indicator');
    if (indicatorState) {
      if (indicatorState.textContent === '+') {
        indicatorState.textContent = '-'
      } else {
        indicatorState.textContent = '+'
      }
    }
  }
  const ignoredRepos = [ 'nextjs-approuter-shadcn' ]

  // This component should return a series of dropdowns by language

  return (
    <div className='bg-sky-600 w-full md:w-3/5 mb-8'>
      <h1 className='text-3xl text-gray-100 p-4'>All Projects ({getTotal() - ignoredRepos.length})</h1>
      {Object.keys(languages).filter((item: string) => item !== 'null').map((item: string) => {
        const repoCount = languages[item].filter(repo => !ignoredRepos.includes(repo.name)).length;
        return (
          <div className='flex flex-col'
            key={uuidv4()}
          >
            <hr />
            <button className='text-2xl text-gray-100 p-4 px-8 flex justify-between'
              onClick={toggleRepoList}
              value={`${item}RepoList`}
            >
              <div className='pointer-events-none'>
                {item} ({repoCount})
              </div>
              <div className='text-3xl font-extrabold pointer-events-none'
                id={`${item}RepoListIndicator`}
              >+</div>
            </button>
            <div className='hidden'
              id={`${item}RepoList`}
            >{languages[item].filter(repo => !ignoredRepos.includes(repo.name)).map((langData: repo) => {
                return (
                  <div className='text-xl flex flex-col md:flex-row px-16 py-4' 
                    key={uuidv4()}
                  >
                    <h1 className='flex-1 bg-white p-4 flex justify-center items-center'>{langData.name}</h1>
                    <div className='flex-1 flex'>
                      <a className='flex-1 text-center p-4 flex justify-center items-center bg-blue-800 text-gray-100 border-solid border-8 border-white'
                        href={langData.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >View Code</a>
                      {!langData.page_link ? [] :
                      <a className='flex-1 text-center p-4 flex justify-center items-center bg-teal-500 text-gray-100 border-solid border-8 border-white'
                        href={langData.page_link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >View Page</a>}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllProjects;
