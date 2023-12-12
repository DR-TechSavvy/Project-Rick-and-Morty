import React, { useState } from 'react'
import validate from './validation'
import './Form.css'

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
        <div className='Form_Container'>
            <form onSubmit={handleSubmit} className='Form_Dates'>
                <div className='email'>
                    <label htmlFor="email">Email</label>
                    <input type='email' key="email" id='email' name='email' value={userData.email} onChange={handleChange}/>
                    <p>{errors.name ? errors.name : null}</p>
            
                </div>
                <br />
                <div className='password'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' key= "password" id='password' name='password' value={userData.password} onChange={handleChange}/>

                </div>
                <br />
                <div className= "Submit">
                    <p>
                <button className='btn-1'>Submit</button>

                    </p>

                </div>
            </form>
        </div>
    )
}