import AppHeading from '../micros/typography/AppHeading'
import AppLink from '../micros/typography/AppLink'

export default function ProjectListItem({ projectData: data }) {
  return (
    <article className='pl-3 pr-1 py-5 border-2 border-accent rounded-lg space-y-4'>
       <img
          className='rounded-ffull'
          src={'/img/catlogo.jpg'}
         
        />
      <AppHeading styles='text-2xl ... pl-2'>
          {data.name}
        {/* project repo:{' '}
        <p className='inline-block text-secondary underline italic'>
        </p> */}
      </AppHeading>
      <div>
        <h2 className='text-2xl italic font-mono'>Description: </h2>
        <p className='text-secondary'>{data.description}</p>
      </div>
      <h2 className=''>
        Preview:{' '}
        <span className='italic'>
          <AppLink href={data.url_live}>{data.url_live}</AppLink>
        </span>
      </h2>
      <h2 className=''>
        Project repo:{' '}
        <span className='italic'>
          <AppLink href={data.url_repo}>{data.name}</AppLink>
        </span>
      </h2>

      <div>
        <h2 className=''>Features: </h2>
        <ul className='pl-10 text-secondary'>
          {data.features.map((li, idx) => (
            <li key={idx} className='list-disc text-secondary'>
              {li}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className=''>Technologies: </h2>
        <ul className='pl-10 text-secondary'>
          {data.technologies.map((tech, idx) => (
            <li key={idx} className='list-disc'>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      {data.notes && (
        <h2 className='italic font-mono'>
          Notes: <span className='text-gray-500 '>{data.notes}</span>
        </h2>
      )}
    </article>
  )
}
