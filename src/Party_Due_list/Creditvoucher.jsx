import React from 'react'

const Creditvoucher = () => {
  return (
    <div className='w-75 bg-white pl-4' style={{height:"100vh"}}>
            <div className='w-auto pt-4 mt-10 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold'>Credit Voucher</h1>
<div className='sub-div w-auto h-10'>

<button className='w-40 h-10 ms-8 bg-purple-500  text-white ' style={{fontWeight:"bold",border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none",borderRadius:"10px"}}>Credit list</button>
<button className='w-40 h-10 ms-8 bg-purple-500 text-white  ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none",borderRadius:"10px",fontWeight:"bold"}}> Create Credit</button>


</div>
      </div>
      <hr className='bg-red-400 mt-5 w-100 '/>
      
      <div className=' w-auto doller-container flex flex-row gap-5 mt-5 ms-3'>






      </div>
      {/* form */}
      <div className='form w-100    flex fle-row gap-6 pl-3 mt-20'>
     
<input type='text' className='w-80 h-11 font-bold' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "10px" }} />

      </div>

       {/* table */}
       <table className="table mt-10 ms-3 p-2" style={{fontFamily:"monospace",fontSize:"15px"}}>
  <thead>
    <tr className='bg-slate-300' style={{border:"2px solid grey"}}>
      <th scope="col">SL.</th>
      <th scope="col">Bill No.</th>
      <th scope="col">Voucher No.</th>
      <th scope="col">Transaction By</th>
      <th scope="col">Party</th>
      <th scope="col">Payment Type</th>
      <th scope="col">Payment Type</th>
      <th scope="col">Amount</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0000003</td>
      <td>25 Jul, 2024</td>
      <td>NR</td>
      <td>Buyer</td>
      <td>100%COTTON TWILL AOP</td>
      <td>NR</td>
      <td>NR</td>

    </tr>

   
  
  </tbody>
</table>
    </div>
  )
}

export default Creditvoucher