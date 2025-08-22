import React from 'react';

const MenuCard = ({ img, title, value }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <span className="text-green-600 font-bold text-lg">{value}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="px-4 py-1 text-sm border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all">
              Hot
            </button>
            <button className="px-4 py-1 text-sm border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all">
              Cold
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
