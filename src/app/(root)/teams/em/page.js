// teams/[dept].js
// import CustomTeam from '@/components/CustomTeam';
import { TEAM_DB } from '../../data.js';
import CustomTeam2 from '@/components/CustomTeam2.jsx';

const Page = () => {
  const teamInUse = TEAM_DB['tech']
  return (
    <div>
      <CustomTeam2 teamArray={teamInUse}/>
    </div>
  );
};

export default Page;
