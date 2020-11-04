import { stat } from 'fs';
import { off } from 'process';
import React from 'react';
import { render } from 'react-dom';

class AppDescription extends React.Component {
  render() {
    return (
      <div>
        <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
        <p>This app will help you track your time and inform you when it's time to rest.</p>
      </div>
    );
  }
};

function formatTime(time) { 
  var m = time.slice(0,2);
  var s = time.slice(3,6);
  return (m+':'+s)
};

step = () => {};

startTimer = () => {

  this.setState({
    timer: setInterval(this.step, 1000),
  });

};

class App extends React.Component {
  state = {
    status: this.props.status || 'off',
    time: this.props.time || '11:11',
    timer: null,
  }

  render() {
    const { status } = this.state;

    var d = new Date();
    var n = d.getSeconds();
    console.log(n)
    this.state.time = '20:00';

    return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') && <AppDescription />}
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />}
        {(status !== 'off') && <div className="timer">{formatTime(this.state.time)}</div>}
        {(status === 'off') && <button className="btn" onClick={startTimer()}>Start</button>}
        {(status !== 'off') && <button className="btn">Stop</button>}
        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
