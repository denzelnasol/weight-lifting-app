import { useState } from "react"

const Register = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        // if (!userName || !email || !password || !password2) {
        //     alert('You are missing a required field')
        // }
        // else if (password !== password2) {
        //     alert("These passwords don't match")
        // }
        // else {
            addUser()
        // }

        // setUserName('')
        // setEmail('')
        // setPassword('')
        // setPassword2('')
    }

    const addUser = () => {

        let newUser = {
            "userName": userName,
            "email": email,
            "password": password,
            "password2": password2,
            "isAdmin": "false"
        }

        // console.log(newUser)

        return fetch('http://localhost:5000/users/register', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Consent-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='container rounded col-md-8'  style={{ backgroundColor: 'white', padding: '2%', fontSize: '1rem ' }}>
            <form className='container' onSubmit={onSubmit}>
                <div className='form-group'>
                    <h1>Register</h1>
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input style={{ marginLeft: '2%' }} type='string' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Input Username' />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input style={{ marginLeft: '2%' }} type='string' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Input Email' />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input style={{ marginLeft: '2%' }} type='string' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Input Password' />
                </div>
                <div className='form-group'>
                    <label>Re-enter Password</label>
                    <input style={{ marginLeft: '2%' }} type='string' value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder='Re-enter Password' />
                </div>
                <button type='submit' value='Add User' className='btn btn-primary' style={{ marginTop: '2%' }}>Submit</button>
            </form>
        </div>
    )
}

export default Register
