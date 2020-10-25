import React from 'react'


const PetitionItem = (props) => {
    const {

    } = props

    return (
        <div className='petition-item-container'>
            <div className='petition-item-top-container'>
                <h3>Tytuł</h3>
                <p>Krótki opis jsadiajbd ihdsiab idjbaisjd bai dbai dbaib idhab diabid hbaihbdai hbaisbd iahbdiab</p>
            </div>
            <div className='petition-item-bottom-container'>
                <div className='petition-item-bottom-like'>
                    <h4>26 osób wsparło</h4>
                </div>
                <div className='petition-item-like-button'>
                    <i class="far fa-heart fa-2x"></i>
                    <h4>Wesprzyj! </h4> 
                </div>
            </div>
        </div>
    )
}

export default PetitionItem