import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';

import 'normalize/normalize.css';
import styles from './about.css';

class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <p>Tokoy SuperCollider is the meet-up for who interested in SuperCollider and generative sound.</p>
        <h1>member:</h1>
        <h3>@Craftwife</h3>
        <h3>@moxus</h3>
        <h3>@renick</h3>
        <h3>@tdshusm</h3>
        <h1>find us:</h1>
        <h2><Link to="https://tksc.connpass.com" target="_blank">Connpass.com's group page</Link></h2>
        <h2><Link to="https://github.com/tksupercollider" target="_blank">Account on GitHub.com</Link></h2>
        <h2><Link to="https://twitter.com/tksupercollider" target="_blank">Twitter account</Link></h2>
      </div>
    )
  }
}

export default About;
