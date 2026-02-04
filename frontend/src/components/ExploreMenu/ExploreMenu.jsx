import React from 'react'
import './ExploreMenu.css'
import { assets, menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  const handleCategoryClick = (menuName) => {
    setCategory(prev => prev === menuName ? "All" : menuName);
    // Scroll to food display section
    setTimeout(() => {
      const foodDisplay = document.getElementById('food-display');
      if (foodDisplay) {
        foodDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array
            of dishes. Our mission is to satisfy your cravings and elevate your
            dining experience, one delicious meal at a time.
        </p>
        <div className="explore-menu-list">
          {menu_list && menu_list.length > 0 ? menu_list.map((item,index) => {
            return(
                <div onClick={() => handleCategoryClick(item.menu_name)} key={index} className='explore-menu-list-item'>
                   <img className={category===item.menu_name?'active':""} src={item.menu_image}  alt='' />
                   <p>{item.menu_name}</p>
                </div>
            )
          }) : <p>Loading menu...</p>}  
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu