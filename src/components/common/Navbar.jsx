import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand Section */}
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <div className="brand-icon">💰</div>
            <span className="brand-name">ExpenseTracker</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="navbar-menu">
          <Link to="/" className="nav-link">
            <span className="nav-icon">📊</span>
            <span>Dashboard</span>
          </Link>
        </div>

        {/* User Section */}
        {user && (
          <div className="navbar-user">
            <div className="user-info">
              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="user-name">{user.name}</span>
            </div>
            <button onClick={logout} className="logout-btn">
              <span className="logout-icon">🚪</span>
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;