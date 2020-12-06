import './App.css';
import Landing from './components/Landing'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <h1>Natural Data</h1>
      <Router>
        <Route exact path="/"
        component={Landing} />
      </Router>
    </div>
  );
}

export default App;
