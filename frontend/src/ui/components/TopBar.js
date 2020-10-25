import React from 'react'

const TopBar = (props) => (
    <div className='top-bar-container'>
        <div className='top-bar-logo-container' onClick={() => {
                props.history.push('/')
            }}>
            <h3 className='top-bar-logo'>PETI</h3>
            <h3>GOV</h3>
        </div>
        <div className="top-bar-links-container">
            <div className='top-bar-all-petitions' onClick={() => {
                props.history.push('/petitions')
            }}>
                <span>Dodane Petycje</span>
            </div>
            <div className='top-bar-add-petition' onClick={() => {
                props.history.push('/add-petition')
            }}>
                <span>Dodaj Petycję</span>
            </div>
        </div>
    </div>
)

export default TopBar