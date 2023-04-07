import { useEffect, useState } from 'react';
import AppHeading from '../micros/typography/AppHeading';
import AppLink from '../micros/typography/AppLink';
import StatusIndicators from './StatusIndicators';

export default function ProjectListItem({ projectData: project, highlighted }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [project]);

  return (
    <>
      <article
        className={`mt-5 transition-transform lg:mt-16 ${
          animate
            ? 'translate-y-0 transform delay-300'
            : 'translate-y-1 transform'
        } duration-250 ease-out`}
      >
        <AppHeading styles='text-2xl pl-2 text-secondary underline italic'>
          {project.name}
        </AppHeading>
        <section className='mt-4 h-full rounded-bl bg-gradient-to-t from-accent pb-3 pl-3'>
          <section className='h-full space-y-4 bg-white px-4 py-4'>
            {project.description ? (
              <p className='text-secondary'>{project.description}</p>
            ) : null}
            {project.url_live ? (
              <h2 className=''>
                Preview:{' '}
                <span className='italic'>
                  <AppLink href={project.url_live}>{project.url_live}</AppLink>
                </span>
              </h2>
            ) : null}
            <h2 className=''>
              Project repo:{' '}
              <span className='italic'>
                <AppLink href={project.url_repo}>{project.name}</AppLink>
              </span>
            </h2>

            {project.features ? (
              <div>
                <h2 className=''>Features: </h2>
                <ul className='pl-10 text-secondary'>
                  {project.features.map((li, idx) => (
                    <li key={idx} className='list-disc text-secondary'>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.technologies ? (
              <div>
                <h2 className=''>Technologies: </h2>
                <ul className='pl-10 text-secondary'>
                  {project.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className={`list-disc ${
                        highlighted === tech.toLowerCase() ? 'underline' : ''
                      }`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {project.notes && (
              <h2 className='py-5 font-mono italic'>
                Notes: <span className='text-gray-500 '>{project.notes}</span>
              </h2>
            )}
          </section>
          <section>
            <StatusIndicators hasCoreFeatDone={project.hasCoreFeatDone} />
          </section>
        </section>
      </article>
    </>
  );
}
