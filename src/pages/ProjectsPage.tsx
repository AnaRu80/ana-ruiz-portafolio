
import data from "../data/portfolio.json";
import { Card } from '../components/Card';

export function ProjectsPage() {
  return (
    <div className="mt-5 laptop:mt-10 grid grid-cols-2 md:grid-cols-2 gap-4">
      {data.projects.map((project) => (
        <Card
          key={project.id}
          img={project.imageSrc}
          name={project.title}
          description={project.description}
          onClick={() => window.open(project.url)}
        />
      ))}
    </div>
  )
}
