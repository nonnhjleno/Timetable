import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const list: Array<string> = [];
  for (let i = 1; i < 9; i++) {
    list[i] = `${Math.ceil(i / 2)}年${i % 2 === 1 ? '前期' : '後期'}`;
  }

  return (
    <div className=' py-2 flex font-medium border-b-2 border-slate-300'>
      <h1 className="text-2xl ml-10">Timetable</h1>
      <ul className=' flex items-center ml-5'>
        {list.map((label, index) => (
          <li className='mx-2'>
            <NavLink
              to={String(index)}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-2" : ""
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header