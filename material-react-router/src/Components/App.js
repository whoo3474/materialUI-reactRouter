import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Writers from './Writers';
import {NotFound} from './Errors'

class App extends Component {
  state = {
    writers : []
  }
  async componentDidMount () {
    const writers = await(await fetch('http://localhost:3004/writers')).json()

    this.setState({writers})
  }
  render() {
    const {writers} = this.state;
    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/writers">
                writers
              </Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" render={() => <div>Home</div>}/>
            <Route path="/writers" render={
              props=> <Writers {...props} writers={writers}/>
            }/>
            <Route component={NotFound}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
