export default function LinkButtons({ codeUrl, pageUrl, addClasses, rounded }: { codeUrl: string, pageUrl?: string, addClasses?: string, rounded?: boolean }) {
  const sharedClasses = 'flex-1 text-center p-4 flex justify-center items-center gap-2 text-gray-100';
  return (
    <div className={'flex-1 flex p-2 gap-2 bg-white' + (addClasses ? ' ' + addClasses : '')}>
      <a className={`${sharedClasses} bg-blue-800 hover:bg-blue-950 ${rounded ? 'rounded-bl-3xl' : ''}`}
        href={codeUrl}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className="fa-regular fa-file-code"></i>
        View Code
      </a>
      {!pageUrl ? [] :
        <a className={`${sharedClasses} bg-teal-500 hover:bg-teal-600 ${rounded ? 'rounded-br-3xl' : ''}`}
          href={pageUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className="fa-solid fa-link"></i>
          View Page
        </a>
      }
    </div>
  )
}
