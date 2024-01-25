import { devicons } from '../../contentConfig';
import { Repo } from '../../types';

export default function LanguageIconLinks({ repo }: { repo: Repo }) {
  const { language, name } = repo;
  // const langNames = ['HTML', 'CSS'].includes(language) ? ['HTML', 'CSS'] : [ language ];
  let langNames = [ language ];
  if (['HTML', 'CSS'].includes(language)) {
    langNames = ['HTML', 'CSS'];
  }
  if (language === 'Shell') {
    langNames = [ 'Bash' ];
  }
  return (
    <>
      {langNames.map(lang => {
        return <button key={`${name}-${lang}`} onClick={() => {
          // All of this should probably done with refs instead
          const langId = ['HTML', 'CSS'].includes(lang) ? 'HTML-CSS' : lang
          const element = document.querySelector(`#${langId}`);
          const isOpen = element?.parentNode?.lastElementChild?.classList.value.includes('max-h-[9999px]');
          if (element && !isOpen) {
            ['mousedown', 'click', 'mouseup'].forEach(event => {
              element.dispatchEvent(new MouseEvent(event, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
              }))
            })
          }
          setTimeout(() => {
            window.location.href = `#${langId}`
          }, 75)
        }}>
          <img className='h-12' 
            key={`RepoList-${repo.name}-${lang}`}
            src={devicons[lang]}
            alt={lang}
          />
        </button>
      })}
    </>
  )
}
