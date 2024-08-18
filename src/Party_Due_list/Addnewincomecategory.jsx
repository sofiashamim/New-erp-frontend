import React from 'react'

const Adddnewincomecategory = () => {
  return (
    <div>
         <div className='w-auto pt-4 mt-10 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold'>Add Buyer Due List</h1>
<div className='sub-div w-auto h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Buyer List</button>
<button className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Income List</button>
<button className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add Income Category</button>


</div>
      </div>
      <hr className='bg-red-400 mt-5 w-100 '/>
      <div className='w-75 bg-green-400'> 
      <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Enter Category Name' className='w-80 h-10 '  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <textarea placeholder='Description'>

    </textarea>
  </div>
      </div>
    </div>
  )
}

export default Adddnewincomecategory