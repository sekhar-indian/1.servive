import React,{Component} from 'react'
import './signup.css';
import axios from 'axios'
class Signup extends Component{

    submitData=(event)=>{
        event.preventDefault();
        let name=event.target.name.value;
        let email=event.target.email.value;
        let password=event.target.password.value;
        let data={
            name:name,
            email:email,
            password:password
        }
        console.log(data)
        axios.post('http://localhost:3000/Signup',data)
            .then(response => {
                console.log('Success:');
                // Handle success, maybe redirect to login or show a success message
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error, show an error message to the user
            });
        
    }
render(){


    return(
        <div className='loginpage-container'>
           <div className='login-container'>
                <h1 className='login-heading'>Create<br></br> New Account</h1>
                    <form  onSubmit={this.submitData} >
                    <label className='loginpage-lable' >Name</label><br></br>
                    <input className='loginpage-input' name='name' type='text'></input><br></br>
                    <label className='loginpage-lable'>Email</label><br></br>
                    <input className='loginpage-input' name='email' type='text'></input><br></br>
                    <label className='loginpage-lable'>Password</label><br></br>
                    <input className='loginpage-input' name='password' type='password'></input><br></br>
                    <button className='loginpage-submitbutton' type='submit'>Submit</button><br></br>
                    <label className="signup-redirecting">We Have Account<a href='/login'>Login</a></label>
                    </form>
           </div>
        </div>
    )
}
}
export default Signup;