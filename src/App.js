import './App.css';
import DataTable from './components/DataTable';
import jsondata from './testJson.json';

function App() {

  return (
      <div class="layout">
        <div class="logo">
          <img alt="logoimage" src='logo.png' style={{margin:10}}/>
        </div>
        <div class="container">
          <div class="menu">메뉴</div>
          <div class="container2">
            <div class="title">KAIST 학부총학생회 23년도 상반기 예결산안</div>
            <DataTable jsondata={jsondata}></DataTable> 
          </div>
        </div>
      </div>

  );
}

export default App;

