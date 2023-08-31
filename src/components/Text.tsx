type TypeText = 'default' | 'neutral' | 'default-inverse';
interface TextProps {
  size?: string;
  color?: string;
  fontWeight?: string;
  classNameText?: string;
  text?: string | number;
  type?: TypeText;
  children?: React.ReactNode;
  isTitle?: boolean;
}
export const Text = ({
  size,
  fontWeight = 'normal',
  classNameText,
  text,
  type = 'default',
  children,
  isTitle,
}: TextProps) => {
  const defaultText = 'align-center self-center';
  const isTitleSize = isTitle
    ? 'text-3xl md:text-4xl lg:text-5xl'
    : 'md:text-xl lg:text-2xl';
  const textSize = size ? `text-${size}` : '';
  const textType =
    type === 'default'
      ? `text-black dark:text-white`
      : `text-neutral-400 dark:text-neutral-400`;
  const textFontWeight = fontWeight ? `font-${fontWeight}` : '';
  const classNameStyle = classNameText ? classNameText : '';

  const combinedClasses = `${defaultText} ${textSize} ${textFontWeight} ${textType} ${isTitleSize} ${classNameStyle}`;

  return <p className={combinedClasses}>{children || text}</p>;
};
