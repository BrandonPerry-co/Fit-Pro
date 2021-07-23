import './App.css';
import Login from './components/Login';

const isRegistered = false;


function App() {
  return (
    <div className="App">
      <h1>Hello Fit-pro</h1>
      <Login isRegistered={isRegistered}/>
    </div>
  );
}

export default App;
