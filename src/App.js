import './App.css';
import Dashboard from './components-station_master/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard />
      </Router>
      
    </div>
  );
}

export default App;
