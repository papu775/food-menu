import React from 'react'

const NavBar = ({filterItem,Menu,setMenuData}) => {
    const uniqueList = [...new Set(
        Menu.map(item => item.category)
      )];
      
  return (
    <nav className="navbar">
    <div className="btn-group">
      {
        uniqueList.map(item =>
          <button className="btn-group__item" key ={item} onClick={() => filterItem(item)}>{item}</button>
        )
      }
      <button className="btn-group__item" onClick={() => setMenuData(Menu)}>all</button>
    </div>
  </nav>
  )
}

export default NavBar