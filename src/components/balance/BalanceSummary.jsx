import { useEffect, useState } from "react";
import { getMyBalances } from "../../api/balance.api";
import SettlementModal from "./SettlementModal";


const BalanceSummary = () => {
  const [balances, setBalances] = useState(null);

  useEffect(() => {
    getMyBalances()
      .then(res => setBalances(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!balances) return <p>Loading balances...</p>;

  return (
    <div>
      <h3>Your Balance Summary</h3>

      <div style={{ marginBottom: "1rem" }}>
        <h4>You Owe</h4>
        {balances.youOwe.length === 0 && <p>🙌 You owe nothing!</p>}
        {balances.youOwe.map((b, idx) => (
          <p key={idx}>
            You owe <strong>{b.to.name}</strong> ₹{b.amount}
          </p>
        ))}
      </div>
          {balances.youOwe.map((b, idx) => (
  <div key={idx}>
    <p>
      You owe <strong>{b.to.name}</strong> ₹{b.amount}
    </p>
    <SettlementModal balance={b} onSettled={() => window.location.reload()} />
  </div>
))}

      <div>
        <h4>You Are Owed</h4>
        {balances.youAreOwed.length === 0 && <p>😎 Nobody owes you!</p>}
        {balances.youAreOwed.map((b, idx) => (
          <p key={idx}>
            <strong>{b.from.name}</strong> owes you ₹{b.amount}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BalanceSummary;
