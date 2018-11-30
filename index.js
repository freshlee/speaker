import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Row, Col, Button } from 'antd';
import Home from './page/home/index.js'
import Detail from './page/detail/index.js'
import app from './App.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div id="global">
      <div className="content-wrap">
        <Router>
          <div>
            <Switch>
              <Route component={app} path="/" />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
