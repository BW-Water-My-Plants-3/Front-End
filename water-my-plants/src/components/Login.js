import React from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"

class Login extends React.Component{
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault()
        axiosWithAuth()
            .post("", this.state.credentials) //ADD API URL
            .then(res => {
                console.log({res})
            })
            .catch(err => {
                console.log({err})
            })
    }

    render(){
        return(
        <>
            <h2>Log in</h2>
            <div className="login-form">
                <form /*add onSubmit*/> 
                    <label htmlFor="username">Username: 
                        <input 
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange="" //add onChange event here
                        /></label>
                    <label htmlFor="password">Password: 
                        <input 
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange="" //add onChange event here
                        /></label>
                    <button>Log in</button>
                </form>
            </div>
        </>
        )
    }
}

export default Login