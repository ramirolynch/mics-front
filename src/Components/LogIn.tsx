import { useContext, useState } from "react";
import { MicsContext } from "../Context/MicsContext";
import { logIn, signUp } from "../Services/micsapi";
import { useNavigate } from "react-router-dom";

export function LogIn() {

    const { loggedusers, loginUser } = useContext(MicsContext)
    let navigate = useNavigate();
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [loginError, setLoginError] = useState(false);

    function HandleLogIn(event: any) {
        event.preventDefault();
        // The serialize function here would be responsible for
        // creating an object of { key: value } pairs from the
        // fields in the form that make up the query.
        
        let formData = new FormData(event.currentTarget)

        let email: string = formData.get('email') as string;
        let password: string = formData.get('password') as string;

        // checked for logged users
        logIn(email, password).then(()=>loginUser())    
            
            .then(() => { navigate("/", { replace: true }); setLoginError(false) })
            .catch((error) => { console.log(error); setLoginError(true) } )
     
        // setEmailText('')
        // setPasswordText('')
      }
    

    
    
  
      function handleEmailChange(e:any) {
        setEmailText(e.target.value);
      }
      function handlePasswordChange(e:any) {
        setPasswordText(e.target.value);
      }
  

    return (

    <div>
    <form onSubmit={HandleLogIn}>
        <h1>Log In</h1>
       
           <label htmlFor="">Email:
            <input type="text" name="email" id="email" value={emailText} onChange={handleEmailChange}/>
                </label>
            <label htmlFor="">Password:
            <input type="text" name="password" id="password" value={passwordText} onChange={handlePasswordChange}/>
            </label>
            <button type='submit'>Log In</button>
            </form>
            <h3 className={ loginError === false ? "hideError" : "showError"} >Invalid Email Or Password</h3>
  
    </div>
    );
}