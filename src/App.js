import './App.css';
import StationMasterDashboard from './components-station_master/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import DriverDashboard from './components-driver/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <DriverDashboard />
      </Router>
      
    </div>
  );
}

export default App;
