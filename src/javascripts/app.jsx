/*
  app.jsx
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory
} from 'react-router';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Page from './components/page.jsx';
import Post from './components/post.jsx';
import NotFound404 from './components/notfound404.jsx';
import scrollTop from './lib/ScrollTop.js';

import 'normalize/normalize.css';
import styles from './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.onCloseMenu = this.onCloseMenu.bind(this);
    this.onMenuChange = this.onMenuChange.bind(this);
  }
  onCloseMenu() {
    this.refs.header.setState({toggleMenu: false});
    scrollTop();
  }
  onMenuChange(state) {
    if (this.refs.menu) {
      this.refs.menu.setChangeState(state);
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <Header onMenuChange={this.onMenuChange} ref="header" />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

class Inbox extends Component {
  render() {
    return (
      <div className={styles.subtitle}>
        <h1>
          Archive
        </h1>
        {this.props.children}
      </div>
    );
  }
}

var routes = (
  <Route exact path= '/' component={ App }>
    <IndexRoute component={ Page }/>

    <Route path="top" component={ Inbox }>
      <Redirect from="archive/:id" to="/archive/:id" />
    </Route>

    <Route component={ Inbox }>
      <Route path='archive/:id' component={ Page } />
    </Route>

    <Redirect from="archive" to="/archive/1" component={ Inbox } />

    <Route>
      <Route path='post/:id' component={ Post } />
    </Route>

    <Route path='*' component={ NotFound404 } />
  </Route>
);

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app')
);

export default App;