import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js";

export const ContactCard = (props) => {
  const { actions } = useContext(Context);
  return (
    <div className="card contact-card m-auto p-3">
      <div className="details d-flex">
        <img
          className="profile-pic mx-3"
          src="https://external-preview.redd.it/Tz6nNKdrp6UlZhO26SIFcl8Tl1aH_eF7YLYK7A7N3RU.jpg?auto=webp&s=a9189138061b013f03beefdc3111d4dc97d97a1a"
        ></img>
        <div className="contact-text">
          <h4 className="mx-2 p-1">{props.fullname}</h4>
          <div className="d-flex">
          <i className="fas fa-map-marker-alt text-muted mx-2 p-1" />
          <p>{props.address}</p>
          </div>
          <div className="d-flex">
          <span className="fa fa-phone fa-fw text-muted mx-2 p-1" />
          <p>{props.phone}</p><br></br>
          </div>
          <div className="d-flex">
          <span className="fa fa-envelope fa-fw text-muted mx-2 p-1" />
          <p>{props.email}</p>
          </div>
        </div>
        <div className="card-icons">
          <button className="mx-2" onClick={() => actions.deleteContact(props.id)}>
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
