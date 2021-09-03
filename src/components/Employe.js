import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Employe = ({employe, onUpdate, onDelete, onToggle}) => {
    return (
        <div 
            // className={`task ${task.reminder && 'reminder'}`}
            // onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {employe.nom}{' '}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(employe.id)}
                />
            </h3>
            <p>{ employe.poste }</p>
        </div>
    )
}

export default Employe
