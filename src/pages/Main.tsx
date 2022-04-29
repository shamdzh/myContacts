import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";



export const Main: React.FC = () => {
  const {users} = useTypedSelector((state) => state.user);
  const { fetchUsers, addUser } = useActions();

  console.log(users)

  useEffect(()=> {
    fetchUsers()
  }, [])

  return (
    <>
        {users.map((user:any) => 
            <div key={user.id}>{user.author}</div>
        )}
    </>
  );
};
