import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UserProps } from "../types/user";


interface ContactProps {
  user: UserProps;
}

const Contact: React.FC<ContactProps> = ({user}) => {
  const myState = useTypedSelector((state) => state);
  const { fetchUsers, addUser } = useActions();

  console.log("Текущее состояние state: ", myState);


  return (
    <div
      className="card"
      onClick={() => {
        fetchUsers();
      }}
    >
      <div className="card__inner">
        <div className="card__img">
          <img src={""} alt="" />
        </div>
        <div className="card__name">{user.author}</div>
        <div
          className="card__email"
          onClick={(e) => {
            e.preventDefault()
            addUser();
          }}
        >
          shdzhanhotov@mail.ru
        </div>
        <div className="card__phone">79635830105</div>
      </div>
    </div>
  );
};

export default Contact;
