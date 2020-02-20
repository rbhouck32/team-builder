import React, { useState } from "react";

const MemberForm = props => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChanges = event => {
    console.log("event", event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>

      <input
        type="text"
        id="name"
        name="name"
        value={member.name}
        placeholder="Enter your Name"
        onChange={handleChanges}
      />
      <br />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={member.email}
        placeholder="Enter your Email"
        onChange={handleChanges}
      />
      <br />
      <select name="team-roles" id="role">
        <option value="">--Please choose a role--</option>
        <option value="backend-engineer">Backend Engineer</option>
        <option value="frontend-engineer">Frontend Engineer</option>
        <option value="designer">Designer</option>
        <option value="DS">Data Science Nerd</option>
        <option value="FS-dev">Full-Stack Engineer</option>
      </select>
      <br />
      <button type="submit" value="Submit Form">
        Submit Form
      </button>
    </form>
  );
};

export default MemberForm;
