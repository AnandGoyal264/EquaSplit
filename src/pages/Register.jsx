import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import login_img from '../assets/login_img.png'

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-left">
          <img src={login_img} alt="Genome Analysis" className="register-image" />
        </div>
        
        <div className="register-right">
          <div className="register-form-wrapper">
            <div className="register-header">
              <h1 className="register-title">Create Account</h1>
              <p className="register-subtitle">Join our Expense Tracking tools</p>
            </div>
            
            <form onSubmit={submit} className="register-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>
              
              <button type="submit" className="register-button">
                Register
              </button>
              
              <div className="register-footer">
                <p>Already have an account? <a href="/login">Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;