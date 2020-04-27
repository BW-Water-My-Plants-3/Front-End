import React,{useState,useEffect} from 'react';

const Login = props =>{
    const [user,setUser] = useState({
        username:"",
        password:"",
    })
    useEffect(() => {
        if (user) {
           const { username, password } = user
           setUser({
              username: username,
              password: password
           })
        }
     }, [user])
  
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
     }
  
    const handleSubmit = e => {
        e.preventDefault()
        
     }

    return( //<Header />
        
        <div className='login-container'>
            <h2>Log In</h2>
              
            <form onSubmit={handleSubmit} >

                <input  type='username' 
                        name='username' 
                        placeholder='Username' 
                        value={user.username} 
                        onChange={handleChange} 
                        required />

                <input  type='password' 
                        name='password' 
                        placeholder='Password' 
                        value={user.password} 
                        onChange={handleChange} 
                        required />

                <input  type='submit' 
                         />
              </form>
           </div>
        )
}
export default Login