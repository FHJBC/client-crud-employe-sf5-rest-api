import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import Experience from './Experience'

const AddEmploye = ({onAdd}) => {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [age, setAge] = useState(0)
    const [poste, setPoste] = useState('')
    const [showAddExperience, setShowAddExperience] = useState(false)
    const [experience, setExperience] = useState({titre:'', description: ''})

    const onSubmit = (e) => {
        e.preventDefault()

        if (!nom) {
            alert('Ajouter un nom SVP')
            return
        }

        onAdd({nom, prenom, age, poste, experience})

        setNom('')
        setPrenom('')
        setAge(0)
        setPoste('')
        setExperience({titre: '', description:''})
    }

    const onAddExperience = () => {
        setExperience({titre: '', description:''})
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Nom</label>
                <input
                    type='text'
                    placeholder='Nom'
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Prenom</label>
                <input
                    type='text'
                    placeholder='Prenom'
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Age</label>
                <input
                    type='number'
                    min='18'
                    max='60'
                    placeholder='Age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Poste</label>
                <input
                    type='text'
                    placeholder='Poste'
                    value={poste}
                    onChange={(e) => setPoste(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Expérience
                    <FaPlusCircle
                        style={{ color: 'steelblue', cursor: 'pointer'}}
                        onClick={() => setShowAddExperience(!showAddExperience)}
                    />
                </label>
                {showAddExperience && <Experience />}
                
            </div>
            
            <input type='submit' value='Enregister' className='btn btn-block' />
        </form>
    )
}

export default AddEmploye
