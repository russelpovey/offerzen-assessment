import React from "react";
import NotificationCell from "./NotificationCell";

function Row({
  candidate,
  image,
  role,
  salary,
  sent_by,
  last_comms,
  archived,
  id,
  setArchived,
}) {
  return (
    <tr className={last_comms.unread ? "active" : ""}>
      <td className="flex-center">
        <img src={image} className="avatar-img" alt="avatar" />
        {candidate}
      </td>
      <td>{role}</td>
      <td>
        <NotificationCell
          notify={last_comms.unread}
          message={last_comms.description}
          time={last_comms.date_time}
        />
      </td>
      <td>R {salary}</td>
      <td>{sent_by}</td>
      <td>
        <div className="action" onClick={() => setArchived(id)}>
          {archived ? "Unarchive" : "Archive"}
        </div>
      </td>
    </tr>
  );
}

export default Row;
