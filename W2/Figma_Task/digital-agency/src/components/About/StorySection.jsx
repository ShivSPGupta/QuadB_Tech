import React from "react";
import StoryCard from "./StoryCard";

const StorySection = () => {
  const storyData = [
    {
      number: "01",
      title: "Design",
      description: "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression."
    },
    {
      number: "02",
      title: "Engineering",
      description: "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible."
    },
    {
      number: "03",
      title: "Project Management",
      description: "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget."
    },
    {
      number: "04",
      title: "Collaboration",
      description: "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations."
    },
    {
      number: "05",
      title: "Client-Centric Approach",
      description: "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey."
    },
    {
      number: "06",
      title: "Driving Success",
      description: "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world."
    }
  ];

  return (
    <section className="pt-20 w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)] max-md:max-w-full">
      <h2 className="px-12 w-full text-5xl font-semibold text-white max-md:px-5 max-md:max-w-full max-md:text-4xl">
        Our Story
      </h2>
      <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <hr className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

        <div className="flex flex-wrap items-start w-full max-md:max-w-full">
          <StoryCard
            number={storyData[0].number}
            title={storyData[0].title}
            description={storyData[0].description}
          />
          <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[452px]" />
          <StoryCard
            number={storyData[1].number}
            title={storyData[1].title}
            description={storyData[1].description}
          />
        </div>

        <hr className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

        <div className="flex flex-wrap items-start w-full max-md:max-w-full">
          <StoryCard
            number={storyData[2].number}
            title={storyData[2].title}
            description={storyData[2].description}
          />
          <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[428px]" />
          <StoryCard
            number={storyData[3].number}
            title={storyData[3].title}
            description={storyData[3].description}
          />
        </div>

        <hr className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

        <div className="flex flex-wrap items-start w-full max-md:max-w-full">
          <StoryCard
            number={storyData[4].number}
            title={storyData[4].title}
            description={storyData[4].description}
          />
          <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[452px]" />
          <StoryCard
            number={storyData[5].number}
            title={storyData[5].title}
            description={storyData[5].description}
          />
        </div>
      </div>
    </section>
  );
};

export default StorySection;