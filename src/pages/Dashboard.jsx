import { useEffect, useState } from "react";
import api from "../api/axios";
import CreateGroupForm from "../components/group/CreateGroupForm";
import BalanceSummary from "../components/balance/BalanceSummary";
import GroupCard from "../components/group/GroupCard";
import './dashboard.css'

export default function Dashboard() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    api.get("/groups")
      .then(res => {
        setGroups(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleGroupCreated = () => {
    setShowCreateForm(false);
    window.location.reload();
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Manage your expenses and groups efficiently</p>
        </div>
      </div>

      {/* Balance Summary Section */}
      <div className="balance-section">
        <BalanceSummary />
      </div>

      {/* Groups Section */}
      <div className="groups-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Your Groups</h2>
            <p className="section-subtitle">Collaborate and track expenses with friends</p>
          </div>
          <button 
            className="create-group-btn"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            <span className="btn-icon">+</span>
            <span className="btn-text">Create Group</span>
          </button>
        </div>

        {/* Create Group Form */}
        {showCreateForm && (
          <div className="create-form-wrapper">
            <div className="form-card">
              <div className="form-header">
                <h3>Create New Group</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowCreateForm(false)}
                >
                  ×
                </button>
              </div>
              <CreateGroupForm onGroupCreated={handleGroupCreated} />
            </div>
          </div>
        )}

        {/* Groups Grid */}
        {loading ? (
          <div className="loading-container">
            <div className="loader"></div>
            <p>Loading your groups...</p>
          </div>
        ) : groups.length > 0 ? (
          <div className="groups-grid">
            {groups.map(group => (
              <GroupCard key={group._id} group={group} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📁</div>
            <h3>No groups yet</h3>
            <p>Create your first group to start tracking expenses</p>
            <button 
              className="empty-cta-btn"
              onClick={() => setShowCreateForm(true)}
            >
              Create Your First Group
            </button>
          </div>
        )}
      </div>
    </div>
  );
}