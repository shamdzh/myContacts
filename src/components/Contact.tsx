import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";



const Contact = () => {
   const myState = useTypedSelector(state => state);
   const {fetchUsers} = useActions();

   console.log('state', myState)
   console.log('action', fetchUsers)

   return (
      <div className="card" onClick={() => { fetchUsers() }}>
         <div className="card__inner">
            <div className="card__img">
               <img src={""} alt="" />
            </div>
            <div className="card__name">{}</div>
            <div className="card__email">shdzhanhotov@mail.ru</div>
            <div className="card__phone">79635830105</div>
         </div>
      </div>
   );
};

export default Contact;
