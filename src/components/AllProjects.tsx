import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AllProjects() {
  const [repos, setRepos] = useState([{
    name: '',
    language: '',
    html_url: '',
    has_pages: false,
  }]);

  useEffect(() => {
    fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
        .then(res => res.json())
        .then(data => {
          let languages: { [key: string]: Array<string> } = {};
          const allLanguages = [...new Set(data.map((item: { language: string }) => item.language))];
          console.log(allLanguages)
          allLanguages.map((item: any) => {
            // console.log(languages);
            // console.log(item)
            languages[item] = data.filter((dataItem: { language: string }) => dataItem.language === item)
          })
          console.log(languages);
          // console.log(data.filter((item: any) => item.language === 'TypeScript'))
          // console.log(data.filter((item: any) => item.language === 'JavaScript'))
          // console.log(data.filter((item: any) => item.language === 'Ruby'))
          // console.log(data.filter((item: any) => ['HTML', 'CSS'].includes(item.language)))

          setRepos(data.filter((item: { language: string }) => item.language !== null));
        })
  }, []);

  // This should return a series of dropdowns by language
  //    - For Example: have languages JS, Python, Ruby, have each drop down show its projects
  // State needs to be some kind of dynamic object

  return (
    <div>
      <h1>All Projects ({repos.length})</h1>
      {repos.map(item => {
        return (
          <div className='flex justify-around'
            key={uuidv4()}
          >
            <h3>{item.name}</h3>
            <h3>{item.language}</h3>
            <a href={item.html_url}>CODE LINK</a>
            {item.has_pages ? 
              <a href={`https://tediferjones.github.io/${item.name}`}>PAGE LINK</a>
              : []}
          </div>
        )
      })}
    </div>
  )
}

export default AllProjects;
