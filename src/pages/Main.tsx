import axios from "axios";
import React from "react";
import Add from "../components/Add";
import ContactList from "../components/ContactList";
import Form from "../components/Form";
import Header from "../components/Header";
import Search from "../components/Search";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Main: React.FC = () => {
  const { visible } = useTypedSelector((state) => state.form);

  return (
    <>
      <Header />

      <Add visible={visible} />
      <button
        className="btn btn-success"
        onClick={async () => {
          console.log("signup");
          const response = await axios
            .post("http://localhost:3001/register", {
              email: "olivier7@mail.com",
              password: "bestPassw0rd",
            })
            .then((e) => {
              console.log(e);
            });
        }}
      >
        SignUp
      </button>

      <Form visible={visible} />

      <Search />

      <ContactList />
    </>
  );
};
