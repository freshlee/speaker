import Home from './page/home/index.js'
import Detail from './page/detail/index.js'
import Generate from './page/generate/index.js'
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
console.log(Detail)
export default class App extends React.Component {
      render() {
          return (
                <div>
                    <Router>
                        <Switch>
                            <Route exact={true} component={Home} path="/" />
                            <Route component={Detail} path="/detail" />
                            <Route component={Generate} path='/generate' />
                        </Switch>
                    </Router>
                </div>
          )
      }
  }