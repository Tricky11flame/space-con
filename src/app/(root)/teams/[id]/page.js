
import FirstPage from '@/components/FirstPage.jsx';
import { TEAM_DB } from '../../data.js';
import CustomTeam2 from '@/components/CustomTeam2.jsx';
import Navbar2 from '@/components/Navbar2.jsx';

const Page = ({params}) => {
  const teamInUse = TEAM_DB[params.id]
  const team=(k)=>{
    if(k=="tech"){k='TECH TEAM'}
    else if(k=="logi"){k='LOGISTICS TEAM'}
    else if(k=="content"){k='CONTENT TEAM'}
    else{k= 'TEAM NAKSHATRA'};
    return k;
  }
  return (
    <div>
      <Navbar2/>
      <CustomTeam2 teamArray={teamInUse} head={team(params.id)}/>
    </div>
  
  );
};

export default Page;
