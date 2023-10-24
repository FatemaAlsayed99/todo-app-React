// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })

const [errors, setErrors] = useState({
    emailError:"",
    passwordError:""
})

      const HandleValidation=(evt)=>{
      if(evt.target.name=='email'){
        setFormData({ ...formData, email: evt.target.value})
        setErrors({
           ...errors,
            emailError: evt.target.value === "" ? "Email is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(evt.target.value) ? "Please enter a valid email" : ""
          });
      }else if(evt.target.name=='password'){
        setFormData({ ...formData, password: evt.target.value})
        setErrors({
            ...errors,
            passwordError: evt.target.value === "" ? "Password is required" : evt.target.value.length < 6 ? "Password should be at least 8 characters" : ""
          });
      }
      }
  return (
    <form class="mt-3">
  <div class="mb-3">
      <h2>Login</h2>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
      value={formData.email} onChange={(e)=>{HandleValidation(e)}}
    />
    <p style={{color:'red'}}>{errors.emailError}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password"
     value={formData.password} onChange={(e)=>{HandleValidation(e)}}
     />
         <p style={{color:'red'}}>{errors.passwordError}</p>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  );
}

export default LoginForm;