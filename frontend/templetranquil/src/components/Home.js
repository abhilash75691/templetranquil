import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'


const Home = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar/>
      <Feed/>
    </div>
  )
}

export default Home
