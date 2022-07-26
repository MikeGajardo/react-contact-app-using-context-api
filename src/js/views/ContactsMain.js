import React, { useContext }  from 'react'
import { Link } from "react-router-dom";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js"
import ContactCard from '/workspace/react-hello-webapp/src/js/component/ContactCard.jsx';

export const ContactsMain = () => {
  const { store } = useContext(Context);

  return (
    <>
      <div>
        <button className="btn btn-success">
        <Link className="btn btn-success" to="/add">
          Add New Contact
          </Link>
          </button>
       </div>
         {store.contacts.map((info, index) => {
          return (
            <ContactCard
                key={index}
                fullname={info.full_name}
                address={info.address}
                phone={info.phone}
                email={info.email}
                id={info.id}
            />
          );
         })}
    </>
  );
};

export default ContactsMain;
