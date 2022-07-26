import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js";

export const ContactCard = (props) => {
  const { actions } = useContext(Context);
  return (
    <div className="card contact-card m-auto p-3">
      <div className="details d-flex">
        <img
          className="profile-pic ms-3"
          src="https://external-preview.redd.it/Tz6nNKdrp6UlZhO26SIFcl8Tl1aH_eF7YLYK7A7N3RU.jpg?auto=webp&s=a9189138061b013f03beefdc3111d4dc97d97a1a"
        ></img>
        <div className="contact-text">
          <h4>{props.fullname}</h4>
          <i className="fas fa-map-marker-alt text-muted mr-3" />
          <p>{props.address}</p>
          <span className="fa fa-phone fa-fw text-muted mr-3" />
          <p>{props.phone}</p>
          <span className="fa fa-envelope fa-fw text-muted mr-3" />
          <p>{props.email}</p>
        </div>
        <div className="card-icons">
          <button onClick={() => actions.deleteContact(props.id)}>
            <i className="fas fa-trash-alt btn" aria-hidden="true"></i>
          </button>
          <Link to={`/edit-contact/${props.id}`}>
            <button>
            <i className="fas fa-edit btn" aria-hidden="true"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
