import React, {useState, useContext, useEffect} from 'react';
import "./LoginPage.scss";
import AuthContext from '../../context/authContext';
import axios from '../../api/axios';
const LOGIN_URL = '/auth/login';

const LoginPage = () => {
    const { setAuth } = useContext(AuthContext);
    const [loginData, setLoginData] = useState({
        username: "",
        password: "" 
    });

    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState('');

    const formDataHandler = (event, property) => {
        setLoginData({
            ...loginData,
            [property]: event.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL, JSON.stringify(loginData), {
                headers: {'Content-Type': 'application/json'},
            });

            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            const {user, pwd} = loginData;
            setAuth({user, pwd, roles, accessToken});
            setLoginData({
                ...loginData,
                username: "",
                password: ""
            });
            setSuccess(true);
            console.log(success);
        } catch(err){
            if(!err?.response){
                setErrorMsg('No server response');
            }
            if(err.response?.status === 400){
                setErrorMsg("Missing username or password");
            }
            if(err.response?.status === 401){
                console.log("unauthorized entered");
                setErrorMsg("Unauthorized");
            } 
            console.log(errorMsg);
        }
    }

    // useEffect(() => {
    //     setErrorMsg('');
    // }, [loginData]);

    return (
        <section className = "login">
            <div className = "container">
                <div className='login-content'>
                    <div className='section-title'>
                        <h3>Login Here!</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-elem'>
                            <label htmlFor='username'>Username:</label>
                            <input type = "text" id = "username" onChange = {(e) => formDataHandler(e, "username")} value = {loginData.username} required />
                            <span className='form-text'>Username text</span>
                        </div>

                        <div className='form-elem'>
                            <label htmlFor='password'>Password:</label>
                            <input type = "password" id = "password" onChange={(e) => formDataHandler(e, "password")} value = {loginData.password} required />
                            <span className='form-text'>Password text</span>
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage