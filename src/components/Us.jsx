// TeamComponent.js

import React from 'react';

const Us = () => {
  return (
    <div className="flex justify-center items-center relative top-20">
      {/* Container */}
      <div className=" bg-spaceCon-secondary/30 rounded-lg backdrop-blur-lg text-white mx-4 my-20 px-4 py-8 md:flex md:mx-10 md:px-12 lg:mx-24">
        {/* Image */}
        <div className="flex justify-center md:flex-none">
          <img
            src="team/about-team.png"
            alt="Team Image"
            className="rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="ml-0 md:ml-8">
          <h2 className="text-3xl font-medium mb-4 font-lemonmilk">OUR TEAM</h2>
          <p>
          As the academic year draws to a close, it brings immense joy to reflect upon the remarkable achievements of the Astronomy Club. Your dedication to exploring the vast cosmos has not only enriched the scientific community on campus but has also ignited a passion for celestial wonders among students.
          The series of engaging events, insightful workshops, and captivating stargazing sessions organized by the club have created a unique space for students to delve into the mysteries of the universe. The enthusiasm and commitment demonstrated by each member have undoubtedly propelled the club to new heights, fostering a sense of curiosity and awe-inspiring wonder within our academic community.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Us;
