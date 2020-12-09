import './App.css';
import Landing from './components/Landing'
import MacroData from './components/MacroData'
import Climate from './components/Climate'
import Energy from './components/Energy'
import Habits from './components/Habits'
import Footprint from './components/Footprint'
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  return (
    <div>
      <Router>
        <Route exact path="/"
        component={Landing} />
        <Route exact path="/data"
        component={MacroData} />
        <Route exact path="/data/climate"
        component={Climate} />
        <Route exact path="/data/energy"
        component={Energy} />
        <Route exact path="/habits"
        component={Habits} />
        <Route exact path="/footprint"
        component={Footprint} />
      </Router>
    </div>
  );
}

export default App;
