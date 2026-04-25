import React from 'react'

export const QtyBox= () => {
  return (
    <div  className='qtyBox'>


        <input type="number" className='w-full h-[40px] p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.1)] rounded-md ' defaultValue={1}>
        </input>
    </div>
  )
}
