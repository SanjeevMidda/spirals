import './index.css';
import Spiral from './component/Spiral';

function App() {
  return (
    <div className="App">

      <h3>SPIRALS</h3>
     <Spiral color="blue" animation="move 1s linear infinite"/>
     <Spiral color="red" animation="move 2s linear infinite alternate"/>
     <Spiral color="orange" animation="move 3s linear infinite"/>
     <Spiral color="green" animation="move 4s linear infinite alternate"/>
     <Spiral color="purple" animation="move 5s linear infinite"/>
     <Spiral color="pink" animation="move 6s linear infinite"/>
    </div>
  );
}

export default App;
