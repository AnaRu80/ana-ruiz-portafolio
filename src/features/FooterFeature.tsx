import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { useTranslation, Trans } from 'react-i18next';

import { Text } from "../components"
import { NavLink } from 'react-router-dom';

export const FooterFeature = ({ }) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-t dark:from-gray-600 from-gray-400 via-transparent to-transparent py-6 px-6">
      <div className="mt-10 flex flex-row justify-between items-center ">
        <Text size="6x" fontWeight='bold' classNameText='text-2xl'>
          <Trans>  {t('footer.footerTitle')} </Trans>
        </Text>

        <div className="flex">
          <NavLink target="_blank" to={"https://github.com/AnaRu80"}>
            <AiOutlineGithub className='text-3xl' />
          </NavLink>
          <NavLink target="_blank" to={"https://www.linkedin.com/in/anaruiz93/"}>

            <AiOutlineLinkedin className='text-3xl' />
          </NavLink>
        </div>

        <Text isSmall fontWeight='light'>
          <Trans>  {t('footer.footerContent')} </Trans>
        </Text>
      </div>
    </footer>

  );
};

