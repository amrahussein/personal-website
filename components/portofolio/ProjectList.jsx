import { projectData } from '../../lib/project-data'
import ProjectListItem from './ProjectListItem'

export default function ProjectList() {
  return (
    <section className='space-x-8 grid grid-cols-3'>
      {projectData.map((data) => (
        <ProjectListItem key={data.id} projectData={data} />
      ))}
    </section>
  )
}
