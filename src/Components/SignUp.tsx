import { useContext, useState } from "react";
import { MicsContext } from "../Context/MicsContext";
import { signUp } from "../Services/micsapi";

export function SignUp() {

    const { users, addUser } = useContext(MicsContext)

    function handleSignUp(event:any) {
        event.preventDefault();
        // The serialize function here would be responsible for
        // creating an object of { key: value } pairs from the
        // fields in the form that make up the query.
        let formData = new FormData(event.currentTarget)
        let first_name :string = formData.get('first_name') as string;
        let last_name: string = formData.get('last_name') as string;
        let email: string = formData.get('email') as string;
        let password :string = formData.get('password') as string;
        signUp(first_name, last_name, email, password).then(newuser => addUser(newuser));
        setFirstName('')
        setLastName('')
        setEmailText('')
        setPasswordText('')
      }
    
    const [firstNameText, setFirstName] = useState('');
    const [lastNameText, setLastName] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    
      function handleFirstNameChange(e:any) {
        setFirstName(e.target.value);
      }
      function handleLastNameChange(e: any) {
        setLastName(e.target.value);
      }
      function handleEmailChange(e:any) {
        setEmailText(e.target.value);
      }
      function handlePasswordChange(e:any) {
        setPasswordText(e.target.value);
      }
  

    return (

    <div>
    <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
            <label htmlFor="">First Name:
            <input type="text" name="first_name" id="first_name" value={firstNameText} onChange={handleFirstNameChange}/>
                </label>
            <label htmlFor="">Last Name:
            <input type="text" name="last_name" id="last_name" value={lastNameText} onChange={handleLastNameChange}/>
                </label>
           <label htmlFor="">Email:
            <input type="text" name="email" id="email" value={emailText} onChange={handleEmailChange}/>
                </label>
            <label htmlFor="">Password:
            <input type="text" name="password" id="password" value={passwordText} onChange={handlePasswordChange}/>
            </label>
            <button type='submit'>Sign Up Now</button>
      </form>
  
    </div>
    );
}