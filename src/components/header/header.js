import React from 'react'
import BLOCKPORT from './BLOCKPORT.svg';
import './header.css'
const header = () => {
    return (
        <div className='main-container'>
            <div className='container'>
                <div className='logo'>
                    <img className="img" src={BLOCKPORT} alt='logo' />
                </div>
                <div className="div-spans">
                    <span><a className="spans" href="/jobs">Jobs</a></span>
                   <span><a className="spans" href="/faucet">Faucet</a></span>
                    <span><a className="spans" href="/swap">Swap</a></span>
                   <span><a className="spans" href="/reviews">Reviews</a></span> 
                    <span><a className="spans" href="/employer">Post a job</a></span>
                </div>
                <div className='signUp'>
                    <a className='right-navbar' href="/signUp">SignUp</a>
                    <button className="btn">Connect Wallet</button>
                </div>
            </div>
            {/* <Body /> */}
        </div>
    )
}

export default header