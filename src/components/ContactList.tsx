import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UserProps } from "../types/user";
import Contact from "./Contact";

const ContactList: React.FC = () => {
  const { users } = useTypedSelector((state) => state.user);
  const { fetchUsers, addUser } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="contacts">
        <div className="contacts__list list-group">
          {users.map((user: UserProps) => (
            <a className="list-group-item list-group-item-action">
              <Contact user={user} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactList;
