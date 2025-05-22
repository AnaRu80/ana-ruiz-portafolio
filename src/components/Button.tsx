interface ButtonProps {
  type?: 'default' | 'primary' | 'tertiary';
  onClick?: () => void;
  text: string;
}

export const Button = ({ type = 'default', onClick, text }: ButtonProps) => {
  let baseClasses =
    'w-max rounded-md hover:scale-105 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-transform';

  let buttonClasses = '';
  switch (type) {
    case 'primary':
      buttonClasses = 'bg-black text-yellow-300 focus:ring-yellow-300';
      break;
    case 'tertiary':
      buttonClasses = 'bg-[#F24E1E] text-white focus:ring-pink-300';
      break;
    default:
      buttonClasses =
        'bg-gradient-to-r from-yellow-300 via-yellow-300 to-yellow-400 text-black focus:ring-yellow-300';
  }

  return (
    <button className={`${baseClasses} ${buttonClasses}`} onClick={onClick}>
      {text}
    </button>
  );
};