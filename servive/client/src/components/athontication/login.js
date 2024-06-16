import './login.css'
const Login=()=>{
    return(
        <div className='loginpage-container'>
           <div className='login-container'>
           
           <h1 className='login-heading'>Login<br></br> Your Account</h1>
            <form >
                <lable className='loginpage-lable'>Email</lable><br></br>
                <input className='loginpage-input' type='text'></input><br></br>
                <lable className='loginpage-lable'>Password</lable><br></br>
                <input className='loginpage-input' type='password'></input><br></br>
                <button className='loginpage-submitbutton'>Submit</button><br></br>
                <lable className="login-redirecting">We Don't Have Account<a href='/signup'>SIGNUP</a></lable>
            </form>
           
           </div>
        </div>
    )
}
export default Login