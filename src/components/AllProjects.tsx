import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface repo {
  name: string,
  language: string,
  html_url: string,
  updated_at: string,
  has_pages: boolean,
}

interface stateContainer {
  [key: string]: Array<repo>
}

function AllProjects() {
  const [reposV2, setReposeV2] = useState<stateContainer>({})

  useEffect(() => {
    fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
        .then(res => res.json())
        .then(data => {
          let languages: stateContainer = {};
          // const allLanguages = [...new Set<string>(data.map((item: repo) => item.language))];
          [...new Set<string>(data.map((item: repo) => item.language))].forEach((item: string) => {
            languages[item] = data.filter((dataItem: repo) => dataItem.language === item)
          })

          // Merge HTML and CSS into one key/value pair
          languages['HTML/CSS'] = languages.HTML.concat(languages.CSS);
          delete languages.HTML;
          delete languages.CSS;

          setReposeV2(languages);
        })
  }, []);

  function getTotal() {
    // try using reduce instead
    let total = 0;
    Object.keys(reposV2)
        .filter((item: string) => item !== 'null')
        .forEach((item: string) => total = total + reposV2[item].length)
    return total;
  }

  function toggleRepoList(e: any) {
    document.getElementById(e.target.value)?.classList.toggle('hidden');
  }

  // This should return a series of dropdowns by language
  //    - For Example: have languages JS, Python, Ruby, have each drop down show its projects
  // State needs to be some kind of dynamic object
  // To get the length of all arrays from our object, we need to loop through each of its keys, get array.length and add it some accumalator or something like that

  return (
    <div className='bg-gray-100 w-full md:w-3/5 mb-8'>
      <h1 className='text-3xl p-4'>All Projects ({getTotal()})</h1>
      {Object.keys(reposV2).filter((item: string) => item !== 'null').map((item: string) => {
        return (
          <div className='flex flex-col'
            key={uuidv4()}
          >
            <hr />
            <button className='text-2xl p-4 px-8 self-start'
              onClick={toggleRepoList}
              value={`${item}RepoList`}
            >{item} ({reposV2[item].length})</button>
            <div className='hidden'
              id={`${item}RepoList`}
            >{reposV2[item].map((langData: repo) => {
                return (
                  <div className='text-xl flex flex-col md:flex-row px-16 py-4' 
                    key={uuidv4()}
                  >
                    <h1 className='flex-1 flex items-center'>{langData.name}</h1>
                    <div className='flex-1 flex'>
                      <a className='flex-1 text-center p-4 flex justify-center items-center bg-blue-400'
                        href={langData.html_url}
                      >View Code</a>
                      {langData.has_pages === false ? [] :
                      <a className='flex-1 text-center p-4 flex justify-center items-center bg-orange-400'
                        href={`https://tediferjones.github.io/${langData.name}`}
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
