// pages/teams/index.js
// "use client"

import Link from 'next/link';
// import TeamSlider from '../../../components/TeamSlider';
// import RootLayout from '../layout.js';

// const teams = [
//   { name: 'Tech', slug: 'tech' },
//   { name: 'Core', slug: 'core' },
//   { name: 'Event Management', slug: 'event-management' },
//   { name: 'PR', slug: 'pr' },
//   { name: 'Sponsorship', slug: 'sponsorship' },
//   { name: 'Content', slug: 'content' },
//   { name: 'Logistics', slug: 'logistics' },
//   { name: 'Leads', slug: 'leads' },
// ];

//     const [selectedTeam, setSelectedTeam] = useState(null);


//     const handleTeamClick = (team) => {
  //       setSelectedTeam(team);
  //       router.push(`/teams/${team.slug}`);
  //     };  

import { TEAM_DB } from '../data';
import CustomTeam2 from '@/components/CustomTeam2';
import Navbar from '@/components/Navbar';
const Page = () => {
  return (
      <div className="mx-4 my-8">
        <Navbar/>
        <div>{TEAM_DB['tech']}</div>
      </div>

      
  );
};

export default Page;


//

// pages/teams/index.js