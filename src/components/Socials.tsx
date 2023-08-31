import yourData from "../data/portfolio.json";
import { Button } from './Button';

export const Socials = ({ className }: any) => {
  return (
    <div className={`${className} flex mx-auto flex-row justify-center mt-5 laptop:mt-5`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} text={social.title} onClick={() => window.open(social.link)} />
      ))}
    </div>
  );
};

