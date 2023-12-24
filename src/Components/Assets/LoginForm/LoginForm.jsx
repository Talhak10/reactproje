import React from 'react';
import './LoginForm.css';
import { FaUser , FaLock} from "react-icons/fa";
import { Link } from 'react-router-dom';


const LoginForm =() => {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>GİRİŞ YAP</h1>
                <div className="input-box">
                    <input type="text" placeholder='Kullanıcı adı' required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Şifre' required />
                    <FaLock className='icon'/>
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox'/>Beni hatırla</label>
                </div>
                <button type='submit'><Link to='/home'>Giriş yap</Link></button>
                
              

            </form>

        </div>
    );
};

export default LoginForm;