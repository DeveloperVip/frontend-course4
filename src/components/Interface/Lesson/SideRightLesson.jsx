import React from 'react'
import ItemLesson from './ItemLesson'

const SideRightLesson = () => {
  return (
    <div className='py-4 ml-8 w-80'>
        <h2>Goi y cho ban</h2>
        <div className='grid gap-4'><ItemLesson/></div>
    </div>
  )
}

export default SideRightLesson