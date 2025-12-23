import "./GroupCard.css";
import { Link } from "react-router-dom";

const GroupCard = ({ group }) => {
  return (
    <div className="group-card">
      <h4>{group.name}</h4>
      <Link to={`/groups/${group._id}`}>
        View Details
      </Link>
    </div>
  );
};

export default GroupCard;
