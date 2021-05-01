import React from 'react';
import useAppData from '../hooks/useAppData';

import './TeamList.css'

function TeamList() {
  const { state } = useAppData();

  const names = state.teams.map((team, key) => {
    return (
      <div className="team">{ team.fullName }</div>
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
