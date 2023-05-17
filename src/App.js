import './App.css';
import JsonTable from './component/table.js';
import json from './test.json';


function App() {
  return (
    <div class="layout">
      <div class="logo">
        <img alt=""
      </div>
      <JsonTable input={json}></JsonTable> 
    </div>
    
  );

}

export default App;