import React, { useContext, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UserProps } from "../types/user";
import Contact from "./Contact";

const ContactList: React.FC = () => {
  const { users } = useTypedSelector((state) => state.user);
  const { text } = useTypedSelector((state) => state.search);
  const { fetchUsers} = useActions();
  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredContacts = users.filter((user: UserProps) => {
    return user.name.toLowerCase().includes(text.toLowerCase())
  })



  return (
    <>
      <div className="contacts">
        <div className="contacts__list list-group">
          {filteredContacts.map((user: UserProps) => (
            <a key={user.id} className="list-group-item list-group-item-action">
              <Contact user={user} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactList;
