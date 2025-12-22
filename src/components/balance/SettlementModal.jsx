import { useState } from "react";
import { settleBalance } from "../../api/balance.api";

const SettlementModal = ({ balance, onSettled }) => {
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);

  const handleSettle = async (e) => {
    e.preventDefault();

    if (!amount) return alert("Enter amount");

    try {
      await settleBalance({
        toUserId: balance.to._id || balance.from._id,
        amount: parseFloat(amount),
      });

      alert("Settlement successful!");

      if (onSettled) onSettled();
      setShow(false);
      setAmount("");
    } catch (err) {
      alert("Failed to settle");
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={() => setShow(true)}>Settle</button>

      {show && (
        <div style={{ border: "1px solid black", padding: "1rem", marginTop: "1rem" }}>
          <h4>Settle Balance</h4>

          <p>
            Enter amount to settle. <br />
            Total owed: ₹{balance.amount}
          </p>

          <form onSubmit={handleSettle}>
            <input
              type="number"
              placeholder="Amount"
              onChange={e => setAmount(e.target.value)}
            />
            <br /><br />

            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShow(false)}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};

export default SettlementModal;
