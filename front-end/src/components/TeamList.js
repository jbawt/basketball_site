import React from 'react';
import useAppData from '../hooks/useAppData';

import './TeamList.css'

function TeamList() {
  const { state, setSelectedTeam, selectedTeam } = useAppData();

  const selected = (teamID) => {
    setSelectedTeam({
      ...selectedTeam,
      teamId: teamID
    });
  }

  const names = state.teams.map((team, key) => {
    return (
      <div key={key} onClick={() => selected(team.teamId)} className="team">
        <p>{ team.fullName }</p>
        <img className="team-logo" src={team.logo} alt="logo" />
      </div>
    )
  })

  return (
    <div className="team-list-div">
      <div className="title">
        { state.msg }
      </div>
      <div className="team-list">
        { names }
      </div>
    </div>
  );
}

export default TeamList
