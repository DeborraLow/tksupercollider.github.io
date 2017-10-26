/*
  footer.jsx
*/

import React, { Component } from 'react';
// import { render } from 'react-dom';

import styles from './footer.css';

class Footer extends Component {
  render() {
    // var nextClick = this.nextPage;
    return (
      <div className={styles.footer}>
        <div className={styles.diveider}>
          //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </div>
        <p>
          ©2010-17
        </p>
      </div>
    );
  }
}

export default Footer;
