import useInputState from "../../Hooks/useInputState";

const HookForm = () => {

    const [name, handleNameChange] = useInputState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name={name}  onChange={handleNameChange} id=""  placeholder="Name" className="input input-bordered my-2"/>
                <br />
                <input type="text" name="email" id=""  placeholder="Email" className="input input-bordered my-2"/>
                <br />
                <input type="text" name="phone" id=""  placeholder="Phone" className="input input-bordered my-2"/>
                <br />
                <input type="password" name="password" id=""  placeholder="Password" className="input input-bordered my-2"/>
                <br />
                <input type="submit" value="Submit" className="btn mt-4"/>
            </form>
            
        </div>
    );
};

export default HookForm;