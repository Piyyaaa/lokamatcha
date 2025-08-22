import React from 'react';
import MenuCard from '../layouts/MenuCard';
import img1 from '../assets/menu.jpg';
import img2 from '../assets/menu.jpg';
import img3 from '../assets/menu.jpg';
import img4 from '../assets/menu.jpg';
import img5 from '../assets/menu.jpg';
import img6 from '../assets/menu.jpg';

const menuItems = [
  { img: img1, title: 'Classic Matcha', value: '45k' },
  { img: img2, title: 'Matcha Latte', value: '50k' },
  { img: img3, title: 'Iced Matcha', value: '40k' },
  { img: img4, title: 'Matcha Smoothie', value: '55k' },
  { img: img5, title: 'Matcha Frappe', value: '60k' },
  { img: img6, title: 'Matcha with Honey', value: '50k' },
];

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-6 bg-gradient-to-r from-[#FFF] to-[#3BB143] py-20">
      <h1 className="font-semibold text-center text-4xl mb-14">Our Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {menuItems.map((item, index) => (
          <MenuCard key={index} img={item.img} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
