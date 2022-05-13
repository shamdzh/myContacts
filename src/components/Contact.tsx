import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UserProps } from "../types/user";


interface Props {
  user: UserProps;
}

const Contact: React.FC<Props> = ({user}) => {
  const myState = useTypedSelector((state) => state);
  const { fetchUsers, addUser, removeUser } = useActions();

  return (
    <div className="contact">
      {user.name + " " + user.number}
      <div className="deleteBtn" onClick={() => {
        console.log('delete')
        removeUser(user.id!)
      }}><i className="fa-solid fa-xmark"></i></div>
    </div>
  );
};

export default Contact;
