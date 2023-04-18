import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { projects } from '../../data/projects/projects';
import { chips } from '../../data/projects/constants/projects-all-featured';
import useProjectHighlights from '../../hooks/useProjectHighlights';
import useProjectFilter from '../../hooks/useSelectedProjectsFilter';
import { useUserScrolledDown } from '../../hooks/useUserScrolledDown';
import AppLink from '../micros/typography/AppLink';
import ProjectHighlights from './ProjectHighlights';
import ProjectItem from './ProjectItem';
import StatusCard from './StatusCard';

export default function ProjectManager() {
  // needed for scrolling to top - mobile view - ensure running on a browser context
  const isBrowser = () => typeof window !== 'undefined';

  const [allProjectsSorted, setAllProjectsSorted] = useState(null);

  const [statusCardClosed, setStatusCardClosed] = useState(false);

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

  const { userScrollDown } = useUserScrolledDown();

  return (
    <>
      {/* CHIPS - buttons */}
      <section className='flex flex-col sm:mb-12 sm:h-24 sm:flex-row'>
        <div className='space-y-2 flex w-[14.5rem] shrink-0 flex-col'>
          <button
            className={`border-2 border-accent inline-block max-w-[10rem] cursor-pointer rounded-lg px-3 py-1 font-mono font-semibold text-gray-600 ${
              userSelection.showAll && 'text-secondafry bg-accent'
            }`}
            onClick={() => handleSelected(chips.ALL)}
          >
            Show All
          </button>
          <button
            className={`border-2 border-accent inline-block max-w-[10rem] cursor-pointer rounded-lg px-3 py-1 font-mono font-semibold text-gray-600 ${
              userSelection.isFeatured && 'text-secondafry bg-accent'
            }`}
            onClick={() => handleSelected(chips.FEATURED)}
          >
            Featured
          </button>
          <div className='h-16'>
            {!statusCardClosed ? (
              <StatusCard
                close={statusCardClosed}
                setClose={setStatusCardClosed}
              />
            ) : (
              <p className='pt-4'>
                check github account at:{' '}
                <AppLink href='https://github.com/amromoorie' rel='github'>
                  github.com/amromoorie
                </AppLink>
              </p>
            )}
          </div>
        </div>

        <hr className='mt-2 w-full border-2 border-accent sm:hidden' />

        {/* CHIPS - Highlights Section */}
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
      <section className='ml-[-0.5rem] mb-4 sm:mb-[25rem]'>
        {filteredProjects?.map((data) => (
          <ProjectItem
            key={nanoid()} // ensure animation action on edge cases accross user selections
            projectData={data}
            highlighted={userSelection.highlighted.toLowerCase()}
          />
        ))}
      </section>

      {/* show take me to top button when user scrolls down */}
      {userScrollDown && (
        <div className='sticky bottom-4 float-right h-8 w-8 cursor-pointer rounded-full border-2 border-accent text-secondary sm:hidden '>
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
      )}
    </>
  );
}