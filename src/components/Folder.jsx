import React from "react";
import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          <button className="button">
            {explorer.name} <br />
          </button>
        </span>

        <div
          style={{
            display: expand ? "block" : "none",
            paddingLeft: 15,
            marginTop: 2,
          }}
        >
          {explorer.items?.map((exp) => {
            return <Folder key="name" explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {explorer.name} <br />
      </span>
    );
  }
}

export default Folder;
