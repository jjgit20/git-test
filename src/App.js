import './App.css';
import DataTable from './components/DataTable';


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
    <DataTable rows={rows}></DataTable> 
  );
}

export default App;

