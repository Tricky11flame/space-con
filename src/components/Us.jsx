// TeamComponent.js

import React from 'react';

const Us = () => {
  return (
    <div className=" z-20 flex justify-center items-center h-screen relative p-4 pt-24 ">
      {/* Container */}
      <div className="w-4/5 bg-spaceCon-secondary p-8 rounded-lg flex   bg-opacity-30 backdrop-blur-lg text-white">
        {/* Image */}
        <div className="flex-shrink-0 pl-2">
          <img
            src="../../nk.png" // Make sure to have nk.jpg in your public directory
            alt="Team Image"
            className="h-80 object-cover "
          />
        </div>

        {/* Text */}
        <div className="ml-8">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
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
