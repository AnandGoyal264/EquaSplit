import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import AddExpenseModal from "../components/expense/AddExpenseModal";
import AddMemberModal from "../components/group/AddMemberModal";
import GroupMember from "../components/group/GroupMember";
import './GroupPage.css';




export default function GroupPage() {
  const { id } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    api.get(`/groups/${id}`)
      .then(res => setGroup(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!group) return (
    <div className="loading-container">
      <p>Loading...</p>
    </div>
  );

  return (
    <div className="group-page">
      <div className="group-page-header">
        <h2>{group.name}</h2>
        <div className="group-actions">
          <AddExpenseModal
            group={group}
            onAdded={() => window.location.reload()}
          />
          <AddMemberModal
            groupId={group._id}
            onAdded={() => window.location.reload()}
          />
        </div>
      </div>

      <div className="members-section">
        <h3>Members</h3>
        <div className="members-list">
          {group.members.length > 0 ? (
            group.members.map(m => <GroupMember key={m._id} member={m} />)
          ) : (
            <div className="empty-members">
              <p>No members yet. Add your first member!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
