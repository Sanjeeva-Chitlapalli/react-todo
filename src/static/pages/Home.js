import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../backend/firebaseHandler";



const Home = () => {

    const [userInput, setuserInput] = useState({
        email: "",
        password: ""
    });


    const navigate = useNavigate();

    const handleClick = async() => {
        try{
          await createUserWithEmailAndPassword(auth,userInput.email,userInput.password);
          alert("Account created")
          const log=() => navigate('/')
          log();
        }catch(err){

        }
        
    }
   

    const handleEmail = (event) => {
        setuserInput({
            email: event.target.value,
            password: userInput.password
        })

    }

    const handlePassword = (event) => {
        setuserInput({
            email: userInput.email,
            password: event.target.value
        })

    }

   


    return ( 
        <div className="bodyy">
        <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>. </p>  
      <p>.</p>
      
       
        <div className="containerr">
    
        
      <h1>Create account</h1>
     
      <form>
        <div class="form-control">
          <input type="text" required value = { userInput.email } onChange = { handleEmail } placeholder = "Email id"></input>
          
        </div>
        <div class="form-control">
          <input type="password" required placeholder="Password" value = { userInput.password } onChange = { handlePassword }></input>
          
        </div>
        <p > < button class="btn1" onClick = {handleClick} > Create account </button></p >
        <p class="text" onClick={() => navigate('/')}></p>
      </form>
    </div>
    <script src="js.js"></script>
    <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>. </p>  
      <p>.</p>
      <p>.</p>
    </div>
  
    
      )
        /*<div className="momo">
            <header>

        <p> < input value = { userInput.email } onChange = { handleEmail } placeholder = "Email id" /></p >
        <p > < input value = { userInput.password } onChange = { handlePassword } placeholder = "Password" /></p >

        <p > < button onClick = {handleClick} > Create account </button></p >
        <button onClick = {() => navigate('/contact-me')} > About </button>
        </header> 
        </div >*/
    
}
export default Home;