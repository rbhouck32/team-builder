import React from "react";

import "./App.css";
import { useState } from "react";
import MemberForm from "./components/MemberForm";
import MemberCard from "./components/MemberCard";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Rob",
      email: "babyDev@codeland.com",
      role: "Full-Stack Developer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <MemberForm addNewMember={addNewMember} />
      <MemberCard members={members} />
    </div>
  );
}

export default App;
