import React from 'react'
import PetitionItem from '../PetitionItem'
import { apiCall } from '../../../restClient/rest'

class AllPetitionsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            petitions: []
        }
    }

    componentDidMount() {
        
        apiCall('http://localhost:8080/api/petitions').then(res => this.setState({petitions: res.data}))
    }

    render() {
        return (
            <div className='all-petitions-page-container'>
                <h1>Wszystkie petycje</h1>
                <div className='petition-list'>
                    {
                        this.state.petitions.map((petition, key) => (<PetitionItem key={key} {...petition} />))
                    }
                </div>
            </div>
        )
    }
}

export default AllPetitionsPage