import { useState } from "react";
import api from "../../api/axios";

const AddMemberModal = ({ groupId, onAdded }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!email) return alert("Email is required!");

    try {
      await api.post(`/groups/${groupId}/add-member`, { email });

      alert("Member added!");

      if (onAdded) onAdded();

      setEmail("");
      setShow(false);
    } catch (err) {
      alert("Failed to add member");
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={() => setShow(true)}>Add Member</button>

      {show && (
        <div style={{ border: "1px solid #999", padding: "1rem", marginTop: ".5rem" }}>
          <h4>Add Member</h4>
          <form onSubmit={handleAdd}>
            <input
              type="email"
              placeholder="Enter member email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />
            <button type="submit">Add</button>
            <button type="button" onClick={() => setShow(false)}>Close</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddMemberModal;
