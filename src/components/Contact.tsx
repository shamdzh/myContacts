import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UserProps } from "../types/user";

interface Props {
  user: UserProps;
}

const Contact: React.FC<Props> = ({ user }) => {
  const { removeUser, showForm, editForm } = useActions();

  return (
    <div className="contact">
      <div className="contact__data">
        <div className="contact__name">{user.name}</div>
        <div className="contact__number">{user.number}</div>
      </div>

      <div className="btnGroup">
        <div
          className="editeBtn"
          onClick={() => {
            console.log("userID", user.id);
            showForm();
            editForm({ id: user.id, name: user.name, number: user.number });
          }}
        >
          <i className="fa-solid fa-user-pen"></i>
        </div>
        <div
          className="deleteBtn"
          onClick={() => {
            console.log("delete");
            removeUser(user.id!);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
