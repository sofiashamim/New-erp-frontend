import React from 'react'
import { Link } from 'react-router-dom';
const Incomelist = () => {
  return (
    <div className='w-75 ms-3 bg-white' style={{height:"100vh"}}>
            <div className='w-auto pt-4 mt-10 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold' style={{fontSize:"20px"}}>Income List
</h1>
<div className='sub-div w-96 flex flex-row h-10'>
<Link  to='/incomelist' className='w-32  pl-3 pt-2 text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Income List</Link>
<Link to='/addnewincome' className='w-64 h-10 ms-8 text-white bg-purple-700  pt-2 pl-2' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Income Category </Link>

</div>
      </div>
      <hr className='bg-red-400 ms-2 mt-5 w-100 '/>
      
      <div className=' w-auto doller-container flex flex-row gap-5 mt-5 ms-3'>




      </div>
  

       {/* table */}
       <table className="table mt-10 ms-1 p-2" style={{fontFamily:"monospace",fontSize:"15px"}}>
  <thead>
    <tr className='bg-slate-300' style={{border:"2px solid grey"}}>
      <th scope="col">SL.</th>
      <th scope="col">Party Name</th>
      <th scope="col"> Catagory Name</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0000003</td>
      <td>25 Jul, 2024</td>
      {/* darkmodebtn */}
      <td>NR</td>
      <td>Buyer</td>
      
    </tr>
   
  
  </tbody>
</table>
    </div>
  )
}

export default Incomelist