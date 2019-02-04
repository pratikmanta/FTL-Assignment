import React from 'react'
import CircularProgressbar from 'react-circular-progressbar';
import '../../src/slider.css'

const Circularbar = ({ data }) => {
    const styles = {
        background: {
            fill: '#d9534f',
        },
        text: {
            fill: '#fff',
        },
        path: {
            stroke: '#fff',
        },
        trail: { stroke: 'transparent' }
    }
    const { interestRate, numPayments, monthlyPayment } = data
    if (interestRate === undefined || numPayments === undefined || monthlyPayment === undefined) {
        return (
            <div className='row'>
                <div className="col-4 mt-2 pt-2">
                    <div style={{ width: '200px', height: '100px' }} className='card-img-top mx-auto'>
                        <CircularProgressbar percentage={100} text={'0%'} background backgroundPadding={6} styles={styles} />
                        <div className="mt-2 p-2 rounded btn-danger card-body">
                            <h4>Interest</h4>
                        </div>
                    </div>
                </div>
                <div className="col-4 mt-2 pt-2">
                    <div style={{ width: '200px', height: '100px' }} className='card-img-top mx-auto'>
                        <CircularProgressbar percentage={100} text={'0'} background backgroundPadding={6} styles={styles} />
                        <div className="mt-2 p-2 rounded btn-danger card-body">
                            <h4>No of Months</h4>
                        </div>
                    </div>
                </div>
                <div className="col-4 mt-2 pt-2">
                    <div style={{ width: '200px', height: '100px' }} className='card-img-top mx-auto'>
                        <CircularProgressbar percentage={100} text={'0'} background backgroundPadding={6} styles={styles} />
                        <div className="mt-2 p-2 rounded btn-danger card-body">
                            <h4>Amount to be payed</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='row'>
            <div className="col-4 mt-2 pt-2">
                <div style={{ width: '200px', height: '100px' }} className='card-img-top mx-auto'>
                    <CircularProgressbar percentage={`${interestRate}`} text={`${interestRate}%`} background backgroundPadding={6} styles={styles} />
                    <div className="mt-3 p-2 rounded btn-danger card-body animated flipInX delay-1s">
                        <h4>Interest: {interestRate + '%'}</h4>
                    </div>
                </div>
            </div>
            <div className="col-4 mt-2 pt-2">
                <div style={{ width: '200px', height: '100px' }} className='card-img-top mx-auto'>
                    <CircularProgressbar percentage={`${numPayments}`} text={`${numPayments}`} background backgroundPadding={6} styles={styles} />
                    <div className="mt-3 p-2 rounded btn-danger animated flipInX delay-2s card-body">
                        <h4>No of Months : {numPayments}</h4>
                    </div>
                </div>
            </div>
            <div className="col-4 mt-2 pt-2">
                <div style={{ width: '200px', height: '100px' }} className='card-img-top mx-auto'>
                    <CircularProgressbar percentage={`${monthlyPayment.amount}`} text={`${monthlyPayment.amount}`} background backgroundPadding={6} styles={styles} />
                    <div className="mt-3 p-2 rounded btn-danger animated flipInX delay-3s card-body">
                        <h4>Amount: {monthlyPayment.amount} <span className='fa fa-dollar'></span></h4>
                        <h4>Currency: {monthlyPayment.currency}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Circularbar