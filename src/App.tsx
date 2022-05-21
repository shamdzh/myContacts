import Auth from "./pages/Login";
import { Main } from "./pages/Main";
import { Routes, Route, Link,  } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";
import React, { useEffect } from "react";

const App:React.FC = () => {

  const { login } = useTypedSelector((state) => state.authForm);

  useEffect(() => {
    console.log('Login: ', login)
  })
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
