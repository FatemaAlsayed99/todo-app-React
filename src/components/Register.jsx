import React, { useState } from 'react';
import './Register.css'

function RegisterForm () {

  const [formData, setFormData] = useState({
    name:'',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({
    nameError:"",
    emailError:"",
    usernameError:"",
    passwordError:"",
    confirmpasswordError:"",
})

const HandleValidation = (evt) => {
    if (evt.target.name === 'name') {
      setFormData({ ...formData, name: evt.target.value });
      setErrors({
        ...errors,
        nameError: evt.target.value === '' ? 'Name is required' : '',
      });
    } else if (evt.target.name === 'email') {
      setFormData({ ...formData, email: evt.target.value });
      setErrors({
        ...errors,
        emailError:
          evt.target.value.trim() === ''
            ? 'Email is required'
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(evt.target.value)
            ? 'Please enter a valid email'
            : '',
      });
      
    }else if (evt.target.name === 'username') {
        setFormData({ ...formData, username: evt.target.value });
        setErrors({
          ...errors,
          usernameError: evt.target.value.includes(' ')
            ? 'Username should not contain spaces'
            : '',
        });
      }
    else if (evt.target.name === 'password') {
      setFormData({ ...formData, password: evt.target.value });
      setErrors({
        ...errors,
        passwordError:
          evt.target.value.trim() === ''
            ? 'Password is required'
            : evt.target.value.length < 8
            ? 'Password should be at least 8 characters'
            : !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/.test(
                evt.target.value
              )
            ? 'Password should contain at least one lowercase, one uppercase, one digit, and one special character'
            : '',
      });
    }else if (evt.target.name === 'confirmPassword') {
        setFormData({ ...formData, confirmPassword: evt.target.value });
        setErrors({
          ...errors,
          confirmpasswordError:
            evt.target.value === ''
              ? 'Confirm Password is required'
              : evt.target.value !== formData.password
              ? 'Passwords do not match'
              : '',
        });
      }
  };
  return (
    <form class="mt-3">
         <div class="mb-3">
      <h2>Registeration</h2>
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"
      value={formData.name} onChange={(e)=>{HandleValidation(e)}}
    />
    <p style={{color:'red'}}>{errors.nameError}</p>
  </div>
         <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
      value={formData.email} onChange={(e)=>{HandleValidation(e)}}
    />
    <p style={{color:'red'}}>{errors.emailError}</p>
  </div>
         <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">UserName</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username"
      value={formData.username} onChange={(e)=>{HandleValidation(e)}}
    />
    <p style={{color:'red'}}>{errors.usernameError}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password"
      value={formData.password} onChange={(e)=>{HandleValidation(e)}}
    />
    <p style={{color:'red'}}>{errors.passwordError}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="confirmPassword"
     value={formData.confirmPassword} onChange={(e)=>{HandleValidation(e)}}
     />
         <p style={{color:'red'}}>{errors.confirmpasswordError}</p>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  );
}

export default RegisterForm;