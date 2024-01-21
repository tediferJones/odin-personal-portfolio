import { MenuItem } from '../../types';

export default function LinkTo({ content, className, textClassName }: { content: MenuItem, className?: string, textClassName?: string }) {
  return (
    <a className={className}
      {...(content.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      href={content.href}
    >
      {content.icon ? <i className={content.icon}></i> : []}
      <p className={textClassName}>{content.name}</p>
    </a>
  )
}
