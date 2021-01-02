import React,{useState,useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import fire from '../fire'
const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  
  
  
  
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearError();
    fire.auth().signInWithEmailAndPassword(email,password)
     .catch((err) => {
         switch (err.code) {
           case "auth/invalid-email":
           case "auth/user-disable":
           case "auth/user-not-found":
             setEmailError(err.message);
             break;
           case "auth/wrong-password":
             setPasswordError(err.message);
             break;
         }
         
       });
       return <Redirect to="/login" />
     }
 
     const handleSignup = () => {
       clearError();
      fire.auth()
      .createUserWithEmailAndPassword(email,password)
      .catch( (err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email" :
          
          setEmailError(err.message);
          break ;
          case "auth/weak-password" :
          setPasswordError(err.message);
          break;
        };
      });
    }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      }
        else {
          setUser("");
        }
      }
    );
  };

useEffect(() => {
  authListener();

}, []);

    return (
       <section className="login">
           <div className="loginContainer"><div>
                <label> Username </label>
                    <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                    <input type="password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <p classname="errorMsg">{passwordError}</p>
            </div>
            
           <div className="btbContainer"> 
               {hasAccount ? (
               <>
               <a href="/logout"><button onClick={handleLogin}>  Sign in</button></a>
               <p>Don't have an account?<span onClick={() => setHasAccount(!hasAccount)}> Sign up</span> </p>
               </>
                 ) : (
               <>
               <button onClick={handleSignup} href="/logout">  Sign up</button>
               <p>Have an account?<span onClick={() => setHasAccount(!hasAccount)}>  Sign in</span></p>
               </> 
               )
                }

                 </div>
           </div>
           
       </section>
    );
};

export default Login;