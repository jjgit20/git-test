import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import styled from "styled-components";
import {StyledEngineProvider} from "@mui/styled-engine";
import './App.css';

const MyTable = styled(Table)`
  width:500px;
  
`

function App() {
  function createData(
    purpose,
    name,
    plan,
    result,
    percentage,
  ) {
    return { purpose, name, plan, result, percentage };
  }
  
  const rows = [
    createData("행사준비","교통비",200,100,50),
    createData("행사준비","식비",200,100,50),
    createData("행사준비","섭외비",200,100,50),
    createData("회의비","교통비",200,100,50),
    createData("회의비","식비",200,100,50),
  ];

  return (
    <StyledEngineProvider injectFirst>
      <MyTable>
        <TableHead>
          <TableRow>
            <TableCell>사용 목적</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>예산안</TableCell>
            <TableCell>결산안</TableCell>
            <TableCell>집행률</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell>{row.purpose}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.plan}</TableCell>
              <TableCell>{row.result}</TableCell>
              <TableCell>{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MyTable>
    </StyledEngineProvider>  
  );
}

export default App;

