import { useState } from "react";
import ContactsList from "./ContactsList";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={contact.name}
          placeholder="Name"
          name="name"
          onChange={changeHandler}
        />
        <input
          type="text"
          value={contact.lastName}
          placeholder="Last Name"
          name="lastName"
          onChange={changeHandler}
        />
        <input
          type="email"
          value={contact.email}
          placeholder="Email"
          name="email"
          onChange={changeHandler}
        />
        <input
          type="number"
          value={contact.phone}
          placeholder="Phone"
          name="phone"
          onChange={changeHandler}
        />
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
