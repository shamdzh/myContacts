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

      

      <div className="cards">
        {users.map((user:UserProps) => (
          <Contact user={user}/>
        ))}
      </div>
    </>
  );
};

export default ContactList;
