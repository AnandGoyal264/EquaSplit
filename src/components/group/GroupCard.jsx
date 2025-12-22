
import { Link } from "react-router-dom";

const GroupCard = ({ group }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      marginBottom: "0.5rem",
      borderRadius: "6px"
    }}>
      <h4>{group.name}</h4>
      <Link to={`/groups/${group._id}`}>
        View Details
      </Link>
    </div>
  );
};

export default GroupCard;
