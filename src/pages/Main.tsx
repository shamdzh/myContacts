import React from "react";
import Add from "../components/Add";
import ContactList from "../components/ContactList";
import Form from "../components/Form";
import Header from "../components/Header";
import Search from "../components/Search";
import { useTypedSelector } from "../hooks/useTypedSelector";



export const Main: React.FC = () => {
  const {visible} = useTypedSelector((state) => state.form)

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
