import React from 'react'
import './Left.css'

function Left() {
    return (
        <div className='left-bar'>
            <div className='details-logo'>
                <p className='leftBar-logo'>MovieBox</p>
            </div>
            <div className='sidebar-menu'>
                <ul>
                    <li><i className="fas fa-home"></i>Home</li>
                    <li><i className="fas fa-film"></i>Movies</li>
                    <li><i className="fas fa-tv"></i>TV Series</li>
                    <li><i className="far fa-calendar-alt"></i>Upcoming</li>
                </ul>
            </div>
            <div className='bonus-container'>
                <div className='bonus'>
                    <p>Play Movie quizes and earn free tickets</p>
                    <span>50k people are playing now</span>
                </div>
                <div className='play-button'>
                    <button>Start Playing</button>
                </div>
            </div>

            <div className='logout'>
                <p>Log out</p>
            </div>
        </div>
    )
}

export default Left