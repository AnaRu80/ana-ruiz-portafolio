import { socialNetworkData } from '../../data';
import { Button } from '../../components/Button';

export const Socials = ({ className }: any) => {
  return (
    <div
      className={`${className} flex mx-auto flex-row justify-center mt-5 laptop:mt-5`}
    >
      {socialNetworkData.map((social, index) => (
        <Button
          key={index}
          text={social.title}
          onClick={() => window.open(social.link)}
        />
      ))}
    </div>
  );
};
