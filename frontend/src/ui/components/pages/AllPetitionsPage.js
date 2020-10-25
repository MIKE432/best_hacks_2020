import React from 'react'
import PetitionItem from '../PetitionItem'

class AllPetitionsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='all-petitions-page-container'>
                <h1>Wszystkie petycje</h1>
                <div className='petition-list'>
                    <PetitionItem />
                    <PetitionItem />
                    <PetitionItem />
                    <PetitionItem />
                    <PetitionItem />
                    <PetitionItem />
                    <PetitionItem />
                    <PetitionItem />
                </div>
            </div>
        )
    }
}

export default AllPetitionsPage