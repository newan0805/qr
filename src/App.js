import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './components/Home'
import QRgen from './components/QR_Generator'
import QRscan from './components/QR_Scanner'

function App() {
  return (
    <div className="App">
      <div className="App-header">
      
        <Router>
          <div>

            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/qr_generator">
                <QRgen/>
              </Route>
              <Route path="/qr_scanner">
                <QRscan/>
              </Route>
            </Switch>

          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
