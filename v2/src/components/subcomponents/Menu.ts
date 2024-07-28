import type { MenuItem, MenuState } from '@/types'
import LinkTo from '@/components/subcomponents/LinkTo'
import { contactMenuToggles } from '@/contentConfig'
import t from '@/lib/getTag'

export default function Menu({
  icon,
  title,
  content,
  showMenu,
  setShowMenu,
}: {
  icon: string,
  title: string,
  content: MenuItem[],
  showMenu: MenuState,
  setShowMenu: Function
}) {
  return (
    t('div', {
      className: 'flex items-center flex-col justify-center relative',
      onmouseleave: () => setShowMenu({ display: false, title: '' })
    }, [
        t('button', {
          className: 'flex gap-2 items-center hover:bg-sky-700 p-4 rounded-xl mr-4 sm:mr-0 transition-colors duration-300' + (showMenu.display && showMenu.title === title ? ' bg-sky-700' : ''),
          onClick:() => {
            setShowMenu((oldState: MenuState) => {
              return {
                display: oldState.display ? false : true,
                title,
              }
            })
          }
        }, [
            t('i', { className: icon }),
            t('p', { textContent: title }),
          ]),
        !showMenu.display || showMenu.title !== title ? undefined : 
          t('div', { className: 'h-8 w-8 bg-sky-700 absolute top-14 rotate-45' }),
        !showMenu.display || showMenu.title !== title ? undefined : 
          t('div', { className: 'bg-sky-700 absolute top-16 px-4 py-2 rounded-xl z-10 right-1 sm:right-auto' }, [
            ...content.map((key, i) => {
              return (
                t('div', { /*key: `${title}-${key.name}`,*/ className: (key.name && contactMenuToggles.includes(key.name) ? 'lg:hidden' : '') }, [
                  LinkTo({
                    content: key,
                    className: 'my-1 p-2 whitespace-nowrap flex justify-center items-center gap-4 hover:bg-sky-800 rounded-xl transition-colors duration-300',
                    textClassName: 'flex-1 flex justify-center',
                  }),
                  i < content.length - 1 ? t('hr') : undefined
                ])
              )
            })
          ])
      ])
  )
}
