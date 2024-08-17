// // import React from "react";
// // import { Link } from "react-router-dom";
// // import user from "../images/user.jpg";

// // const ContactCard = (props) => {
// //   const { id, name, email } = props.contact;

// //   const handleDeleteClick = () => {
// //     const confirmDelete = window.confirm(
// //       "Are you sure you want to delete this contact?",
// //     );
// //     if (confirmDelete) {
// //       props.clickHandler(id);
// //     }
// //   };

// //   return (
// //     <div className="item">
// //       <img className="ui avatar image" src={user} alt="user" />
// //       <div className="content">
// //         <Link
// //           to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
// //         >
// //           <div className="header">{name}</div>
// //           <div>{email}</div>
// //         </Link>
// //       </div>
// //       <div className="right floated content">
// //         <i
// //           className="trash alternate outline icon"
// //           style={{
// //             color: "red",
// //             marginTop: "7px",
// //             cursor: "pointer",
// //             marginLeft: "5px",
// //           }}
// //           onClick={handleDeleteClick}
// //           title="Delete the Contact"
// //         ></i>
// //         <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
// //           <i
// //             className="edit alternate outline icon"
// //             style={{
// //               color: "blue",
// //               marginTop: "7px",
// //               cursor: "pointer",
// //             }}
// //             onClick={handleDeleteClick}
// //             title="Edit the Contact"
// //           ></i>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactCard;
// import React from "react";
// import { Link } from "react-router-dom";
// import user from "../images/user.jpg";

// const ContactCard = (props) => {
//   const { id, name, email } = props.contact;

//   const handleDeleteClick = () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this contact?",
//     );
//     if (confirmDelete) {
//       props.clickHandler(id);
//     }
//   };

//   return (
//     <div className="item">
//       <img className="ui avatar image" src={user} alt="user" />
//       <div className="content">
//         <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
//           <div className="header">{name}</div>
//           <div>{email}</div>
//         </Link>
//       </div>
//       <div className="right floated content">
//         <i
//           className="trash alternate outline icon"
//           style={{
//             color: "red",
//             marginTop: "7px",
//             cursor: "pointer",
//             marginLeft: "10px",
//           }}
//           onClick={handleDeleteClick}
//           title="Delete the Contact"
//         ></i>
//         <Link to={`/edit`} state={{ contact: props.contact }}>
//           <i
//             className="edit alternate outline icon"
//             style={{
//               color: "blue",
//               marginTop: "7px",
//               cursor: "pointer",
//             }}
//             title="Edit the Contact"
//           ></i>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ContactCard;
// ContactCard.js
import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?",
    );
    if (confirmDelete) {
      props.clickHandler(id);
    }
  };

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div className="right floated content">
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            marginTop: "7px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
          onClick={handleDeleteClick}
          title="Delete the Contact"
        ></i>
        <Link to={`/edit`} state={{ contact: props.contact }}>
          <i
            className="edit alternate outline icon"
            style={{
              color: "blue",
              marginTop: "7px",
              cursor: "pointer",
            }}
            title="Edit the Contact"
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
