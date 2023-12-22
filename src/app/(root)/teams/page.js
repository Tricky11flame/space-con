// pages/teams/index.js
// "use client"

import TeamSlider from '../../../components/TeamSlider';
// import RootLayout from '../layout.js';
// import { useRouter } from 'next/navigation';

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

const Page = () => {
//     const [selectedTeam, setSelectedTeam] = useState(null);
//     const router = useRouter();
  
//     const handleTeamClick = (team) => {
//       setSelectedTeam(team);
//       router.push(`/teams/${team.slug}`);
//     };  

  return (
      <div className="mx-4 my-8">
        <h2 className="text-2xl font-bold mb-4">Teams</h2>
        {/* <TeamSlider teams={teams} handleTeamClick={handleTeamClick} selectedTeam={selectedTeam} /> */}
      </div>
  );
};

export default Page;


//

// pages/teams/index.js