import WomanDevelop from "../assets/svg/woman-coding-standing.svg"
import { useTranslation, Trans } from 'react-i18next';
import { Text } from "../components"
export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row px-4 ">
      <div className="flex flex-col justify-center items-center sm:w-1/2">
        <Text size='3xl' fontWeight='bold' text={t('aboutMeTitle')} />
        <Text size='lg' classNameText='mt-5 text-justify' >
          <Trans>  {t('aboutMeContent')} </Trans>
        </Text>
      </div>
      <div className="flex justify-center items-center sm:w-1/2">
        <img
          src={WomanDevelop}
          alt='Woman developing'
        />
      </div>
    </div>

  )
}
