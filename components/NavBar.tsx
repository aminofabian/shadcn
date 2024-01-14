import React from 'react';
import { ThemeToggleButton } from './shadCN/ThemeToggleButton';

function NavBar() {
  return (
    <div className='flex justify-between items-center h-[10dvh] w-full p-8'>
    <span>NavBar</span>
    <div className='flex items-center pr-10 bg-white dark:bg-black'>
    <ThemeToggleButton />
    </div>
    </div>
    );
  }
  
  export default NavBar;
  