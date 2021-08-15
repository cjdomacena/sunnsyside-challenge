
import './App.css';
import Home from  './Pages/Home';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom' 
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
