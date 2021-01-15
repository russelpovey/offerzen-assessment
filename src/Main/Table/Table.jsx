import React from "react";
import Row from "./Row";
import "./Table.css";

function Table({ data, setArchived, isAscDateOrder, setIsAscDateOrder }) {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Candidate</th>
          <th>Role</th>
          <th className="pointer" onClick={() => setIsAscDateOrder((p) => !p)}>
            Last Communication ⬍
          </th>
          <th>Salary</th>
          <th>Sent By</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            candidate,
            image,
            role,
            salary,
            sent_by,
            last_comms,
            id,
            archived,
          }) => (
            <Row
              {...{
                candidate,
                image,
                role,
                salary,
                sent_by,
                last_comms,
                archived,
                key: id,
                id,
                setArchived,
              }}
            />
          )
        )}
      </tbody>
    </table>
  );
}

export default Table;
