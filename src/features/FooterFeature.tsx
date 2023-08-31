import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { useTranslation, Trans } from 'react-i18next';

import { Text } from "../components"

export const FooterFeature = ({ }) => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-gradient-to-t dark:from-gray-600 from-gray-400 via-transparent to-transparent py-6 px-6">
        <div className="mt-10 flex flex-row justify-between items-center ">
          <Text size="6x" fontWeight='bold' classNameText='text-2xl'>
            <Trans>  {t('footer.footerTitle')} </Trans>
          </Text>

          <div className="flex">
            <AiOutlineGithub className='text-3xl' />
            <AiOutlineLinkedin className='text-3xl' />
          </div>

          <Text size="sm" fontWeight='bold'>
            <Trans>  {t('footer.footerContent')} </Trans>
          </Text>
        </div>
      </footer>

    </>
  );
};

