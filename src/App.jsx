import "./App.css";
import FormObject from "./components/FormObject/FormObject";
import Grandpa from "./components/Grandpa/Grandpa";
import HookForm from "./components/HookForm/HookForm";
import RefForm from "./components/RefForm/RefForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";
import Form from './components/Form/Form'
import StateForm from './components/StateForm/StateForm'

function App() {
  const handleSignUp = (data) => {
    console.log("Sign up data", data)
  };

  const handleUpdateProfile = (data) => {
    console.log("Update Profile data", data)
  };

  return (
    <>
      <Form></Form>
      <StateForm></StateForm>
      <RefForm></RefForm>
      <HookForm></HookForm>
      <FormObject></FormObject>
      <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUp}
      >
        <div>
          <h2 className="text-2xl font-bold">Sign up</h2>
          <p>Sign up for batter performance</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Update Profile"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2 className="text-2xl font-bold">Update Profile</h2>
          <p>Always keep Updated</p>
        </div>
      </ReusableForm>


      <Grandpa></Grandpa>
    </>
  );
}

export default App;
