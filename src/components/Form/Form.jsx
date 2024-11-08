
const Form = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log(e.target.password.value)
    }

    return (
        <div>
            <h1 className="text-3xl">simple Form</h1>
            <form onSubmit={handleSubmit} >
                <input type="text" name="name" id=""  placeholder="Name" className="input input-bordered my-2"/>
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

export default Form;