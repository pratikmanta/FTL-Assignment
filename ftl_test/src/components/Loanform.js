import React, { Component } from 'react'
import '../../src/slider.css'
import Circularbar from './CircularBar';


class Loanform extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            duration: '',
            result: ''
        }
    }

    onInputChange = (event) => {
        this.setState({ input: event.target.value })
    }

    OnDurationChange = (event) => {
        this.setState({ duration: event.target.value })
    }

    onInputSlide = (event) => {
        this.setState({ input: event.target.value })
    }

    onDateSlide = (event) => {
        this.setState({ duration: event.target.value })
    }

    onSubmit = () => {
        if (this.state.input < 500 || this.state.input > 5000) {
            window.alert('Please enter loan amount within the given range')
            return this.setState({ input: '' , duration:''})
        }
        else if (this.state.duration < 6 || this.state.duration > 24) {
            window.alert('Please enter the no of months within the given range')
            return this.setState({ duration: '', input:'' })
        }
        fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.input}&numMonths=${this.state.duration}`, {
            mode: 'cors',
            headers: { 'Content-type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => this.setState({ result: data }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className='container mt-2 pt-2'>
                <div className="card text-light">
                    <div className="card-body form-box">
                        <div className="form-group row">
                            <div className='col-6 '>
                                <label className="" htmlFor="loaninput">Enter Loan Amount (between 500 and 5000)</label>
                                <input type="number" max="500" className="form-control" value={this.state.input} id="loaninput" onChange={this.onInputChange} />
                            </div>
                            <div className="slidecontainer mt-2 p-3 col-6">
                                <span className="float-left fa fa-dollar"> 500</span><span className="float-right fa fa-dollar"> 5000</span>
                                <input type="range" min="500" max="5000" step="5" value={this.state.input} className="slider" onChange={this.onInputSlide} />
                                <p className="fa fa-dollar"> Value: {this.state.input} </p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-6'>
                                <label htmlFor="loanduration">Enter Duration (in months)</label>
                                <input type="number" className="form-control" value={this.state.duration} id="loanduration" onChange={this.OnDurationChange} />
                            </div>
                            <div className="slidecontainer mt-2 p-3 col-6">
                                <span className="float-left"> 6</span><span className="float-right"> 24</span>
                                <input type="range" min="6" max="24" value={this.state.duration} className="slider" onChange={this.onDateSlide} />
                                <p className=""> Months: {this.state.duration} </p>
                            </div>
                        </div>
                    <button type="button" onClick={this.onSubmit} className="btn btn-danger animated fadeInDown delay-2s mx-auto mb-2 w-75">Get Quote</button>
                    </div>
                </div>
                <div className='container'>
                    <Circularbar data={this.state.result} />
                </div>
            </div>
        )
    }
}

export default Loanform