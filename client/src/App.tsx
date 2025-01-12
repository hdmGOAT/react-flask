import React, { useState, useEffect } from "react";
import "./App.css";

interface MemberData {
  members: string[];
}

function App() {
  const [data, setData] = useState<MemberData | null>(null);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err.message);
      });
  }, []);

  return (
    <div>
      {data?.members && data.members.length > 0 ? (
        data.members.map((member, index) => <p key={index}>{member}</p>)
      ) : (
        <p>No members found.</p>
      )}
    </div>
  );
}

export default App;
