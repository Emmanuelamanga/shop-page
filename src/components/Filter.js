import React from 'react'
import filtericon from '../img/filter.svg'
import grid from '../img/grid.svg'
import viewList from '../img/view-list.svg'
const Filter = () => {
  return (
    <div className="bg-secondary p-2  text-black flex justify-between px-28">
      <div className="flex justify-between items-center gap-5">
        <img src={filtericon} alt="Filter" />
        <span>Filter</span>
        <img src={grid} alt="grid" />
        <img src={viewList} alt="list-view" />
        <span>Showing 1-16 of 32 results</span>
      </div>
      <div className='flex  items-center gap-5'>
        <span>Show</span>
        <input type="text" placeholder='16' className='w-10 p-2' />
        <span>Sort by</span>
        <input className='p-2' type="text" placeholder='Default' />
      </div>
    </div>

  )
}

export default Filter