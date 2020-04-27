import React,{useState} from 'react';
import * as Yup from "yup"

const formSchema = Yup.object().shape({
    name: 
    Yup
    .string()
    .required('Please enter your name'),
    email: 
    Yup
    .string()
    .required('Please enter your email')
    .email('Please enter a VALID e-mail address'),
    password: 
    Yup
    .string()
    .required('Please create a password')
    .min(6, "Your password must be 6 characters long")
    
}

const Signup = props =>{

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    })
   
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    })
  
    const [buttonDisabled, setButtonDisabled] = useState(true);

    
    const [post, setPost] = useState([]);
    const [users, setUsers] = useState ([]);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    const validateChange = event => {
        yup.reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [event.target.name]: err.errors[0]
                });
            })
    };

    const inputChange = event => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name]:
                event.target.type === "checkbox" ? event.target.checked : event.target.value
        };
        setFormState(newFormData);
    };

    const formSubmit = event => {
        event.preventDefault();
        axios.post("https://reqres.in/api/users", formState)
            .then(res => {
                setPost(res.data);
                console.log("success", post);
                setUsers([...users, res.data])
                setFormState({
                    name: "",
                    email: "",
                    password: "",
                    terms: ""
                });
            })
            .catch(err => {
                console.log(err.res);
            });
    };

    return (
        <div id="form">

            <form onSubmit={formSubmit}>
                <label htmlFor="name">
                    Name
                <input id="name" type="text" name="name" value={formState.name} onChange={inputChange} />
                {errors.name.length > 0 ? (<p>{errors.name}</p>):null}
                </label>
                <label htmlFor="email">
                    Email
                <input id="email" type="email" name="email" value={formState.email} onChange={inputChange} />
                {errors.email.length > 0 ? (<p className="error"> {errors.email}</p>) : null}
                </label>
                <label htmlFor="role">
                    Role
                </label>
                <label htmlFor="password">
                    Password
                <input id="password" type="password" name="password" value={formState.password} onChange={inputChange} />
                {errors.password.length > 0 ? (<p>{errors.password}</p>):null}
                </label>
                <label htmlFor="terms">
                    <input id="terms" type="checkbox" name="terms" checked={formState.terms} onChange={inputChange} />
                    Terms and Conditions
            </label>
                <button disabled={buttonDisabled}>Submit</button>
            </form>
            <div>
                <h1>Users</h1>
                {users.map(element => {
                    return (
                        <div>Name: {element.name} Email: {element.email}</div>
                    );
                })}
            </div>
        </div>
    );
}

export default Form;















    return
}
export default Signup