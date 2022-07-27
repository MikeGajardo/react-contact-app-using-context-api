import React, { useContext, useEffect, useState }  from 'react'
import { Link } from "react-router-dom";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js"
import ContactCard from '/workspace/react-hello-webapp/src/js/component/ContactCard.jsx';

export const ContactsMain = () => {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    actions.getContacts();
  }, []);
  useEffect(() => {
    setContacts(store.contacts)
  }, [store.contacts]);

  return (
    <>
      <div>
        <button className="btn btn-success">
        <Link className="btn btn-success" to="/add">
          Add New Contact
          </Link>
          </button>
       </div>
       <div>
         {contacts.map((info, index) => {
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
        </div>
    </>
  );
};

export default ContactsMain;
