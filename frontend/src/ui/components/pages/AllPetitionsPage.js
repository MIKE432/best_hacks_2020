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

    callBack = () => {
        apiCall('http://localhost:8080/api/petitions').then(res => this.setState({petitions: res.data}))
    }

    componentDidMount() {
        this.callBack()
        
    }

    render() {
        return (
            <div className='all-petitions-page-container'>
                <h1>Wszystkie petycje</h1>
                <div className='petition-list'>
                    {
                        this.state.petitions.map((petition, key) => (<PetitionItem key={key} {...petition} callBack={this.callBack} />))
                    }
                </div>
            </div>
        )
    }
}

export default AllPetitionsPage