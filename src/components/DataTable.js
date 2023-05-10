import React, {Fragment} from "react";
import {Table, TableBody, TableCell, TableHead, TableRow, TableContainer} from '@mui/material';
import styled from "styled-components";
import {StyledEngineProvider} from "@mui/styled-engine";


const MyTableHead = styled(TableHead)`
  background-color:rgba(232, 241, 255, 1);
`


function DataTable(props){
    console.log(props.jsondata);

    return(
        <StyledEngineProvider injectFirst>
            <TableContainer>
                <Table>
                <MyTableHead>
                    <TableRow>
                        <TableCell >사업명</TableCell>
                        <TableCell>항목</TableCell>
                        <TableCell>예산안</TableCell>
                        <TableCell>결산안</TableCell>
                        <TableCell>집행률</TableCell>
                    </TableRow>
                </MyTableHead>
                <TableBody>
                    {props.jsondata.map(item => (
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
        </StyledEngineProvider> 
    );
}

export default DataTable;