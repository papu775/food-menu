import React, { useState } from 'react'
import './App.css'
import FoodCard from './components/FoodCard'
import NavBar from './components/NavBar';
import Menu from "./menuApi";
const App = () => {

  const [menuData, setMenuData] = useState(Menu);

  const filterItem = category => {
    const updatedList = Menu.filter(item => item.category === category)
    setMenuData(updatedList);
  };

  return (
    <>
      <NavBar filterItem={filterItem} Menu={Menu} setMenuData={setMenuData} />
      <div className="main-card--cointainer">
        {menuData.map(item =>
          <FoodCard key={item.id} {...item} />
        )}
      </div>
    </>
  )
}

export default App
