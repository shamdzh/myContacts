import React from 'react'
import { useActions } from '../hooks/useActions';


const Footer = () => {
  const { signOut} = useActions();

  return (
    <div className="sign__out" onClick={signOut}>Выйти из аккаунта</div>
  )
}

export default Footer