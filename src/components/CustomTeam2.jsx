import React from "react";
import Navbar from "./Navbar";
const CustomTeam2 = ({ teamArray = [['Aditya Balaji', 'Aviral Gaur', 'Ashu', 'Manasvi Kapoor', 'Sanya', 'Gautam Bajaj', 'Manav', 'Aakash', 'Saksham Chopra', 'Animesh', 'Tarun', 'Harshit Chauhan', 'Shaambhavee', 'Pushkar', 'Vansh'],
['Kartikay', 'Aman', 'Ayush Kumar', 'AyushMaan Bari', 'Priyanshi', 'Vashist', 'Mayukh Chakraborty', 'Kirti', 'Komal', 'Divye Bajaj', 'Shresht Sharma', 'Ayush', 'Omkar', 'Meenakshi Sinha'],
['Ayush Jha', 'Kritika Choudhary', 'Paridhi Gupta', 'Manasvi', 'Siddhart Goenka', 'Ananay Kaushik', 'Yashum Bajaj', 'Devanshi Sharma', 'Garima Dua', 'Pranav Kanwar', 'Vatsal Srivastava', 'Nimanyu Raj Agrawal', 'Siddhart Garg'],
["Siddharth Varshney", "Oishik Basu", "Shuarya Arya"]],head="OUR TEAM"}) => {
  const renderTeamList = (team) => {
    return team.map((member, index) => (
      <div key={index} className={`dynamic-div-${index} flex flex-col transition ease-in-out duration-300 hover:scale-110`}>
        <img className="w-[25rem] rounded-t-2xl" src="../../team/tech.png" alt="Team Member" />
        <div className="bg-spaceCon-quartinary text-spaceCon-primary w-[25rem] font-bold font-spaceCon uppercase text-2xl py-3 rounded-b-2xl">
          {member}
        </div>
      </div>
    ));
  };

  return (
    <div className="text-spaceCon-quartinary text-center">
      <div className="fixed -z-50 object-fill w-[100%] overflow-hidden top-0 left-0">
        {/* there is an issue while i use the rouute in a dunamic page it uses the path relative tothe dynamic page but when used in regualr
        page the path is seen relative to the components */}
        <img src="../../../bg-img.jpg" alt="content" className="h-[100vh] w-[100%]" />
      </div>
      <div className="absolute -z-40 h-[100vh] w-[100%] bg-black opacity-20 top-0 left-0"></div>

      <div className="bg-spaceCon-secondary mx-auto pt-2 pb-4 text-5xl font-spaceCon rounded-b-xl bg-opacity-20 backdrop-blur-lg bg-clip-padding backdrop-filter">{head}</div>

      <div className="container relative flex flex-col justify-center align-middle items-center w-[100%] m-auto">
        {[3, 2, 1].map((year, index) => (
          <div key={index}>
            <div>{index} lmao {year}</div>
            <div className={`bg-spaceCon-primary w-[50%] my-12 mx-auto pt-2 pb-4 rounded-3xl text-6xl font-spaceCon`}>
              {`${year}rd Year`}
            </div>
            <div className={`list-${year} flex flex-wrap justify-center align-middle gap-8 gap-y-16 mx-auto w-[100%]`}>
              {renderTeamList(teamArray[index])}
            </div>
          </div>
        ))}
        <div className="box-border"></div>
      </div>
    </div>
  );
};

export default CustomTeam2;