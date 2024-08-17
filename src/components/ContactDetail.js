/* eslint-disable prettier/prettier */
import React from "react";
import { useLocation } from "react-router-dom";
import male from "../images/male.png";
import { Link } from "react-router-dom";
const ContactDetail = () => {
  //   const { id } = useParams(); // Keeps track of the contact ID from the URL
  const location = useLocation();
  const { contact } = location.state || {}; // Destructure contact from state

  if (!contact) {
    return <div>No contact details available.</div>;
  }

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={male} alt="user" />
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
      </div>
      <div
        className="ui center aligned container"
        style={{ marginTop: "20px" }}
      >
        <Link to="/">
          {" "}
          <button className=" ui black button"> Back to ContactList</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
