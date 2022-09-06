import { projectData } from '../../lib/project-data'
import ProjectListItem from './ProjectListItem'
import Slider from './Slider.test'

export default function ProjectList() {
  return (<>
      {/* <Slider /> */}
    <section className=''>
      {projectData.map((data) => (
        <ProjectListItem key={data.id} id={data.id} projectData={data} />
        ))}
    </section>
        </>
  )
}
