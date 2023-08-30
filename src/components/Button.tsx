interface ButtonProps {
  type?: 'default' | 'primary';
  onClick?: () => void;
  text: string;
}

export const Button = ({ type = 'default', onClick, text }: ButtonProps) => {
  let buttonClasses = 'rounded-full  w-max  bg-gradient-to-r from-yellow-300 via-yellow-300 to-yellow-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 ';

  if (type === 'default') {
    buttonClasses += 'text-black ';
  } else if (type === 'primary') {
    buttonClasses += 'text-white  from-gray-700 via-gray-700 to-gray-900 focus:ring-gray-700 dark:text-black dark:from-gray-50 dark:via-gray-100 dark:to-gray-400  dark:focus:ring-gray-400 ';
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};
