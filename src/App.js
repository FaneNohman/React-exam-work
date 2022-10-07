import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import UniList from './components/UniList';
import UniDetails from './components/UniDetails';
import UniForm from './components/UniForm';
import UniSearch from './components/UniSearch';
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <UniForm/>
        </nav>
        <Routes>
          <Route path='/' element={<UniList/>}/>
          <Route path='/name/:name' element={<UniDetails/>}/>
          <Route path='/search/:country' element={<UniSearch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;