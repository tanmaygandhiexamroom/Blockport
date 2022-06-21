import React from 'react'
import './footer.css';
const footer = () => {
    return (
        <div className="main-container-footer">
            <div className='container-footer'>
                <span className='spans-footer-1'><a className='anchors' href="/about">About us</a></span>
                <span className='spans-footer-2'><a className='anchors' href="support">Support</a></span>
                <span className='spans-footer-3'><a className='anchors' href="/faq">FAQ</a></span>
                <span className='spans-footer-4'><a className='anchors' href="/token">Token Details</a></span>
                <span className='spans-footer-5'><a className='anchors' href="/white">White Book</a></span>
                <span className='spans-footer-6'><a className='anchors' href="/blogs">Blogs</a></span>
            </div>
            <div className='container-footer-right'>
                <span className='spans-footer' ><a className='anchors' href="/twitter">Twitter</a></span>
                <span className='spans-footer' ><a className='anchors' href="/discord">Discord</a></span>
            </div>
        </div>
    )
}

export default footer