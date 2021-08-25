import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import TimeAttackPage from './components/TimeAttackPage';


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/ra-router-menu/" exact component={HomePage} />
          <Route path="/ra-router-menu/drift" component={DriftPage} />
          <Route path="/ra-router-menu/timeattack" component={TimeAttackPage} />
          <Route path="/ra-router-menu/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}