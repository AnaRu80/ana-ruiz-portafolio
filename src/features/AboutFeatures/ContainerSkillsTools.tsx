import { Text } from '../../components';

export default function ContainerSkillsTools({ title, children }: any) {
  return <div className='border rounded-xl  shadow-lg px-3 py-3 dark:shadow-gray-800 mt-4'>
    <Text
      size='xl'
      isTitle
      fontWeight='bold'
      text={title}
      classNameText='text-center mb-3'
    />
    {children}
  </div>
}
