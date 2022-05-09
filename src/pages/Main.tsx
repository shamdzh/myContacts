import React from "react";
import Add from "../components/Add";
import ContactList from "../components/ContactList";
import Form from "../components/Form";
import Header from "../components/Header";
import Search from "../components/Search";



export const Main: React.FC = () => {

  return (
    <>
        <Header />
        
        <Add />
        <Search />

        <ContactList />
    </>
  );
};
