const GroupMember = ({ member }) => {
  return (
    <div style={{
      borderBottom: "1px solid #eee",
      padding: "4px 0"
    }}>
      {member.name} — {member.email}
    </div>
  );
};

export default GroupMember;
