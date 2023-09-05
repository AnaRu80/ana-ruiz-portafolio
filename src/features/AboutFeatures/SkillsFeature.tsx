import { Text } from '../../components';
import { BiRadioCircleMarked } from 'react-icons/bi';
import { skillsData } from '../../data';
import { useTranslation } from 'react-i18next';
import { SkillDataInterface } from '../../data/interfaces';

import ContainerSkillsTools from './ContainerSkillsTools';
import Section from './AnimateSkills';

export function SkillsFeature() {
  const { t } = useTranslation();
  return (
    <ContainerSkillsTools title={t('skills.skillsTitle')}>
      {skillsData.map((skill: SkillDataInterface) => (
        <Section key={skill.id}  >
          <div className='flex ' key={skill.id}>
            <Text text={skill.skill} classNameText='mr-auto mb-1 md:mb-2 ' />
            {[...Array(skill.skillRate)].map((_, index) => (
              <BiRadioCircleMarked
                key={index}
                className=' text-3xl md:text-5xl'
              />
            ))}
            {[...Array(5 - skill.skillRate)].map((_, index) => (
              <BiRadioCircleMarked
                key={index}
                className='text-3xl md:text-5xl text-neutral-400'
              />
            ))}
          </div>
        </Section>
      ))}
    </ContainerSkillsTools>
  );
}
