import useInputObject from "../../Hooks/useInputObject";

const FormObject = () => {

    const nameState = useInputObject('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input {...nameState} type="text"  name="name" id=""  placeholder="Name" className="input input-bordered my-2"/>
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

export default FormObject;