import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function jsonTable(props) {
    
    return (
  
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">사업명</TableCell>
            <TableCell align="left">항목명</TableCell>
            <TableCell align="left">예산안</TableCell>
            <TableCell align="left">결산안</TableCell>
            <TableCell align="left">집행율</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {props.json.map(item => (
          <Fragment>
              <TableRow>
                  <TableCell rowSpan={item.항목.length + 1}>
                  {item.사업명}
                  </TableCell>
              </TableRow>
              {item.항목.map(subItem => (                                  
                      <TableRow>
                          <TableCell>{Object.keys(subItem)[0]}</TableCell>
                          <TableCell>￦{subItem[Object.keys(subItem)[0]].예산안}</TableCell>
                          <TableCell>￦{subItem[Object.keys(subItem)[0]].결산안}</TableCell>
                          <TableCell>{subItem[Object.keys(subItem)[0]].집행률}%</TableCell>
                      </TableRow>
              ))}
          </Fragment>
      ))}
  </TableBody>
      </Table>
    </TableContainer>
  );
  }