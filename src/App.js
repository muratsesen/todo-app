import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const[count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">

        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
         
      </header>
    </div>
  );
}

export default App;
