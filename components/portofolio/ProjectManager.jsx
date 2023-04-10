import { useEffect, useState } from 'react';
import useProjectHighlights from '../../hooks/useProjectHighlights';
import useProjectFilter from '../../hooks/useSelectedProjectsFilter';
import ProjectHighlights from './ProjectHighlights';
import ProjectItem from './ProjectItem';
import StatusCard from './StatusCard';
import { chips } from './constants/projects-all-featured';
import { projects } from './project-data';

export default function ProjectManager() {
  // needed for scrolling to top - mobile view - ensure running on a browser context
  const isBrowser = () => typeof window !== 'undefined';

  const [allProjectsSorted, setAllProjectsSorted] = useState(null);

  useEffect(() => {
    // sort according to priority value
    setAllProjectsSorted(projects?.sort((a, b) => b.priority - a.priority));
  }, []);

  // get buttons - chips meta data from projects info
  const { uniqueHighlights: projectHighlightsChips } =
    useProjectHighlights(allProjectsSorted);

  // get filtered projects according to user selection
  const { userSelection, handleSelected, filteredProjects } =
  useProjectFilter(allProjectsSorted);
  // 

    // const [count, setCount] = useState(0);

  return (
    <>
      {/* CHIPS - buttons */}
      <section className='flex flex-col sm:flex-row'>
        <div className=''>
          <button
            className={`inline-block max-w-[10rem] cursor-pointer rounded-lg px-3 py-1 font-mono font-semibold text-gray-600 ${
              userSelection.showAll && 'text-secondafry bg-accent'
            }`}
            onClick={() => handleSelected(chips.ALL)}
          >
            Show All
          </button>
          <button
            className={`inline-block max-w-[10rem] cursor-pointer rounded-lg px-3 py-1 font-mono font-semibold text-gray-600 ${
              userSelection.isFeatured && 'text-secondafry bg-accent'
            }`}
            onClick={() => handleSelected(chips.FEATURED)}
          >
            Featured
          </button>
          {/*  */}
          <StatusCard />
        </div>

        <hr className='mt-2 w-full border-2 border-accent sm:hidden' />

        {/* Highlights Section */}
        <ProjectHighlights
          projectHighlights={projectHighlightsChips}
          highlighted={userSelection.highlighted}
          handleSelected={handleSelected}
        />

        <hr className='w-full border-2 border-accent sm:hidden' />
      </section>

      {/* render user selected projects */}
      {/* add extra margins bottom: ensure scroll visibilty */}
      {/* for style consistency & maintaining the page margin width - desktop view */}
      <section className='ml-[-0.5rem] sm:mb-[25rem]'>
        {filteredProjects?.map((data) => (
          <ProjectItem
            key={ Math.random()} // ensure animation action on edge cases by adding unique random key (when the first obj is the same accross user selections)
            projectData={data}
            highlighted={userSelection.highlighted.toLowerCase()}
          />
        ))}
      </section>

      <div className='float-right mt-4 mb-16 h-8 w-8 cursor-pointer border-2 border-accent text-secondary sm:hidden '>
        <a
          onClick={(evt) => {
            // scroll to top - mobile view
            if (!isBrowser()) return;
            evt.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
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
