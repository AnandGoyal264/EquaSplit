import { useEffect, useState } from "react";
import { getGroupExpenses } from "../../api/expense.api";

const ExpenseList = ({ groupId }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getGroupExpenses(groupId)
      .then(res => setExpenses(res.data))
      .catch(err => console.log(err));
  }, [groupId]);

  if (expenses.length === 0) {
    return <p>No expenses yet</p>;
  }

  return (
    <div>
      <h3>Expenses</h3>

      {expenses.map(exp => (
        <div
          key={exp._id}
          style={{
            border: "1px solid #ddd",
            padding: "8px",
            marginBottom: "6px",
            borderRadius: "6px"
          }}
        >
          <p><strong>{exp.description}</strong></p>
          <p>₹{exp.amount}</p>
          <p>
            Paid by <strong>{exp.paidBy.name}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
