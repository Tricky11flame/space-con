// pages/teams/index.js
// "use client"

import Link from 'next/link';
import TeamSlider from '../../../components/TeamSlider';
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
const Page = () => {
  return (
      <div className="mx-4 my-8">
        <h2 className="text-2xl font-bold mb-4">Teams</h2>
        {/* <TeamSlider teams={teams} handleTeamClick={handleTeamClick} selectedTeam={selectedTeam} /> */}
        <Link href="/teams/[dept]" as="/teams/tech">
        Technology
      </Link>
      <Link href="/teams/[dept]" as="/teams/logi">
        Logistics
      </Link>

      <div>{TEAM_DB['tech']}</div>
      </div>
  );
};

export default Page;


//

// pages/teams/index.js