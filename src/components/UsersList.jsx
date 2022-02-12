import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function UsersList({users}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
