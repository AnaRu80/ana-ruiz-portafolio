import WomanDevelop from "../assets/svg/woman.svg"
export function AboutPage() {
  return (
    //make two cols in tailwind when is larger than sm if it is mobile make 1
    <div className="flex flex-col sm:flex-row px-4 ">
      <div className="flex flex-col justify-center items-center sm:w-1/2">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="text-lg mt-5 text-justify ">
          I am a  a former electronic engineer who found her true passion in development. With over five years of experience, I've gone from crafting user interfaces in React to building more extensive applications using Node.js.<br /><br /> My journey also led me to master React Native, enabling me to create captivating mobile apps. Beyond the screen, you'll find me engrossed in series, exploring new places, or dancing salsa. Let's collaborate and turn ideas into reality!
        </p>
      </div>
      <div className="flex justify-center items-center sm:w-1/2 ">
        <img
          src={WomanDevelop}
          alt='Woman developing'
        />
      </div>
    </div>

  )
}
