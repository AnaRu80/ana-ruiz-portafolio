import { Text } from '.';
import { projectDataInterface } from '../data/interfaces';

export const Card = ({
  img,
  title,
  description,
  framework,
  onClick,
  ownership,
}: projectDataInterface) => {
  return (
    <div
      className='rounded-lg p-2 laptop:p-4 mx-5 border flex flex-col'
      onClick={onClick}
    >
      <div className='rounded-lg overflow-hidden hover:scale-105 transition-all ease-out duration-300 '>
        <img alt={title} src={img} loading='lazy'></img>
      </div>

      <div className='flex flex-col text-justify flex-grow p-2 '>
        <Text
          type='yellow'
          isSmall
          text={framework.toUpperCase()}
          classNameText='text-yellow-500 tracking-tighter'
        />
        <Text fontWeight='medium' text={title} />
        <Text isCaption type='neutral' fontWeight='light' text={description} />
        <Text
          isSmall
          type='neutral'
          fontWeight='light'
          text={ownership}
          classNameText='mt-auto text-neutral-300 dark:text-neutral-600'
        />
      </div>
    </div>
  );
};
