// import { useState } from 'react';
import { projectData } from '../../lib/project-data';
import ProjectListItem from './ProjectListItem';

export default function ProjectList() {
  return (
    <section className='ml-[-0.5rem] mb-44'>
      {projectData.map((data) => (
        <ProjectListItem key={data.id} projectData={data} />
      ))}
    </section>
  );
}
