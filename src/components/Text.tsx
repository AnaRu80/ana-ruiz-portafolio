
type TypeText = "default" | "neutral" | "default-inverse";
interface TextProps {
  size?: string;
  color?: string;
  fontWeight?: string;
  classNameText?: string;
  text?: string;
  type?: TypeText;
}
export const Text = ({ size, fontWeight = "normal", classNameText, text, type = "default" }: TextProps) => {
  const defaultText = "align-center self-center"
  const textSize = size ? `text-${size}` : '';
  const textType = type === "default" ? `text-black dark:text-white` :
    `text-neutral-400 dark:text-neutral-400`;
  const textFontWeight = fontWeight ? `font-${fontWeight}` : '';
  const classNameStyle = classNameText ? classNameText : '';

  const combinedClasses = `${defaultText} ${textSize} ${textFontWeight} ${textType} ${classNameStyle}`;
  return <p className={combinedClasses}>{text}</p>;
};

