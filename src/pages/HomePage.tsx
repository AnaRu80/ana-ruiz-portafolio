import { Socials, Text } from '../components';
import { NavBar } from '../features/NavBarFeature/Navbar';
import data from "../data/portfolio.json";
import { Card } from '../components/Card';

export function HomePage() {
  return (
    <div className='h-full dark:bg-black ' >
      <div className="container p-4 mx-auto mb-10">
        <div >
          <div className="mt-5">
            <Text size='3xl' fontWeight='bold' text='Hello' />
            <Text size='2xl' fontWeight='bold' text="I'm Ana, and I bring ideas to life through development magic ✨" />
            <Socials className="mt-5 laptop:mt-5" />

          </div>
          <Text size='3xl' fontWeight='bold' text='Work' />


          {/* <Socials className="mt-2 laptop:mt-5" /> */}
        </div>
        {/* <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        /> */}
        {/* <div className="laptop:mt-20 mt-10">
            <div className="mt-5">
              <h1
                
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h1>
            </div>
  
            <Socials className="mt-2 laptop:mt-5" />
          </div>
          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
            <h1 className="text-2xl text-bold">Work.</h1>
  
            <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
              {data.projects.map((project) => (
                <WorkCard
                  key={project.id}
                  img={project.imageSrc}
                  name={project.title}
                  description={project.description}
                  onClick={() => window.open(project.url)}
                />
              ))}
            </div>
          </div>
  
          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
            <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          {/* This button should not go into production */}


        {/* <Footer /> */}
      </div>
    </div>
  )
}
