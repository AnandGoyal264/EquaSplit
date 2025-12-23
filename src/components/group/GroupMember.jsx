import "./GroupMember.css";

const GroupMember = ({ member }) => {
  // Get first letter of name for avatar
  const initial = member.name ? member.name.charAt(0).toUpperCase() : "?";
  
  return (
    <div className="group-member">
      <div className="group-member-avatar">
        {initial}
      </div>
      <div className="group-member-info">
        <span className="group-member-name">{member.name}</span>
        <span className="group-member-email">{member.email}</span>
      </div>
    </div>
  );
};

export default GroupMember;