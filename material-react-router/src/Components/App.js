import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Writers from './Writers';

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

          <Route path="/" />
          <Route path="/writers" render={
            props=> <Writers {...props} writers={writers}/>
          }/>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
