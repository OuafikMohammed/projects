import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 md:w-1/4 lg:w-1/5 xl:w-1/6">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul>
        <li><a href="#" className="text-blue-600 hover:text-blue-800">Technology</a></li>
        <li><a href="#" className="text-blue-600 hover:text-blue-800">Travel</a></li>
        <li><a href="#" className="text-blue-600 hover:text-blue-800">Food</a></li>
        <li><a href="#" className="text-blue-600 hover:text-blue-800">Lifestyle</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;