import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import AddExpenseModal from "../components/expense/AddExpenseModal";
import AddMemberModal from "../components/group/AddMemberModal";
import GroupMember from "../components/group/GroupMember";



export default function GroupPage() {
  const { id } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    api.get(`/groups/${id}`)
      .then(res => setGroup(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!group) return <p>Loading...</p>;

  return (
    <div>
      <h2>{group.name}</h2>
      <AddExpenseModal
  group={group}
  onAdded={() => window.location.reload()}
/>
<AddMemberModal
  groupId={group._id}
  onAdded={() => window.location.reload()}
/>

<h3>Members</h3>
{group.members.map(m => <GroupMember key={m._id} member={m} />)}

      <h3>Members</h3>
      <ul>
        {group.members.map(m => (
          <li key={m._id}>{m.name} ({m.email})</li>
        ))}
      </ul>
    </div>
  );
}
