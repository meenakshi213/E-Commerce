import logo from './logo.svg';
import './App.css';
import RoutesComp from './components/Routes';
import {HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <HashRouter>
    <RoutesComp />
    </HashRouter>
    </div>
  );
}

export default App;
