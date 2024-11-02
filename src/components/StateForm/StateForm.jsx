import { useState } from "react";

const StateForm = () => {

    const [name , setName] = useState(null)
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length < 6){
            setError("Password must be 6 character of longer")
        }
        else{
            setError('')
            console.log(name)
            console.log(email)
            console.log(phone)
            console.log(password)
            
        }
    } 

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePhoneChange = e => {
        setPhone(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input onChange={handleNameChange} type="text" name="name" id=""  placeholder="Name" required className="input input-bordered my-2"/>
                <br />
                <input onChange={handleEmailChange} type="text" name="email" id=""  placeholder="Email" required className="input input-bordered my-2"/>
                <br />
                <input onChange={handlePhoneChange} type="text" name="phone" id=""  placeholder="Phone" className="input input-bordered my-2"/>
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id=""  placeholder="Password" required className="input input-bordered my-2"/>
                <br />
                {
                    error && <p className="text-red-500">{error}</p>
                }
               
                <input type="submit" value="Submit" className="btn mt-4"/>
                
            </form>
            
        </div>
    );
};

export default StateForm;