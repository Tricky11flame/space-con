// teams/[dept].js
import { useRouter } from 'next/router';
import CustomTeam from '@/components/CustomTeam';
import { TEAM_DB } from '../data';

const Page = () => {
  const router = useRouter();
  const dep = router.query.id;
  // const teamInUse = TEAM_DB[dept]


  return (
    <div>
      {dep}
    </div>
  );
};

export default Page;
