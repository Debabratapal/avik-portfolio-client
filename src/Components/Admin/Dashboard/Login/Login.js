import React , { useState } from 'react';
import './Login.css';

export const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('')

  return (
    <div className="form-container">
    <div className="login-form">
      <h2 className="header">Welcome!</h2>
     
          <input 
          className="formControl"
          value={username} 
          placeholder="username"  
          onChange={(e) => setUserName(e.target.value)}/>
       
        
          <input 
          className="formControl"
          value={password} 
          placeholder="password"  
          onChange={(e) => setPassword(e.target.value)}/>
       
        <button>Login</button>
      
    </div>
    </div>
  )
}