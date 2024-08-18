import React, { useEffect, useState } from 'react'
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";


import { FaFilePdf } from "react-icons/fa6";
import { FaFileCsv } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiDotsVertical } from 'react-icons/hi';
const Shipmentslist = () => {

const [alldata, setalldata] = useState([]);
  const handlegetdata=async()=>{
      const res=await fetch('http://localhost:8080/api/getallshipmentdata')
      const getdata=await res.json()
      console.log('shipment dataaaaaaaaaaaaaaaaaa',getdata)
      setalldata(getdata.data)
        }

useEffect(()=>{
  handlegetdata()
},[])

      
 


  return (
    <div className='w-100 h-screen bg-white pt-3 d-flex flex-col'>
        
      <div className='w-100 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold ms-3' style={{fontSize:"20px"}}>Shipment List</h1>
<div className='sub-div w-80 h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{borderRadius:"5px"}}>Shipment List</button>
<Link to='/addnewshipment' className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Shipment </Link>

</div>
      </div>
      <hr className='bg-slate-700  w-100 mt-3'/>
      <div className='result-up w-100 d-flex flex-row justify-between ms-3'>
<div className='w-50 flex flex-row gap-4 mt-3'>
<select className="select h-9 w-56 pl-2 "style={{border:"1px solid  grey", borderRadius:"0.4rem"}}>
    <option selected>    Select Per Page
    </option>
    <option>Per Page-10</option>
    <option >Per Page-30</option>
    <option>Per Page-50</option>
    <option>Per Page-100</option>
</select>
<input type='text'  placeholder='Search' className=" w-56 h-9 pl-3" style={{border:"1px solid grey",borderRadius:"0.4rem"}} />
</div>
<div className='w-80 flex flex-row justify-center gap-5 pt-3'>
<LuPrinter className='text-red-400' style={{fontSize:"20px"}} />

<LuPrinter className='text-green-400'  style={{fontSize:"20px "}} />
<GrDocumentText style={{fontSize:"20px"}} />
<FaFileCsv  className='text-pink-400' style={{fontSize:"20px"}}/>

</div>
      </div>
<div className='w-auto mt-3 ms-3 ' style={{background:"whitesmoke"}}>
<table className="table  mt-4 bg-white"style={{height:"100vh"}}>
  <thead>
    <tr>
      <th scope="col">SL.</th>
      <th scope="col">Invoice No.</th>
      <th scope="col">Order No.</th>
      <th scope="col">Creater</th>
      <th scope="col">Total QTY</th>
      <th scope="col">Total CM</th>
      <th scope="col">Created AT</th>
      <th scope="col">Action</th>




    </tr>
  </thead>
  <tbody>
    {
      alldata.map((ele,index)=>{
        return(
          <tr>
          <th scope="row">{index+1}</th>
          <td>{ele.InvoiceNo}</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>{ele.
TotalQty
}</td>
          <td>{ele.
TotalCM

}</td>
          <td>{ele.
createdAt


}</td>
<td className='relative '>
        <p className='ml-3'>   <HiDotsVertical/></p>
     
     
        </td>
        </tr>
        )
      })
    }
  
  </tbody>
</table>
</div>
    </div>
  )
}

export default Shipmentslist