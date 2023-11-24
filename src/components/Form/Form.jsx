import React, { useState } from 'react'
import validate from './validation'

export default function Form (){

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

    return (
        <div>
            <form>
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