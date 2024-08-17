import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const inputEl = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  // Reverse the contacts array directly without sorting
  const lifoContacts = [...props.contacts].reverse();

  // Render contacts in LIFO order without alphabetical sorting
  const renderContactList = lifoContacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="ui celled list">
      <h2 style={{ display: "inline-block" }}>Contact List</h2>
      <Link to="/add">
        <button className="ui button blue" style={{ float: "right" }}>
          Add Contact
        </button>
      </Link>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contact"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon" />
          {/* Corrected icon class */}
        </div>
      </div>
      {renderContactList}
    </div>
  );
};

export default ContactList;
