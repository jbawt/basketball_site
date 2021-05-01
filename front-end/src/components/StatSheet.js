import React from 'react';
import useAppData from '../hooks/useAppData';
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import './StatSheet.css';

const useStyles = makeStyles({
  table: {
    background: 'lightgray',
    minWidth: 650,
    boxShadow: '0 5px 10px 4px rgba(79, 118, 134, 0.7)',
    overflow: 'scroll' 
  },
  header: {
    marginBottom: 30,
  }
});

function StatSheet() {

  function createData(gameId, home, homeScore, hWinLoss, away, awayScore, vWinLoss, date) {
    return { gameId, home, homeScore, hWinLoss, away, awayScore, vWinLoss, date };
  };

  const { selectedTeam } = useAppData();

  const info = [];

  for (let game of selectedTeam.games) {
    if (game.statusGame === "Finished") {
      let hWinOrLoss = '';
      let vWinOrLoss = '';
      if (game.vTeam.score.points < game.hTeam.score.points) {
        hWinOrLoss = 'W';
        vWinOrLoss = 'L';
      } else {
        hWinOrLoss = 'L';
        vWinOrLoss = 'W';
      }
      info.push(createData(game.gameId, game.hTeam.fullName, game.hTeam.score.points, hWinOrLoss, game.vTeam.fullName, game.vTeam.score.points, vWinOrLoss))
    } else {
      info.push(createData(game.gameId, game.hTeam.fullName, "TBD", "N/A", game.vTeam.fullName, "TBD", "N/A"))
    }
  }

  const rows = info.reverse();

  const classes = useStyles();

  return (
    <TableContainer className="table-container" component={Paper}>
      <h1 className={classes.header}>Team</h1>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Home</TableCell>
            <TableCell align="center">Score</TableCell>
            <TableCell align="center">Win/Loss</TableCell>
            <TableCell align="center">Away</TableCell>
            <TableCell align="center">Score</TableCell>
            <TableCell align="center">Win/Loss</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.gameId}>
              <TableCell align="center" component="th" scope="row">
                {row.home}
              </TableCell>
              <TableCell align="center">{row.homeScore}</TableCell>
              <TableCell align="center">{row.hWinLoss}</TableCell>
              <TableCell align="center">{row.away}</TableCell>
              <TableCell align="center">{row.awayScore}</TableCell>
              <TableCell align="center">{row.vWinLoss}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StatSheet
