import { useEffect, useState } from "react";
import { getMyBalances } from "../../api/balance.api";
import SettlementModal from "./SettlementModal";
import "./BalanceSummary.css";

const BalanceSummary = () => {
  const [balances, setBalances] = useState(null);

  useEffect(() => {
    getMyBalances()
      .then(res => setBalances(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!balances) {
    return (
      <div className="balance-loading">
        <div className="loading-spinner"></div>
        <p>Loading balances...</p>
      </div>
    );
  }

  return (
    <div className="balance-summary-container">
      <div className="balance-header">
        <h2 style={{color: "red"}} className="balance-title">Balance Summary</h2>
        <p className="balance-subtitle">Track your payments and settlements</p>
      </div>

      <div className="balance-cards">
        {/* Left Side - You Owe */}
        <div className="balance-card you-owe-card">
          <div className="card-header">
            <div className="card-icon owe-icon">💸</div>
            <h3 className="card-title">You Need to Pay </h3>
          </div>

          <div className="card-content">
            {balances.youOwe.length === 0 ? (
              <div className="empty-state">
                <span className="empty-icon">🙌</span>
                <p>You owe nothing!</p>
                <small>All settled up</small>
              </div>
            ) : (
              <div className="balance-list">
                {balances.youOwe.map((b, idx) => (
                  <div key={idx} className="balance-item owe-item">
                    <div className="balance-info">
                      <div className="person-avatar">{b.to.name.charAt(0).toUpperCase()}</div>
                      <div className="balance-details">
                        <p className="person-name">{b.to.name}</p>
                        <p className="balance-amount owe-amount">₹{b.amount.toFixed(2)}</p>
                      </div>
                    </div>
                    <SettlementModal balance={b} onSettled={() => window.location.reload()} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side - You Are Owed */}
        <div className="balance-card you-are-owed-card">
          <div className="card-header">
            <div className="card-icon owed-icon">💰</div>
            <h3 className="card-title">You Will Recieve </h3>
          </div>

          <div className="card-content">
            {balances.youAreOwed.length === 0 ? (
              <div className="empty-state">
                <span className="empty-icon">😎</span>
                <p>Nobody owes you!</p>
                <small>Clean slate</small>
              </div>
            ) : (
              <div className="balance-list">
                {balances.youAreOwed.map((b, idx) => (
                  <div key={idx} className="balance-item owed-item">
                    <div className="balance-info">
                      <div className="person-avatar">{b.from.name.charAt(0).toUpperCase()}</div>
                      <div className="balance-details">
                        <p className="person-name">{b.from.name}</p>
                        <p className="balance-amount owed-amount">₹{b.amount.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;