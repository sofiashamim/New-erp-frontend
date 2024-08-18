
import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Costinglist = () => {
  return (
    <div>
      {/* <div className='w-75 nav  h-16 bg-gray-100  flex flex-col justify-around' >
        <FaBars className='mt-2 ms-2' />
      <div className='w-72 flex flex-row gap-4 ms-96 pl-44 '>
      <IoMdNotificationsOutline style={{fontSize:"30px"}} />
<div className='w-12 h-12 bg-slate-400 pl-2 pt-2 m-52b-2' style={{borderRadius:"50%"}}>
<FaUserAlt className='pb-1' style={{fontSize:"33px"}} />

</div>
      </div>
      </div> */}
      <div className='w-full mt-3 h-10 flex flex-row justify-between '>
        <h3 className='ms-4' style={{ fontSize: "25px" }}>Costing List</h3>
        <div className='sub-div w-auto h-5 mt-1 pb-3 text-white ' >
        <Link to='/costing' className='w-40 h-10 ms-8 bg-purple-500  p-1' style={{fontSize:"20px",borderRadius:"10px"}} >Costing List</Link>

          <Link to='/costingform' className='w-40 h-10 ms-8 p-1 bg-purple-500 'style={{fontSize:"20px",borderRadius:"10px"}} >Costing Form</Link>

        </div>

      </div>
      <hr className='bg-slate-700  w-full mt-3' />
     
      <div className='form w-full flex justify-between gap-4 mt-5  '>
<div className='flex gap-3'>
          <select className="select h-11 w-44 text-center" style={{ border: "1px solid  grey", outline: "none", borderRadius: "5px" }}>
          <option selected>All Result
          </option>
          <option>Per Page-30</option>
          <option >Per Page-50 </option>
          <option >Per Page-100  </option>
        </select>
        {/* </div> */}

        <input type='text' className='w-44 h-11 font-bold text-center' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "5px" }} />
        </div>

        <div className='w-44 flex flex-row justify-center  gap-2 pt-3'>
<LuPrinter className='text-red-400' style={{fontSize:"20px"}} />
<FaFilePdf className='text-purple-500' style={{fontSize:"20px"}} />
<LuPrinter className='text-green-400'  style={{fontSize:"20px "}} />
<GrDocumentText style={{fontSize:"20px"}} />

</div>
      </div>
      <table class="  w-full  mt-5" >
  <thead>
    <tr className='w-full h-12 bg-slate-400 text-center'> 
      <th scope="col">SL.</th>
      <th scope="col">Order No.</th>
      <th scope="col">Party Name</th>
      <th scope="col">Type</th>
      <th scope="col">Style</th>
      <th scope="col">Total QTY</th>
      <th scope="col">Total Unit Price</th>
      <th scope="col">Total Value</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
     {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
     */}
  </tbody>
</table>
    </div>
  )
}

export default Costinglist