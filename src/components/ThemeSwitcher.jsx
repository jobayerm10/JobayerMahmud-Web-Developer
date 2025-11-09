import React from "react";

const ThemeSwitcher = () => {
  return (
    <div className="mt-5 flex justify-start">
      <button
        id="darkModeToggle"
        class="relative mx-32 w-12 h-7 bg-pink-800 rounded-2xl flex items-center p-1 cursor-pointer"
      >
        <span class="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200"></span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
