import { Text } from '../../components';
import { toolsData } from '../../data/toolsData';
import { useTranslation, } from 'react-i18next';
import { toolsDataInterface } from '../../data/interfaces';
import ContainerSkillsTools from './ContainerSkillsTools';

export function ToolsFeature() {
  const { t } = useTranslation();

  return (
    <ContainerSkillsTools title={t('skills.toolsTitle')}>
      <div className='flex flex-wrap justify-center '>
        {toolsData.map((tool: toolsDataInterface) => (
          <div className='flex items-center px-2 py-2' key={tool.id}>
            <Text text={tool.name} classNameText='mr-1' />
            {tool.icon}
          </div>
        ))}
      </div>
    </ContainerSkillsTools>
  )
}
