type TypeText = 'default' | 'neutral' | 'yellow' | 'default-inverse';
interface TextProps {
  size?: string;
  color?: string;
  fontWeight?: string;
  classNameText?: string;
  text?: string | number;
  type?: TypeText;
  children?: React.ReactNode;
  isTitle?: boolean;
  isCaption?: boolean;
  isSmall?: boolean;
  isCentered?: boolean;
}
export const Text = ({
  size,
  fontWeight = 'normal',
  classNameText,
  text,
  type = 'default',
  children,
  isTitle,
  isCaption,
  isSmall,
  isCentered
}: TextProps) => {
  const defaultText = isCentered ? 'align-center self-center' : "";
  const titleSize = isTitle
    ? 'text-3xl md:text-4xl lg:text-5xl'
    : isCaption ? 'text-base md:text-lg lg:text-xl' :
      isSmall ? "text-xs md:text-sm lg:text-base " :
        'text-lg md:text-xl lg:text-2xl';
  const textSize = size ? `text-${size}` : '';
  const textType =
    type === 'default'
      ? `text-black dark:text-white`
      :
      type === 'yellow' ?
        `text-yellow-400 dark:text-yellow-400` :
        `text-neutral-400 dark:text-neutral-400`;

  const textFontWeight = fontWeight ? `font-${fontWeight}` : '';
  const classNameStyle = classNameText ? classNameText : '';

  const combinedClasses = `${defaultText} ${textSize} ${textFontWeight} ${textType} ${titleSize} ${classNameStyle}`;

  return <p className={combinedClasses}>{children || text}</p>;
};
