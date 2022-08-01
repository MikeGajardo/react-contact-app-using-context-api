import React, { useContext, useEffect, useState }  from 'react'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import ContactCard from '../component/ContactCard.jsx';

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
      <div className="text-white">
        <button className="btn btn-success top-cta">
        <Link className="btn btn-success top-cta" to="/add">
          Add New Contact
          </Link>
          </button>
       </div>
       <div className="text-white">
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
