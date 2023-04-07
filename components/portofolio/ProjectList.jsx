import { useState } from 'react';
import ProjectListItem from './ProjectListItem';
import StatusCard from './StatusCard';
import { chips } from './constants/projects-all-featured';
import useProjectHighlights from './hooks/useProjectHighlights';
import { projects } from './project-data';

export default function ProjectList() {
  // recommending by Next.js - needed for scroll to top - mobile view - run only on a browser
  const isBrowser = () => typeof window !== 'undefined';

  const [showAll, setShowAll] = useState(false);
  const [isFeatured, setIsFeatured] = useState(true);
  const [highlighted, setHighlighted] = useState('');

  const { uniqueHighlights: projectHighlights } =
    useProjectHighlights(projects);

  const handleSelected = (filter) => {
    switch (filter) {
      case chips.ALL:
        setShowAll(true);
        setIsFeatured(false);
        setHighlighted('');
        break;
      case chips.FEATURED:
        setShowAll(false);
        setIsFeatured(true);
        setHighlighted('');
        break;
      default:
        setShowAll(false);
        setIsFeatured(false);
        setHighlighted(filter);
        break;
    }
  };

  const filteredProjects = projects
    .sort((a, b) => b.priority - a.priority) // sort according to priority value
    .filter((project) => {
      if (showAll) {
        return true;
      }
      if (isFeatured) {
        return project.isFeatured;
      }
      if (highlighted) {
        return project.highlights.names.includes(highlighted);
      }
    });

  // scroll to top - mobile view
  const scrollToTop = (evt) => {
    // exit on server context
    if (!isBrowser()) return;
    evt.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* CHIPS - buttons */}
      <section className='flex flex-col sm:flex-row'>
        <div className=''>
          <button
            className={`inline-block max-w-[10rem] cursor-pointer rounded-lg px-3 py-1 font-mono font-semibold text-gray-600 ${
              showAll && 'text-secondafry bg-accent'
            }`}
            onClick={() => handleSelected(chips.ALL)}
          >
            Show All
          </button>
          <button
            className={`inline-block max-w-[10rem] cursor-pointer rounded-lg px-3 py-1 font-mono font-semibold text-gray-600 ${
              isFeatured && 'text-secondafry bg-accent'
            }`}
            onClick={() => handleSelected(chips.FEATURED)}
          >
            Featured
          </button>
          {/*  */}
          <StatusCard />
        </div>

        <hr className='mt-2 w-full border-2 border-accent sm:hidden' />

        <ul className='h-24 space-x-4 space-y-2 overflow-auto sm:ml-12 sm:-mb-10'>
          {projectHighlights?.map((highlight, idx) => (
            <li
              key={idx}
              className={`inline-block max-w-[10rem] cursor-pointer rounded-lg px-3 py-1 font-mono font-semibold text-gray-600 ${
                highlighted === highlight.name && 'bg-accent'
              }`}
              onClick={() => handleSelected(highlight.name)}
            >
              <span className=''>
                {highlight.icon && (
                  <img
                    alt={highlight.name}
                    className='inline w-5'
                    src={highlight.icon}
                  />
                )}
              </span>
              <span className='pl-2'>{highlight.name}</span>
            </li>
          ))}
        </ul>

        <hr className='w-full border-2 border-accent sm:hidden' />
      </section>

      {/* render user selected projects */}
      {/* add extra margins bottom: ensure scroll visibilty */}
      {/* for style consistency & maintaining the page margin width - desktop view */}
      <section className='ml-[-0.5rem] sm:mb-[25rem]'>
        {filteredProjects.map((data) => (
          <ProjectListItem
            key={data.id}
            projectData={data}
            highlighted={highlighted.toLowerCase()}
          />
        ))}
      </section>

      {/* bring me back to highlights section - mobile view */}
      <div className='float-right mt-4 mb-16 h-8 w-8 cursor-pointer border-2 border-accent text-secondary sm:hidden '>
        <a onClick={scrollToTop}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18'
            />
          </svg>
        </a>
      </div>
    </>
  );
}
