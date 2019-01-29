import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Writers from './Writers';
import {NotFound} from './Errors'
import Layout from './Layout';

class App extends Component {
  state = {
    writers : []
  }
  async componentDidMount () {
    const writers = await(await fetch('http://localhost:3004/writers?_embed=texts')).json()

    this.setState({writers})
  }
  render() {
    const {writers} = this.state;
    return (
      <BrowserRouter>
          <Layout writers={writers}>
            <Switch>
              <Route exact path="/" render={() =>
                <div>
                  {`이 사이트는 material-ui와 react-router을 이용하여 만든 사이트입니다.
                  json-server 로 json 파일을 서버에 올리고, fetch로 받아서 값을 뿌려줍니다.
                  npm start후 json-server --watch store.json --port 3004로
                  3004포트에 json서버를 열어주면 됩니다.
                  `}
                </div>
            }/>
              <Route path="/writers" render={
                props=> <Writers {...props} writers={writers}/>
              }/>
              <Route component={NotFound}/>
            </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
