/* eslint-disable react/prop-types */

const ReusableForm = ({formTitle, handleSubmit, submitBtnText="Submit", children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }




    return (
        <div>
            {children}
            {/* <h2 className="text-2xl font-bold">{formTitle}</h2> */}
            <form onSubmit={handleLocalSubmit} >
                <input type="text" name="name" id=""  placeholder="Name" className="input input-bordered my-2"/>
                <br />
                <input type="text" name="email" id=""  placeholder="Email" className="input input-bordered my-2"/>
                <br />
                <input type="text" name="phone" id=""  placeholder="Phone" className="input input-bordered my-2"/>
                <br />
                <input type="password" name="password" id=""  placeholder="Password" className="input input-bordered my-2"/>
                <br />
                <input type="submit" value={submitBtnText} className="btn mt-4"/>
            </form>
        </div>
    );
};

export default ReusableForm;