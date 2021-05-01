import React from 'react';
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
    maxWidth: 1000,
    height: 600,
    minWidth: 650,
    marginLeft: 310,
    marginBottom: 100,
    boxShadow: '0 5px 10px 4px rgba(79, 118, 134, 0.7)', 
  },
  header: {
    marginBottom: 30,
  }
});

function createData(game, team, teamScore, opponent, opponentScore) {
  return { game, team, teamScore, opponent, opponentScore };
};

const rows = [
  createData(1, 'Raptors', 21, 'Celtics', 10),
  createData(2, 'Raptors', 121, 'Jazz', 100),
  createData(3, 'Raptors', 201, 'Heat', 101),
  createData(4, 'Raptors', 150, 'Lakers', 123),
  createData(5, 'Raptors', 98, 'Clippers', 80),
  createData(6, 'Raptors', 300, 'Grizzlies', 90),
  createData(7, 'Raptors', 114, 'Suns', 113),
  createData(8, 'Raptors', 118, 'Hornets', 100),
  createData(9, 'Raptors', 78, 'Bulls', 60),
  createData(10, 'Raptors', 90, 'Rockets', 80),
  createData(11, 'Raptors', 100, 'Mavericks', 10),
]

function StatSheet() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <h1 className={classes.header}>Team</h1>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Game</TableCell>
            <TableCell align="center">Team</TableCell>
            <TableCell align="center">Team Score</TableCell>
            <TableCell align="center">Opponent</TableCell>
            <TableCell align="center">Opponent Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.game}>
              <TableCell component="th" scope="row">
                {row.game}
              </TableCell>
              <TableCell align="center">{row.team}</TableCell>
              <TableCell align="center">{row.teamScore}</TableCell>
              <TableCell align="center">{row.opponent}</TableCell>
              <TableCell align="center">{row.opponentScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StatSheet
