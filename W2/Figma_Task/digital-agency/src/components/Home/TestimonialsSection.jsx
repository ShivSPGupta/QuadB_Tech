import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section id="work" className="w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)]">
      <div className="flex relative flex-col px-6 sm:px-12 md:px-24 lg:px-64 py-16 sm:py-20 md:py-24 w-full text-center min-h-[200px] sm:min-h-[240px] md:min-h-[304px]">
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/Home/TestimonialSection/Testimonials%20Background.png"
          alt="Testimonials Background"
          className="object-cover absolute inset-0 size-full"
        />
        <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          What our Clients say About us
        </h2>
        <p className="relative mt-2.5 text-base tracking-normal leading-6 text-neutral-200">
          At SquareUp, we take pride in delivering exceptional digital
          products and services that drive success for our clients. Here's
          what some of our satisfied clients have to say about their
          experience working with us
        </p>
      </div>
      <div className="w-full">
        <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
        <div className="flex flex-col md:flex-row w-full">
          <TestimonialCard
            quote="SquareUp has been Instrumental in Transforming our Online Presence."
            description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
            avatar="https://shivshankar1201.sirv.com/digital-agency/Home/TestimonialSection/John%20Smith.png"
            name="John Smith"
            role="CEO of Chic Boutique"
          />

          {/* Divider - horizontal on mobile, vertical on desktop */}
          <div className="h-px md:h-[420px] w-full md:w-0 border border-solid bg-neutral-800 border-neutral-800" />

          <TestimonialCard
            quote="Working with SquareUp was a breeze."
            description="They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend."
            avatar="https://shivshankar1201.sirv.com/digital-agency/Home/TestimonialSection/Sarah%20Johnson.png"
            name="Sarah Johnson"
            role="Founder of HungryBites."
          />
        </div>
        <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
        <div className="flex flex-col md:flex-row w-full">
          <TestimonialCard
            quote="SquareUp developed a comprehensive booking and reservation system for our event management company"
            description="Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences."
            avatar="https://shivshankar1201.sirv.com/digital-agency/Home/TestimonialSection/Mark%20Thompson.png"
            name="Mark Thompson"
            role="CEO of EventMasters"
          />

          {/* Divider - horizontal on mobile, vertical on desktop */}
          <div className="h-px md:h-[420px] w-full md:w-0 border border-solid bg-neutral-800 border-neutral-800" />

          <TestimonialCard
            quote="ProTech Solutions turned to SquareUp to automate our workflow"
            description="They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner."
            avatar="https://shivshankar1201.sirv.com/digital-agency/Home/TestimonialSection/Laura%20Adams.png"
            name="Laura Adams"
            role="COO of ProTech Solutions."
          />
        </div>
        <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
        <div className="flex flex-col md:flex-row w-full">
          <TestimonialCard
            quote="SquareUp designed and developed a captivating web portal for showcasing our real estate listings."
            description="The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched."
            avatar="https://shivshankar1201.sirv.com/digital-agency/Home/TestimonialSection/Micheal%20Anderson.png"
            name="Michael Anderson"
            role="Founder of Dream Homes Realty."
          />

          {/* Divider - horizontal on mobile, vertical on desktop */}
          <div className="h-px md:h-[420px] w-full md:w-0 border border-solid bg-neutral-800 border-neutral-800" />

          <TestimonialCard
            quote="FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans."
            description="SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs."
            avatar="https://shivshankar1201.sirv.com/digital-agency/Home/TestimonialSection/Emily%20Turner.png"
            name="Emily Turner"
            role="CEO of FitLife Tracker"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;