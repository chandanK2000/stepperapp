import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Register.css';
import { Link } from 'react-router-dom';
function RegisterForm() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsButtonDisabled(true);
      toast.success("Form Submitted Successfully");
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } else {
      toast.error("Form contains errors");
    }
  };



  // for the enter button click

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card cards ">
            <div className="card-header bg-info"><h4 className='text-center text-dark'><i class="bi bi-person-check"></i> Register</h4></div>
            <div className="card-body">
              <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                <div className="form-group">
                  <label htmlFor="name" className='my-2'>Name</label>
                  <input
                    type="text"
                    className="form-control inputs"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <span>{errors.name && <div className="text-danger">{errors.name}</div>}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className='my-2'>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}

                  />
                  <span>
                    {errors.email && <div className="text-danger">{errors.email}</div>}

                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className='my-2'>Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={handleTogglePassword}
                    >
                      <span>    {showPassword ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash"></i>}</span>
                    </button>
                  </div>
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <div className="form-group" >
                  <label htmlFor="confirm_password" className='my-2'>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm_password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}

                  />
                  <span>
                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                  </span>
                </div>
                <div className='text-center d-grid mt-2 mb-2'>
                  <button type="submit" className="registerbutton">
                    Register
                  </button>
                  <p className='text-center my-1'><a href="kdfjlskdf">Already Have  Account ?</a></p>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default RegisterForm;
