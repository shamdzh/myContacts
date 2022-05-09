import React from 'react'


type Props = {
  
}

const Header = (props: Props) => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={require("../assets/images/contacts.png")} alt="" />
      </div>
      <h1>Contacts Service <span>by Sham Dzh</span></h1>
    </div>
  )
}

export default Header
