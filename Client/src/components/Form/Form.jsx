import React, { useState } from 'react'
import validate from './validation'

export default function Form ({login}){

    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({email: "", password: ""})
    const handleChange = (event) => {
        const {value, name} = event.target
        setUserData({...userData, [name]: value})
        setErrors(validate({
            ...userData,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(errors).length === 0) {
            // No hay errores de validación, proceder con el inicio de sesión
            login(userData);
        }
     };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input type='email' key="email" id='email' name='email' value={userData.email} onChange={handleChange}/>
                <p>{errors.name ? errors.name : null}</p>
                <br />
                <label htmlFor='password'>password</label>
                <input type='password' key= "password" id='password' name='password' value={userData.password} onChange={handleChange}/>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}