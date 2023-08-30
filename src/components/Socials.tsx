import yourData from "../data/portfolio.json";
import { Button } from './Button';

export const Socials = ({ className }: any) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} text={social.title} onClick={() => window.open(social.link)} />
      ))}
    </div>
  );
};

