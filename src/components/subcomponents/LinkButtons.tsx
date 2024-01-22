import LinkTo from "./LinkTo";

export default function LinkButtons({ codeUrl, pageUrl, addClasses }: { codeUrl: string, pageUrl?: string, addClasses?: string }) {
  const sharedClasses = 'flex-1 text-center p-4 flex justify-center items-center gap-2 text-gray-100 rounded-xl transition-colors duration-300';
  return (
    <div className={'flex-1 flex p-2 gap-2 bg-white' + (addClasses ? ' ' + addClasses : '')}>
      <LinkTo className={`${sharedClasses} bg-blue-800 hover:bg-blue-950`}
        content={{
          href: codeUrl,
          name: 'View Code',
          icon: 'fa-regular fa-file-code',
          newTab: true,
        }}/>
      {!pageUrl ? [] :
        <LinkTo className={`${sharedClasses} bg-teal-500 hover:bg-teal-600`} 
          content={{
            href: pageUrl,
            name: 'View Page',
            icon: 'fa-solid fa-link',
            newTab: true,
          }}
        />
      }
    </div>
  )
}
