import { setUserId } from "firebase/analytics";
import {React,useState} from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate = useNavigate();

    const [userInput, setuserInput] = useState({
        email: "",
        password: ""
    });

    const handleEmail=(event)=>{
        setuserInput({
            email : event.target.value,
            password:userInput.password
        })


    }
    const handlePassword=(event)=>{
        setuserInput({
            email : userInput.email ,
            password:event.target.value
        })
    }

    const handleClick=(event)=>{
        if (userInput.email==="user@gmail.com" && userInput.password==="Password"){
            const log=() => navigate('/todolist')
                log();
        }
        else{
            alert("Enter valid Email or password")
        }
    }
    return(
        //<div className="Log">
           // <h1>LOGIN</h1>
           // <p><input placeholder="Email" value={userInput.email} onChange={handleEmail} /></p>
           // <p><input placeholder="Password" value={userInput.password} onChange={handlePassword}/></p>
           // <p><button onClick={handleClick}>Click to Login</button></p>
           // <button onClick={() => navigate('/Home')}>Create Account</button>
       // </div>
      
      
  <div className="login">
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>.</p>  
      <p>. </p>  
      <p>.</p>
     
  <div class="container">
  
      
    <h1>LOGIN</h1>
   
    <form>
      <div class="form-control">
        <input type="text" required placeholder="Email" value={userInput.email} onChange={handleEmail}></input>
        
      </div>
      <div class="form-control">
        <input type="password" required placeholder="Password" value={userInput.password} onChange={handlePassword}></input>
        
      </div>
      <button class="btn" onClick={handleClick}>Login</button>
      <p class="text" onClick={() => navigate('/Home')}>Don't have an account? Register</p>
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

}

export default Login;