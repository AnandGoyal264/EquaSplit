import { useState, useEffect } from "react";
import api from "../../api/axios";

const AddExpenseModal = ({ group, onAdded }) => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [splitType, setSplitType] = useState("EQUAL");
  const [splits, setSplits] = useState([]);

  useEffect(() => {
    if (group && splitType === "EQUAL") {
      // auto populate equal splits
      setSplits([]);
    } else if (group && splitType !== "EQUAL") {
      // for exact & percent initialize
      setSplits(group.members.map(m => ({
        userId: m._id,
        amount: 0,
        percent: 0
      })));
    }
  }, [group, splitType]);

  const handleAdd = async (e) => {
    e.preventDefault();

    const body = {
      groupId: group._id,
      description,
      amount: parseFloat(amount),
      splitType,
      splits: splitType === "EQUAL" ? [] : splits
    };

    try {
      await api.post("/expenses", body);

      alert("Expense added!");

      if (onAdded) onAdded();

      setShow(false);
      setDescription("");
      setAmount("");
      setSplitType("EQUAL");
    } catch (err) {
      alert("Error adding expense");
      console.log(err);
    }
  };

  const updateSplit = (index, field, value) => {
    const newSplits = [...splits];
    newSplits[index][field] = value;
    setSplits(newSplits);
  };

  return (
    <>
      <button onClick={() => setShow(true)}>Add Expense</button>

      {show && (
        <div style={{ border: "1px solid black", padding: "1rem", marginTop: "1rem" }}>
          <h3>Add Expense</h3>

          <form onSubmit={handleAdd}>
            <input
              placeholder="Description"
              onChange={e => setDescription(e.target.value)}
            />
            <br />

            <input
              placeholder="Amount"
              type="number"
              onChange={e => setAmount(e.target.value)}
            />
            <br />

            <select onChange={e => setSplitType(e.target.value)}>
              <option value="EQUAL">Equal Split</option>
              <option value="EXACT">Exact Amount</option>
              <option value="PERCENT">Percentage</option>
            </select>

            <br />

            {splitType !== "EQUAL" &&
              splits.map((s, i) => (
                <div key={i}>
                  <span>{group.members[i].name}</span>
                  {splitType === "EXACT" && (
                    <input
                      type="number"
                      placeholder="Amount"
                      onChange={(e) =>
                        updateSplit(i, "amount", parseFloat(e.target.value))
                      }
                    />
                  )}
                  {splitType === "PERCENT" && (
                    <input
                      type="number"
                      placeholder="%"
                      onChange={(e) =>
                        updateSplit(i, "percent", parseFloat(e.target.value))
                      }
                    />
                  )}
                </div>
              ))}

            <button type="submit">Submit</button>
            <button onClick={() => setShow(false)} type="button">Close</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddExpenseModal;
