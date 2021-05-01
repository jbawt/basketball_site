import { useState, useEffect } from 'react';
import axios from 'axios';


function useAppData() {
  
  const [state, setState] = useState({
    msg: "",
    teams: []
  });

  const [selectedTeam, setSelectedTeam] = useState({
    teamId: 2,
    games: []
  });
  
  const { teamId } = selectedTeam;

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((res) => {
        setState({
          ...state,
          msg: res.data
        });
      })
      .catch(err => console.log(err))

    axios.get('http://localhost:3000/teams')
      .then((res) => {
      const teams = res.data.api.teams.filter((team) => team.nbaFranchise === "1" && team.allStar !== "1")

      setState({
        ...state,
        teams: teams
      })
    })
    .catch(err => console.log(err))

    // currently grabs just atlanta games until team picking becomes dynamic.
    axios.get('http://localhost:3000/stats', { 
        params: {
          id: teamId 
        }
      })
      .then((res) => {
        const currentGames = res.data.api.games.filter((game) => game.seasonYear >= "2020");
        setSelectedTeam({
          ...selectedTeam,
          games: currentGames
        })
        // console.log(currentGames)
      })
      .catch(err => console.log(err))
      
  }, [teamId])

  return { state, selectedTeam, setSelectedTeam }
}

export default useAppData
