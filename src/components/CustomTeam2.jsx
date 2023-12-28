import React from "react";
const CustomTeam2 = ({ teamArray = [['Aditya Balaji', 'Aviral Gaur', 'Ashu', 'Manasvi Kapoor', 'Sanya', 'Gautam Bajaj', 'Manav', 'Aakash', 'Saksham Chopra', 'Animesh', 'Tarun', 'Harshit Chauhan', 'Shaambhavee', 'Pushkar', 'Vansh'],
['Kartikay', 'Aman', 'Ayush Kumar', 'AyushMaan Bari', 'Priyanshi', 'Vashist', 'Mayukh Chakraborty', 'Kirti', 'Komal', 'Divye Bajaj', 'Shresht Sharma', 'Ayush', 'Omkar', 'Meenakshi Sinha'],
['Ayush Jha', 'Kritika Choudhary', 'Paridhi Gupta', 'Manasvi', 'Siddhart Goenka', 'Ananay Kaushik', 'Yashum Bajaj', 'Devanshi Sharma', 'Garima Dua', 'Pranav Kanwar', 'Vatsal Srivastava', 'Nimanyu Raj Agrawal', 'Siddhart Garg'],
["Siddharth Varshney", "Oishik Basu", "Shuarya Arya"]] }) => {
  const renderTeamList = (team, year) => {
    return team.map((member, index) => (
      <div key={index} className={`dynamic-div-${index} flex flex-col transition ease-in-out duration-300 hover:scale-110`}>
        <img className="w-[25rem] rounded-t-2xl" src='moon1.jpg' alt="Team Member" />
        <div className="bg-spaceCon-quartinary text-spaceCon-primary w-[25rem] font-bold font-spaceCon uppercase text-2xl py-3 rounded-b-2xl">
          {member}
        </div>
      </div>
    ));
  };

  return (
    <div className="text-spaceCon-quartinary text-center">
      <div className="fixed -z-50 object-fill w-[100%] overflow-hidden top-0 left-0">
        <img src="bg-img.jpg" alt="" className="h-[100vh] w-[100%]" />
      </div>
      <div className="absolute -z-40 h-[100vh] w-[100%] bg-black opacity-20 top-0 left-0"></div>

      <div className="bg-spaceCon-secondary my-12 mx-auto pt-2 pb-4 text-9xl font-spaceCon">OUR TEAM</div>

      <div className="container relative flex flex-col justify-center align-middle items-center w-[100%] m-auto">
        {[3, 2, 1].map((year, index) => (
          <div key={index}>
            <div className={`bg-spaceCon-primary w-[50%] my-12 mx-auto pt-2 pb-4 rounded-3xl text-6xl font-spaceCon`}>
              {`${year}rd Year`}
            </div>
            <div className={`list-${year} flex flex-wrap justify-center align-middle gap-8 gap-y-16 mx-auto w-[100%]`}>
              {renderTeamList(teamArray[index], year)}
            </div>
          </div>
        ))}
        <div className="box-border"></div>
      </div>
    </div>
  );
};

export default CustomTeam2;
