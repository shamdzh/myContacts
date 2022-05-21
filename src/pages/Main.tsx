import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Add from "../components/Add";
import ContactList from "../components/ContactList";
import Form from "../components/Form";
import Header from "../components/Header";
import Search from "../components/Search";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Login from "./Login";

export const Main: React.FC = () => {
  const { visible } = useTypedSelector((state) => state.form);
  const { login } = useTypedSelector((state) => state.authForm);
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      console.log("Вы не авторизованы");
      navigate("/");
    }
  }, [login]);

  return (
    <>
      <Header />

      <Add visible={visible} />

      <Form visible={visible} />

      <Search />

      <ContactList />
    </>
  );
};
