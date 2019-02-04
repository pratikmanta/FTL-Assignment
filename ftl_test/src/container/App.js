import React, { Component } from 'react';
import '../container/App.css';
import Loanform from '../components/Loanform'
import Particles from 'react-particles-js';
import statistics from '../statistics.png'

const particleOptions = {
  particles: {
    "number": {
      "value": 70,
      "density": {
        "enable": false,
        "value_area": 500
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={particleOptions} className='particles' />
        <div className='m-2 animated bounceInRight'>
          <img src={statistics} className='border rounded-circle bg-light p-2 m-2' alt='logo' width='80px' height='80px' />
        </div>
        <div className='animated bounceInLeft delay-1s'>
          <h1 className='text-light'>Loan Calculator</h1>
        </div>
        <Loanform />
      </div>
    );
  }
}

export default App;
