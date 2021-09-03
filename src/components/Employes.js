import React from 'react'
import Employe from './Employe'

const Employes = ({employes, onDelete, onToggle}) => {
    return (
        <>
            { employes.map((employe, index) => (
                <Employe key={index} employe={employe} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Employes
