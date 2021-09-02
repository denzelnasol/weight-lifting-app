// import { useState } from "react"
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

// const Register = () => {

//     const [userName, setUserName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [password2, setPassword2] = useState('')

//     const onSubmit = (e) => {
//         e.preventDefault()

//         // if (!userName || !email || !password || !password2) {
//         //     alert('You are missing a required field')
//         // }
//         // else if (password !== password2) {
//         //     alert("These passwords don't match")
//         // }
//         // else {
//             addUser()
//         // }

//         // setUserName('')
//         // setEmail('')
//         // setPassword('')
//         // setPassword2('')
//     }

//     const addUser = () => {

//         let newUser = {
//             "userName": userName,
//             "email": email,
//             "password": password,
//             "password2": password2,
//             "isAdmin": "false"
//         }

//         // console.log(newUser)

//         return fetch('http://localhost:5000/users/register', {
//             method: 'POST',
//             body: JSON.stringify(newUser),
//             headers: {
//                 'Consent-Type': 'application/json'
//             },
//         })
//             .then(res => res.json())
//             .then(data => console.log(data))
//     }

//     return (
//         <div className='container rounded col-md-8'  style={{ backgroundColor: 'white', padding: '2%', fontSize: '1rem ' }}>
//             <form noValidate className='container' onSubmit={onSubmit}>
//                 <div className='form-group'>
//                     <h1>Register</h1>
//                 </div>
//                 <div className='form-group'>
//                     <label>Username</label>
//                     <input style={{ marginLeft: '2%' }} type='string' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Input Username' />
//                 </div>
//                 <div className='form-group'>
//                     <label>Email</label>
//                     <input style={{ marginLeft: '2%' }} type='string' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Input Email' />
//                 </div>
//                 <div className='form-group'>
//                     <label>Password</label>
//                     <input style={{ marginLeft: '2%' }} type='string' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Input Password' />
//                 </div>
//                 <div className='form-group'>
//                     <label>Re-enter Password</label>
//                     <input style={{ marginLeft: '2%' }} type='string' value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder='Re-enter Password' />
//                 </div>
//                 <button type='submit' value='Add User' className='btn btn-primary' style={{ marginTop: '2%' }}>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Register

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            userName: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            isAdmin: 'false'
        };

        console.log(newUser)

        this.props.registerUser(newUser, this.props.history);
    };

    render() {

        const { errors } = this.state
        return (
            <div className="container rounded" style={{ backgroundColor: 'white', padding: '2%', marginTop: '2%' }}>
                <div className="row">
                    <div className="col s8 offset-s2">

                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account? <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.name
                                    })}
                                />
                                <label htmlFor="name">Name</label>
                                <span className="red-text">{errors.name}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("", {
                                        invalid: errors.email
                                    })}
                                />
                                <label htmlFor="email">Email</label>
                                <span className="red-text">{errors.email}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password2
                                    })}
                                />
                                <label htmlFor="password2">Confirm Password</label>
                                <span className="red-text">{errors.password2}</span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register))