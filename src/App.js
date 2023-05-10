import './App.css';
import jsonTable from './component/table';
import json from './test.json';


function App() {
  
  return (
    <jsonTable input={json}></jsonTable> 
  );

}

export default App;