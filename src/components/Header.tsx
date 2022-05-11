import React from 'react'


type Props = {
  
}

const Header = (props: Props) => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={require("../assets/images/contacts.png")} alt="" />
      </div>
      <h1 className='header__title'>Contacts Service</h1>
      <div className="header__subtitle">by Shamil' Dzhanhotov</div>
    </div>
  )
}

export default Header
