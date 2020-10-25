import React from 'react'
import { apiCall } from '../../../restClient/rest'
import PetitionItem from '../PetitionItem'

class AddPetitionPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            descript: '',
            petitor: ''
        }

    }

    handleChange = (key, value) => {
        this.setState({...this.state, [key]: value })
    }

    handleSubmit = () => {
        const body = this.state
        console.log(body)
        apiCall('http://localhost:8080/api/petitions', 'POST', {}, body).then(res => {

        console.log(res)
            this.props.history.push('/all-petitions')
        })
    }

    render() {
        return (
            <div className='add-petition-page-container'>
                <h1>Dodaj Petycję</h1>
                <div className='add-petition-form'>
                    <div className='form-group'>
                        <label htmlFor="petition-title">Tytuł petycji</label>
                        <input type="text" className="form-control" id="petition-title" onChange={(e) => this.handleChange('title', e.target.value)} placeholder="Wpisz tytuł petycji"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="petition-descipt">Krótki opis</label>
                        <input type="text" className="form-control" id="petition-descript" onChange={(e) => this.handleChange('descript', e.target.value)} placeholder="Wpisz opis petycji"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="petitor">Wnioskodawca</label>
                        <input type="text" className="form-control" id="petitor" onChange={(e) => this.handleChange('petitor', e.target.value)} placeholder="Wpisz swoje imię i nazwisko"/>
                    </div>
                    <div className='add-petition-submit-button-container'>
                        <button disabled={this.state.title === '' && this.state.descript === '' && this.state.petitor === ''} className='btn btn-success' onClick={this.handleSubmit}>Prześlij petycję!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPetitionPage