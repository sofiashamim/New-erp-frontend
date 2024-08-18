import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeScss } from "react-icons/bs";
const AddNewBooking = () => {
  return (
    <div className='w-75 bg-red ' style={{height:"100%"}}>
          <div className='w-100 nav  h-16 bg-gray-100  flex flex-col justify-center' >
        <FaBars className='mt-1 ms-2' />
      <div className='w-72 flex flex-row gap-4 ms-96 pl-44 '>
      <IoMdNotificationsOutline style={{fontSize:"30px"}} />
<div className='w-12 h-12 bg-slate-400 pl-2 pt-2 m-52b-2' style={{borderRadius:"50%"}}>
<FaUserAlt className='pb-1' style={{fontSize:"33px"}} />

</div>
      </div>
      </div>
         <div className='w-auto mt-3 h-10 flex flex-row justify-between '> 
       
<h1 className='fw-bold ms-3'>Add Booking Form</h1>
<div className='sub-div w-80 h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Shipment List</button>
<button className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Booking</button>

</div>
      </div>
      <hr className='bg-slate-700  w-100 mt-3'/>
      <div className='w-auto h-16 flex flex-row  gap-10 ms-2' style={{height:"100vh"}}>
        {/* main div */}
<div className=' w-96 sub-div  mt-4 flex flex-col gap-5'> 
<div className='w-96 h- bg-black   flex flex-row'>
    {/* <label>Party name</label> */}
<select className="select h-11 w-96 "style={{border:"1px solid  grey",outline:"none" }}>
    <option selected>Select a  Order No
    </option>
    <option>0000005</option>
    <option >0000002</option>
  


</select>
</div>
<div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 text-gray-400 pt-2' style={{fontSize:"13px"}}>Enter Booking Date</label>
  <input type='date' placeholder='Enter Booking date' className='w-60 text-center h-10 ms-3' style={{outline:"none"}} />
  </div>
<div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='process Loss' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Rib' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
 
  
 
</div>
{/* second-col */}
<div className=' w-96 sub-div ms-2 mt-4 flex flex-col gap-5'> 

{/* order No */}
<div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder=' Prepared By' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Composition' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Others Fabric' className='w-80 h-10' style={{outline:"none"}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Collar' className='w-80 h-10 '  style={{outline:"none"}}/>
  </div>


</div>
{/* Third col */}
<div className='mb-4 w-96 bg-white sub-div ms-2 mt-1  flex flex-col gap-5'> 
<div className='w-96    flex flex-row' >
<label htmlFor="upload" className="upload-img mt-2">
    <p className=' ms-2'>    Upload Item Image
    </p>
  <input type="file" name="image" id="upload" accept="image/*" className="d-none file-input-change" data-id="image" />
  <i><img src="https://erpsoftware.acnoo.com/assets/images/icons/upload.png" id="image" className="img-preview h-48 w-96 " style={{border:"2px solid  grey",borderRadius:"10px"}} /></i>
</label>



</div>


</div>


      </div> 
   
<div className=' w-96 mt-3 flex flex-row gap-3 ms-96  '>
    <button className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</button>
    <button className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>
{/* table */}
<div className='w-96 bg-slate-400 tableaddnewbooking'></div>
<div className='sub'>
  
</div>
    </div>
  )
}

export default AddNewBooking
