import {Link} from 'react-router-dom'
import './Login.css'

const Login = () => {

    return (

        <div className='login-container'>
            
            <form className='form'>
                <div><h1>Login</h1></div>
                        <div className='username'>
                            <input className='username-input' type="text" placeholder='username/email' />
                        </div>
                        <div className='password'>
                            <input className='password-input' type="text" placeholder='password' />
                        </div>
                        <div className='login-btn'>
                            <Link className='login-btn' to='/dashboard'>Login</Link>
                        </div>
                        {/* <div className='remember-forget'>
                            <div className='remember'>
                                <input className='checkbox' type="checkbox" />
                                <Link className='remember-me' to='/rememberme' >remember me</Link>
                            </div>
                            <div className='forget'>
                                <Link className='forget-password' to='/forgetpassword' >forget password</Link>

                            </div>
                        </div> */}

                    </form>
        </div>

    )
}
export default Login