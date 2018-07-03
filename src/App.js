import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Error from './pages/error/index';
import Home from './pages/home/index';
import Info from './pages/info/index';

class App extends Component {

  render() {
    return (
      <div className="page">
        <Switch>
          <Route exact path="/error" component={Error} />
          <Route exact path="/" component={Home} />
          <Route exact path="/info/:city" component={Info} />
          <Route path="*" component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;
