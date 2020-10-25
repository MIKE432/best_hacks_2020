import React from 'react'
import { apiCall } from '../../restClient/rest'


const PetitionItem = (props) => {
    
    const {
        title,
        descript,
        likecount,
        petitionid,
        callBack
    } = props

    const handleClick = () => {
        apiCall(`http://localhost:8080/api/petitions/${petitionid}`).then(res => callBack())
    }

    return (
        <div className='petition-item-container'>
            <div className='petition-item-top-container'>
                <h4>{title}</h4>
                <p>{descript}</p>
            </div>
            <div className='petition-item-bottom-container'>
                <div onClick={handleClick} className='petition-item-bottom-like'>
                    <h5>{likecount} osób wsparło</h5>
                </div>
                <div className='petition-item-like-button'>
                    <i className="far fa-heart fa-2x"></i>
                    <h5>Wesprzyj! </h5>
                </div>
            </div>
        </div>
    )
}

export default PetitionItem