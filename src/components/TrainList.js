import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TrainList({ trains }) {
  const classes = useStyles();

  return (
    <div>
      <h2>All Trains</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="train table">
          <TableHead>
            <TableRow>
              <TableCell>Train Name</TableCell>
              <TableCell align="right">Departure Time</TableCell>
              <TableCell align="right">Delay</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Seat Availability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trains.map((train) => (
              <TableRow key={train.id}>
                <TableCell component="th" scope="row">
                  <Link to={`/train/${train.id}`}>{train.name}</Link>
                </TableCell>
                <TableCell align="right">{train.departureTime}</TableCell>
                <TableCell align="right">{train.delay}</TableCell>
                <TableCell align="right">{train.price}</TableCell>
                <TableCell align="right">
                  {train.seatAvailability ? "Available" : "Sold Out"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TrainList;