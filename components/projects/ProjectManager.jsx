import { nanoid } from 'nanoid';
import { useState } from 'react';
import { chips } from '../../data/projects/constants/projects-all-featured';
import { getSortedProjectsByPriority } from '../../data/projects/projects';
import useProjectHighlights from '../../hooks/useProjectHighlights';
import useProjectFilter from '../../hooks/useSelectedProjectsFilter';
import AppLink from '../micros/typography/AppLink';
import ProjectHighlights from './ProjectHighlights';
import ProjectItem from './ProjectItem';
import StatusCard from './StatusCard';

export default function ProjectManager() {
  const [statusCardClosed, setStatusCardClosed] = useState(false);

  const { uniqueHighlights: projectHighlightsChips } = useProjectHighlights(
    getSortedProjectsByPriority(),
  );

  // get filtered projects according to user selection
  const { userSelection, handleSelected, filteredProjects } = useProjectFilter(
    getSortedProjectsByPriority(),
  );

  return (
    <>
      <section className='flex flex-col sm:mb-12 sm:h-24 sm:flex-row'>
        {/* CHIPS - buttons */}
        <div className='flex w-[14.5rem] shrink-0 flex-col space-y-2'>
          <button
            className={`inline-block max-w-[10rem] cursor-pointer rounded-lg border-2 border-accent px-3 py-1 font-mono font-semibold text-gray-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 ${
              userSelection.showAll &&
              'text-secondafry bg-accent dark:bg-slate-700 dark:text-slate-300'
            }`}
            onClick={() => handleSelected(chips.ALL)}
          >
            Show All
          </button>
          <button
            className={`inline-block max-w-[10rem] cursor-pointer rounded-lg border-2 border-accent px-3 py-1 font-mono font-semibold text-gray-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 ${
              userSelection.isFeatured &&
              'text-secondafry bg-accent dark:bg-slate-700 dark:text-slate-300'
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
              <>
                <p className='-mb-1 pt-4 sm:mb-auto'>
                  check github account at:{' '}
                </p>
                <AppLink href='https://github.com/amrakhussein' rel='github'>
                  github.com/amrakhussein
                </AppLink>
              </>
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
        <hr className='w-full border-2 border-accent  sm:hidden' />
      </section>

      {/* render user selected projects */}
      {/* add extra margins bottom: ensure scroll visibilty */}
      {/* for style consistency & maintaining the page margin width - desktop view */}
      <section className='ml-[-0.5rem] sm:mt-20 sm:mb-[25rem]'>
        {filteredProjects?.map((data) => (
          <ProjectItem
            key={nanoid()} // ensure animation action on edge cases accross user selections
            projectData={data}
            highlighted={userSelection.highlighted.toLowerCase()}
          />
        ))}
      </section>
    </>
  );
}
