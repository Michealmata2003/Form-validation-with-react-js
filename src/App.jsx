import React from 'react';
import { useState } from 'react';
import "./app.css"
import FormInput from './Components/FormInput';

const App = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });
    const inputs = [
        {
            id: 1,
            Name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special characters",
            label: " Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            Name: "email",
            type: "text",
            placeholder: "Email",
            errorMessage: "It should be a valid Email address",
            label: " Email",
            required: true,
        },
        {
            id: 3,
            Name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: " Birthday"

        },
        {
            id: 4,
            Name: "password",
            placeholder: "Password",
            type: "text",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 letter and 1 special character ",
            label: " Password",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        },
        {
            id: 5,
            Name: "confirmpassword",
            type: "text",
            placeholder: "Confirm Password",
            errorMessage: "password don't match",
            label: " Confirm Password",
            values: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(values);

    return (
        <div className='app'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id}

                        {...input}
                        value={values[input.Name]}
                        onChange={onChange}
                    />

                ))}

                <button>submit</button>
            </form>

        </div>
    );
};

export default App;