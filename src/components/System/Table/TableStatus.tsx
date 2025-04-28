import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: readonly Column[] = [
  { id: 'status', label: 'Status', minWidth: 170 },
  { id: 'sous_status', label: 'Sous Status', minWidth: 100 },
  { id: 'projet', label: 'Projet', minWidth: 170, align: 'right' },
  { id: 'equipe', label: 'Equipe', minWidth: 170, align: 'right' },
  { id: 'compte', label: 'Compte', minWidth: 170, align: 'right' },
  { id: 'duree', label: 'Durée', minWidth: 170, align: 'right' },
];

interface Data {
  status: string;
  sous_status: string;
  projet: string;
  equipe: string;
  compte: string;
  duree: number;
}

function createData(
  status: string,
  sous_status: string,
  projet: string,
  equipe: string,
  compte: string,
  duree: number
): Data {
  return { status, sous_status, projet, equipe, compte, duree };
}

const initialRows = [
<<<<<<< HEAD
  createData("Attente d'affectation", 'IN', '1324171354', '3287263', 'INDE', 0),
=======
  createData("Attente d'affectation", 'IN', 'Mariner', 'Marven', 'Iron Man', 0),
>>>>>>> ee0de59 (update)
];

export default function TableStatus({
  agentStatePersistant,
  submitStatus,
}: {
  agentStatePersistant: string;
  submitStatus: boolean;
}) {
  const [rows, setRows] = React.useState(initialRows);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRows((prevRows) =>
        prevRows.map((row) => ({
          ...row,
          duree: row.duree + 1,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function capitalize(str:string) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

  React.useEffect(() => {
    if(submitStatus){
      setRows((prevRows) =>
        prevRows.map((row) => ({
          ...row,
          status: (agentStatePersistant?.replace('_',' ').split(' ')?.[0] || '')?.toLocaleUpperCase(),
          sous_status: capitalize(agentStatePersistant?.replace('_',' ')),
          duree: 0, 
        }))
      );
    }
    if(agentStatePersistant?.length === 0){
      setRows((prevRows) =>
        prevRows.map((row) => ({
          ...row,
          status: "Attente d'affectation",
          sous_status: "Attente d'affectation",
          duree: 0, 
        }))
      );
    }
  }, [agentStatePersistant,submitStatus]);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.projet}>
                {columns.map((column) => {
                  const value = row[column.id as keyof Data];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'duree'
                        ? `${Math.floor(value as number / 60)
                            .toString()
                            .padStart(2, '0')}:${((value as number) % 60)
                            .toString()
                            .padStart(2, '0')}`
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
