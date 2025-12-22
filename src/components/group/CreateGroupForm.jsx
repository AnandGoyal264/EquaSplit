import { useState } from "react";
import api from "../../api/axios";

const CreateGroupForm = ({ onCreated }) => {
  const [name, setName] = useState("");

  const createGroup = async (e) => {
    e.preventDefault();

    if (!name) return alert("Group name is required");

    try {
      await api.post("/groups", { name });

      alert("Group created!");

      if (onCreated) onCreated();

      setName("");
    } catch (err) {
      alert("Failed to create group");
      console.log(err);
    }
  };

  return (
    <form onSubmit={createGroup} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="Enter group name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button>Create</button>
    </form>
  );
};

export default CreateGroupForm;
