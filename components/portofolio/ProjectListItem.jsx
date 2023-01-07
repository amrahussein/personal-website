import AppHeading from '../micros/typography/AppHeading';
import AppLink from '../micros/typography/AppLink';

export default function ProjectListItem({ projectData: data }) {
  // create a styling effect
  const isEven = data.id % 2 === 0 ? true : false;

  return (
    <article className='mt-5 lg:mt-16'>
      <AppHeading styles='text-2xl ... pl-2  text-secondary underline italic'>
        {data.name}
      </AppHeading>
      <section
        className={`h-full mt-4 bg-gradient-to-t from-accent pb-3 ${
          isEven ? 'pl-3 rounded-bl' : 'pr-3 rounded-br'
        }`}
      >
        <section className='bg-white h-full px-4 py-4 space-y-4'>
          {/* <h2 className='text-2xl italic font-mono'>Description: </h2> */}
          {data.description ? (
            <p className='text-secondary'>{data.description}</p>
          ) : null}
          {data.url_live ? (
            <h2 className=''>
              Preview:{' '}
              <span className='italic'>
                <AppLink href={data.url_live}>{data.url_live}</AppLink>
              </span>
            </h2>
          ) : null}
          <h2 className=''>
            Project repo:{' '}
            <span className='italic'>
              <AppLink href={data.url_repo}>{data.name}</AppLink>
            </span>
          </h2>

          {data.features ? (
            <>
              <h2 className=''>Features: </h2>
              <ul className='pl-10 text-secondary'>
                {data.features.map((li, idx) => (
                  <li key={idx} className='list-disc text-secondary'>
                    {li}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {data.technologies ? (
            <>
              <h2 className=''>Technologies: </h2>
              <ul className='pl-10 text-secondary'>
                {data.technologies.map((tech, idx) => (
                  <li key={idx} className='list-disc'>
                    {tech}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {data.notes && (
            <h2 className='italic font-mono py-5'>
              Notes: <span className='text-gray-500 '>{data.notes}</span>
            </h2>
          )}
        </section>
      </section>
    </article>
  );
}
