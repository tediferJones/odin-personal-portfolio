export default function BulletList({ heading, points }: { heading: string, points: string[] }) {
  return !points.length ? <h4 className='text-2xl p-4'>Primary Language: TypeScript</h4> :
    <ul className='list-inside list-disc p-2 flex flex-col items-center'>
      <h4 className='text-2xl p-2 self-start'>{heading}</h4>
      {points.map((point, i) => <li className='w-4/5' key={heading + i.toString()}>{point}</li>)}
    </ul>
}
