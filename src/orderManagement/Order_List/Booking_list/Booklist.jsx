import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { FaFileCsv, FaFilePdf } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
const Booklist = () => {



  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    // prinst documeent bjfjhbdfjgvdfbgfdb
 
    const handlePdf=async()=>{

        const doc = new jsPDF()
        doc.autoTable({ html: '.table' })
        doc.save('table.pdf')
      }
    
    // download pdf jbhdfjkdg


  const [data, setdata] = useState([]);

 
const getalldata=async()=>{


  const res=await fetch('http://localhost:8080/booking/getAllBooking')
  
  const resdata=await res.json()
  setdata(resdata.allList)
  console.log('bookingalldata',resdata)


}


useEffect(()=>{
  getalldata()
},[])




  return (
    <div className='w-auto bg-white  pl-2'>
      
      <div className='head-box w-auto pt-2  flex flex-row justify-between mt-3'>
        <h2 className='  ms-3' style={{fontWeight:"bold",fontSize:"20px"}}>
Booking List        </h2>

<div className='link-box w-80 h-10 flex flex-row  me-5 gap-5'style={{border:"1px solid purple",borderLeft:"none",borderRight:"none",borderTop:"none"}}> 
<Link to='/Booking_List' className='ordersummary h-10 w-40 pl-7 pt-2 text-white bg-purple-500'>Booking List
</Link>
<Link to='/add_new_booking'className='ordersummary h-10 w-40 pl-3 pt-2 text-white bg-purple-500'> Add New Booking 
</Link>
{/* <Link to='/addNewbooklist'className='ordersummary h-10 w-40 pl-3 pt-2 text-white bg-purple-500'> Add New Booking 
</Link> */}
</div>
      </div>
      {/* form */}
      <div className='form w-100    bg-white mt-14 h-20 d-flex p-3 gap-5 ' style={{}}>
      <select className="select h-11 w-60  "style={{border:"1px solid  grey", borderRadius:"0.4rem"}}>
    <option selected className='pl-2'>    Select Per Page
    </option>
    <option>Per Page-10</option>
    <option >Per Page-30</option>
    <option>Per Page-50</option>
    <option>Per Page-100</option>
</select>
<input className='h-11 w-60  ms-3 p-2 ps-4 ' style={{border:"1px solid  grey", borderRadius:"0.6rem"}} type='text' placeholder='Search...' />

  <div className='w-60 h-15  bg-white   flex flex-row ' style={{position:"relative"}}>
                        <label className='w-18 ms-3    pt-2' style={{ fontSize: "13px",position:"absolute" }}>From Date</label>
                        <input type='date' placeholder='Enter Payment Mode ' className='w-60  pl-16 text-center h-10 ms-10' style={{ outline: "none",borderRadius:"0.4rem" }} />
                    </div>
                    <div className='w-60  h-15  bg-white   flex flex-row ' style={{ position:"relative"}}>
                        <label className='w-18 bg-white   ms-3  pt-2 ' style={{ fontSize: "13px",position:"absolute"}}>To Date</label>
                        <input type='date' placeholder='Enter Payment Mode' className='w-60 pl-16   text-center h-10 ms-10' style={{ outline: "none" ,borderRadius:"0.4rem"}} />
                    </div>


<div className='w-80 flex flex-row justify-center gap-2 pt-3'>
<LuPrinter onClick={handlePrint} className='text-red-400' style={{fontSize:"20px"}} />

<LuPrinter onClick={handlePrint} className='text-green-400'  style={{fontSize:"20px "}} />
<FaFilePdf onClick={handlePdf} className='text-purple-500' style={{fontSize:"20px"}} />
<FaFileCsv  className='text-pink-400' style={{fontSize:"20px"}}/>

</div>
      </div>
      <table ref={componentRef} class="table  w-full    mt-5"  >
                  <thead class="bg-gray-50 w-auto " style={{fontWeight:"bold"}}>
                    <tr className=' bg-slate-100 h-12'>
                      <th
                        scope="col"            
                      >
                        <span>Sl.</span>
                      </th>
                      <th
                        scope="col"          
                      >
                    Order No.
                      </th>
                      <th
                        scope="col"                
                      >
                        Booking date
                      </th>
                      <th
                        scope="col                                      "               
                      >
                        Party Name
                      </th>
                      <th
                        scope="col"
                 
                      >
                        Type
                      </th>
                      <th
                        scope="col"
               
                      >
                     Composition
                      </th>
                      <th
                        scope="col"
                    
                      >
                    Order Image
                    </th>
                    <th
                        scope="col"
                  
                      >
                    Pocess Loss 
                    </th>
                        <th
                        scope="col"
                  
                      >
              Prepared By
                    </th>
                    <th
                        scope="col"
              
                      >
                      Rib 
                    </th>
                    <th
                        scope="col"
                   
                      >
              Collar
                    </th>
                    
                
                    <th
                        scope="col"
          
                      >
              status
                    </th>
                    <th
                        scope="col"
      
                      >
            Action
                    </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    {
                      data.map((ele,index)=>{
                        return(
                          <tr className='h-12'>
                            <td>{index+1}</td>
                            <td>{ele.orderNo}</td>
                            <td>{ele.bookingDate}</td>
                            <td>{ele.partyName}</td>
                            <td>{ele.type}</td>
                            <td>{ele.composition}</td>
                            <td>{ele.orderImage}</td>
                            <td>{ele.processLoss}</td>
                            <td>{ele.preparedBy}</td>
                            <td>{ele.rib}</td>
                            <td>{ele.collar}</td>
                            <td>{ele.status}</td>
                          </tr>
                        )
                      })
                    }
                 
               
                  </tbody>
                </table>    </div>
  )
}

export default Booklist









