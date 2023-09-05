import { useTranslation } from 'react-i18next';
import { projectsData } from '../data';
import { Card } from '../components/Card';
import { Text, TransitionPage } from '../components';
import { projectDataInterface } from '../data/interfaces';

export function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <TransitionPage>
      <div className='px-6 justify-center text-justify'>
        <Text
          isTitle
          isCentered
          text={t('projects.projectsTitle')}
          classNameText='mb-2'
        />
        <Text text={t('projects.projectsContent')} />
      </div>

      <div className='mt-5 laptop:mt-10 grid  md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer'>
        {projectsData.map((project: projectDataInterface) => (
          <Card
            key={project.id}
            img={project.img}
            title={project.title}
            description={t(`projects.${project.id}.projectDescription`)}
            framework={project.framework}
            onClick={() => window.open(project.url)}
            ownership={project.ownership}
          />
        ))}
      </div>
    </TransitionPage>
  );
}
