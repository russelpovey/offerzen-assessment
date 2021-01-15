import React from "react";
import { formatDate } from "../../utils";

function NotificationCell({ message = "", time = "", notify = false }) {
  return (
    <div className={"notification-cell "}>
      <span className={"notify ".concat(notify ? "active" : "")} />
      <div className="description">{message}</div>
      <span className="time">{formatDate(time)}</span>
    </div>
  );
}

export default NotificationCell;
