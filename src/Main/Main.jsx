import "./Main.css";
import Table from "./Table/Table";
import data from "../assets/interviews.js";
import SearchBar from "./SearchBar/SearchBar";
import { useMemo, useState } from "react";

// Local Helpers
function toDate(entry) {
  return new Date(entry.last_comms.date_time);
}
function sortByDate(asc = true, entries = []) {
  return asc
    ? entries.slice().sort((a, b) => toDate(b) - toDate(a))
    : entries.slice().sort((a, b) => toDate(a) - toDate(b));
}
// End Local Helpers

function Body() {
  const [entries, setEntries] = useState(
    data.map((entry, id) => ({ ...entry, archived: false, id }))
  );
  const [query, setQuery] = useState("");
  const [showArchived, setShowArchived] = useState(true);
  const [isAscDateOrder, setIsAscDateOrder] = useState(true);

  function setArchived(id) {
    setEntries((p) =>
      p.map((entry) => ({
        ...entry,
        archived: entry.id === id ? !entry.archived : entry.archived,
      }))
    );
  }

  const filtered = useMemo(() => {
    let refined = entries;
    if (query.length > 0) {
      refined = refined.filter(({ candidate }) =>
        candidate.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (!showArchived) {
      refined = refined.filter(({ archived }) => !archived);
    }

    return sortByDate(isAscDateOrder, refined);
  }, [query, showArchived, isAscDateOrder, entries]);

  return (
    <div className="bg-gray h-100">
      <SearchBar
        query={query}
        setQuery={setQuery}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
      />
      <div className="container body pad-h">
        <div className="summary">{filtered.length} interview requests</div>
        <div className="raised bg-white round">
          <Table
            data={filtered}
            isAscDateOrder={isAscDateOrder}
            setIsAscDateOrder={setIsAscDateOrder}
            setArchived={setArchived}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
