import React from 'react'


const PetitionItem = (props) => {
    const {
        title,
        descript,
        likecount
    } = props

    return (
        <div className='petition-item-container'>
            <div className='petition-item-top-container'>
                <h3>{title}</h3>
                <p>{descript}</p>
            </div>
            <div className='petition-item-bottom-container'>
                <div className='petition-item-bottom-like'>
                    <h4>{likecount} osób wsparło</h4>
                </div>
                <div className='petition-item-like-button'>
                    <i className="far fa-heart fa-2x"></i>
                    <h4>Wesprzyj! </h4> 
                </div>
            </div>
        </div>
    )
}

export default PetitionItem