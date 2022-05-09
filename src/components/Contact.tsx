import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UserProps } from "../types/user";


interface Props {
  user: UserProps;
}

const Contact: React.FC<Props> = ({user}) => {
  const myState = useTypedSelector((state) => state);
  const { fetchUsers, addUser } = useActions();

  console.log("Текущее состояние state: ", myState);


  return (
    <div>{user.author}</div>
  );
};

export default Contact;
