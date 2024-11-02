import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();

    useEffect( () => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(phoneRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input ref={nameRef} type="text" name="name" id="1"  placeholder="Name" className="input input-bordered my-2"/>
                <br />
                <input ref={emailRef} type="text" name="email" defaultValue={"@gmail.com"} id="2"  placeholder="Email" className="input input-bordered my-2"/>
                <br />
                <input ref={phoneRef} type="text" name="phone" id="3"  placeholder="Phone" className="input input-bordered my-2"/>
                <br />
                <input ref={passwordRef} type="password" name="password" id="4"  placeholder="Password" className="input input-bordered my-2"/>
                <br />
                <input type="submit" value="Submit" className="btn mt-4"/>
            </form>
        </div>
    );
};

export default RefForm;