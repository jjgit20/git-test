import './App.css';
import DataTable from './components/DataTable';
import jsondata from './testJson.json';

function App() {

  return (
    <DataTable jsondata={jsondata}></DataTable> 
  );
}

export default App;

