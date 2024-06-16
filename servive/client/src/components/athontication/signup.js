import './signup.css'
const Signup=()=>{
    return(
        <div className='loginpage-container'>
           <div className='login-container'>
           <h1 className='login-heading'>Create<br></br> New Account</h1>
            <form >
                <lable className='loginpage-lable'>Name</lable><br></br>
                <input className='loginpage-input' type='text'></input><br></br>
                <lable className='loginpage-lable'>Email</lable><br></br>
                <input className='loginpage-input' type='text'></input><br></br>
                <lable className='loginpage-lable'>Password</lable><br></br>
                <input className='loginpage-input' type='password'></input><br></br>
                <button className='loginpage-submitbutton'>Submit</button><br></br>
                <lable className="signup-redirecting">We Have Account<a href='/login'>Login</a></lable>
            </form>
           </div>
        </div>
    )
}
export default Signup;