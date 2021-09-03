import React from 'react'

const Experience = () => {
    return (
        <div>
             <div className='form-control'>
                <label>Titre</label>
                <input
                    type='text'
                    placeholder='Titre de votre expérience'
                    // value={description}
                    // onChange={(e) => setExperience(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                {/* <input
                    type='text'
                    placeholder='Descrire ici votre expérience'
                    // value={description}
                    // onChange={(e) => setExperience(e.target.value)}
                /> */}
                <textarea rows="8" cols="60">
                </textarea>
            </div>
        </div>
    )
}

export default Experience
