import React from "react";

const MemberCard = props => {
  return (
    <div className="mamber-card">
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default MemberCard;
