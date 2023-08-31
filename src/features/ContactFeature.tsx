import WomanDevelop from "../assets/svg/woman.svg"
import { useTranslation, Trans } from 'react-i18next';
import { Socials, Text } from "../components"
export function ContactFeature() {
  const { t } = useTranslation();

  return (
    <div className=" px-4 text-center ">
      <Text size='3xl' isTitle fontWeight='bold' text={t('contact.contactTitle')} />
      <Text size='lg' classNameText='mt-5 ' >
        <Trans>  {t('contact.contactContent')} </Trans>
      </Text>
      <Socials />


    </div>

  )
}
