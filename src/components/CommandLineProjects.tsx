import { v4 as uuidv4 } from 'uuid';
import { repo, stateContainer } from '../types';

function CommandLineProjects(props: any) {
  const commandLineProjectNames: { [key: string]: Array<string> } = {
    'Algorithms': [
      'odin-knights-travails',
      'odin-binary-search-trees',
      'odin-linked-lists',
      'odin-recursion',
      'odin-bubble-sort',
      'odin-substring',
      'odin-caesar-cipher',
      'odin-stock-picker',
    ],
    'Command Line Games': [
      'odin-mastermind',
      'odin-hangman',
      'odin-tic-tac-toe',
    ],
  }
  let commandLineRepos: stateContainer = {};
  Object.keys(commandLineProjectNames).forEach((key: string) => {
    commandLineRepos[key] = props.repos.filter((item: repo) => commandLineProjectNames[key].includes(item.name));
  })
  
  function getTotal() {
    // try using reduce instead
    let total = 0;
    Object.keys(commandLineRepos)
        .filter((item: string) => item !== 'null')
        .forEach((item: string) => total += commandLineRepos[item].length)
    return total;
  }

  function toggleRepoList(e: any) {
    document.getElementById(e.target.value)?.classList.toggle('hidden');
  }

  // This component should return a series of dropdowns dependent on commandLineProjectNames

  return (
    <div className='bg-gray-100 w-full md:w-4/5 mb-8'>
      <h1 className='text-3xl p-4'>Command Line Projects and Algorithms ({getTotal()})</h1>
      {Object.keys(commandLineRepos).filter((item: string) => item !== 'null').map((item: string) => {
        return (
          <div className='flex flex-col'
            key={uuidv4()}
          >
            <hr />
            <button className='text-2xl p-4 px-8 flex'
              onClick={toggleRepoList}
              value={`${item}RepoList`}
            >{item} ({commandLineRepos[item].length})</button>
            <div className='hidden'
              id={`${item}RepoList`}
            >{commandLineRepos[item].map((langData: repo) => {
                return (
                  <div className='text-xl flex flex-col md:flex-row px-16 py-4' 
                    key={uuidv4()}
                  >
                    <h1 className='flex-1 p-4 flex justify-center items-center'>{langData.name}</h1>
                    <div className='flex-1 flex'>
                      <a className='flex-1 text-center p-4 flex justify-center items-center bg-blue-400'
                        href={langData.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >View Code</a>
                      {!langData.page_link ? [] :
                      <a className='flex-1 text-center p-4 flex justify-center items-center bg-orange-400'
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

export default CommandLineProjects;
