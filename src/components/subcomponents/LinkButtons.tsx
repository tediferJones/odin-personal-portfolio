export default function LinkButtons({ codeUrl, pageUrl, addClasses }: { codeUrl: string, pageUrl?: string, addClasses?: string }) {
  return (
    <div className={'flex-1 flex' + (addClasses ? ' ' + addClasses : '')}>
      <a className='flex-1 text-center p-4 flex justify-center items-center bg-blue-800 text-gray-100 border-solid border-8 border-white'
        href={codeUrl}
        target='_blank'
        rel='noopener noreferrer'
      >View Code</a>
      {!pageUrl ? [] :
        <a className='flex-1 text-center p-4 flex justify-center items-center bg-teal-500 text-gray-100 border-solid border-8 border-white'
          href={pageUrl}
          target='_blank'
          rel='noopener noreferrer'
        >View Page</a>
      }
    </div>
  )
}
