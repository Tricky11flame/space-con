// components/TeamSlider.js

const TeamSlider = ({ teams, handleTeamClick, selectedTeam }) => {
    return (
      <div className="flex space-x-4 overflow-x-auto">
        {teams.map((team) => (
          <div
            key={team.slug}
            onClick={() => handleTeamClick(team)}
            className={`cursor-pointer border p-4 rounded-lg ${
              selectedTeam === team ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            {/* ... other content */}
          </div>
        ))}
      </div>
    );
  };
  
  export default TeamSlider;
  