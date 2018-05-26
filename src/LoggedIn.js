
import React, { Component } from 'react';

class LoggedIn extends Component {

  render() {
    return (
      <div>
        <center><p>
            Thanks for logging in {this.props.userId}
       </p>
       </center>
       </div>
    );
  }
}

export default LoggedIn;