import './App.css';
import Landing from './components/Landing'
import MacroData from './components/MacroData'
import Climate from './components/Climate'
import Energy from './components/Energy'
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
      </Router>
    </div>
  );
}

export default App;
