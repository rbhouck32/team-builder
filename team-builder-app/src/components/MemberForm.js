import React, { useState } from "react";

var createReactClass = require("create-react-class");

const MemberForm = props => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });
  // handle change
  const handleChange = event => {
    console.log("event", event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  // handle submit
  const handleSubmit = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  // const DropDownSelctor = React.createClass({
  //   getInitialState: function() {
  //     return { selectValue: "" };
  //   },
  //   handleChange: function(e) {
  //     this.setState({ selectValue: e.target.value });
  //   }
  // });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>

      <input
        type="text"
        id="name"
        name="name"
        value={member.name}
        placeholder="Enter your Name"
        onChange={handleChange}
      />
      <br />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={member.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <br />

      {/* <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        name="role"
        value={member.role}
        placeholder="Enter your Role"
        onChange={handleChanges}
      /> */}

      <select name="role" id="role" onChange={handleChange}>
        <option value="">--Please choose a role--</option>
        <option value="backend-engineer">Backend Engineer</option>
        <option value="frontend-engineer">Frontend Engineer</option>
        <option value="designer">Designer</option>
        <option value="Data Science Nerd">Data Science Nerd</option>
        <option value="FS-dev">Full-Stack Engineer</option>
      </select>

      <br />
      <br />
      <button type="submit" value="Submit Form">
        Submit Form
      </button>
    </form>
  );
};

export default MemberForm;
