import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow, TableContainer} from '@mui/material';
import styled from "styled-components";
import {StyledEngineProvider} from "@mui/styled-engine";


const MyTableHead = styled(TableHead)`
  background-color:rgba(232, 241, 255, 1);
`


function DataTable(props){
      
    return(
        <StyledEngineProvider injectFirst>
            <TableContainer>
                <Table>
                <MyTableHead>
                    <TableRow>
                    <TableCell >사용 목적</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>예산안</TableCell>
                    <TableCell>결산안</TableCell>
                    <TableCell>집행률</TableCell>
                    </TableRow>
                </MyTableHead>
                <TableBody>
                    {props.rows.map((row) => (
                    <TableRow>
                        <TableCell>{row.purpose}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.plan}</TableCell>
                        <TableCell>{row.result}</TableCell>
                        <TableCell>{row.percentage}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </StyledEngineProvider> 
    );
}

export default DataTable;