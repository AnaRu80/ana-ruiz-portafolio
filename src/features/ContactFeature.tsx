import WomanDevelop from "../assets/svg/woman.svg"
import { useTranslation, Trans } from 'react-i18next';
import { Socials, Text } from "../components"
export function ContactFeature() {
  const { t } = useTranslation();

  return (
    <div className=" px-4 ">
      <Text size='3xl' fontWeight='bold' text={t('contact.contactTitle')} />
      <Text size='lg' classNameText='mt-5 text-justify' >
        <Trans>  {t('contact.contactContent')} </Trans>
      </Text>
      <Socials className="mt-5 laptop:mt-5" />


    </div>

  )
}
