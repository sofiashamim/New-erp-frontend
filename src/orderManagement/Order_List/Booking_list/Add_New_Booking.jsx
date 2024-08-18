import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeScss } from "react-icons/bs";
const Add_New_Booking = () => {
  return (
    <div className='w-100 bg-white' style={{height:"100vh"}}>
         <div className='w-auto ms-3  pt-2 h-10 flex flex-row justify-between '> 
       
<h1 className='fw-bold ms-3'>Add Booking Form </h1>

<div className='sub-div w-96 ms-8  h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Booking  List</button>
<button className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Booking</button>

</div>
      </div>
      <hr className='bg-slate-700  w-100 mt-3 ms-2'/>
      <div className='w-auto h-16 flex flex-row  gap-10 ms-2' style={{height:"50vh"}}>
        {/* main div */}
<div className=' w-96 sub-div  mt-4 flex flex-col gap-5'> 
<div className='w-80 h-  flex flex-row'>
    {/* <label>Party name</label> */}
<select className="select h-11 w-80  text-center "style={{border:"1px solid  grey",outline:"none",borderRadius:"10px" }}>
    <option selected>Select a  Order No
    </option>
    <option>0000005</option>
    <option >0000002</option>
  


</select>
</div>
<div className='w-auto h-15   flex flex-row 'style={{}}>
    <label className='w-28 pl-2 bg-white  ms-48  mb-3 justify-start mt-64 ' style={{fontSize:"10px"}}>Enter Booking Date</label>
  <input type='date' placeholder='Enter Booking date' className='w-70  h-10 ms-36 bg-white text-center' style={{outline:"none"}} />
  </div>
<div className='w-auto h-15  bg-white   flex flex-row ' style={{}}>
  <input type='  number' placeholder='process Loss' className='w-80 h-10 text-center'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{}}>
  <input type='text' placeholder='Rib' className='w-80 h-10 text-center'  style={{outline:"none"}}/>
  </div>
 
  
 
</div>
{/* second-col */}
<div className=' w-96  ms-2 mt-4 flex flex-col gap-5'> 

{/* order No */}
<div className='w-auto h-15  bg-white   flex flex-row ' style={{}}>
  <input type='  number' placeholder=' Prepared By' className='w-80 h-10 text-center'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{}}>
  <input type='  number' placeholder='Composition' className='w-80 h-10 text-center'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{}}>
  <input type='text' placeholder='Others Fabric' className='w-80 h-10 text-center' style={{outline:"none"}} />
  </div>
  <div className='w-auto h-15     flex flex-row 'style={{}}>
  <input type='text' placeholder='Collar' className='w-80 h-10 text-center '  style={{outline:"none"}}/>
  </div>


</div>
{/* Third col */}
<div className='mb-4 w-96    ms-2 mt-1  flex flex-col gap-5 ' style={{position:"absolute",left:"63rem",background:"whitesmoke"}}> 
<div className='w-96    flex flex-row' >
<label htmlFor="upload" className="upload-img mt-2">
    <p className=' ms-2'>   Order Item Image
    </p>
  <input type="file" name="image" id="upload" accept="image/*" className="d-none file-input-change" data-id="image" />
  <i><img src="https://erpsoftware.acnoo.com/assets/images/icons/upload.png" id="image" className="img-preview h-48 w-96 " style={{border:"2px solid  grey",borderRadius:"10px"}} /></i>
</label>



</div>


</div>


      </div> 
   

{/* table */}
<div className="row  " >
  <div className="col-lg-12 table-form-section add-form-table">
    <div className="table-responsive responsive-table  pb-0">
      <table className="table table-two daily-production-table-print mw-1000 booking-table" id="erp-table">
        <thead >
          <tr >
            <td colSpan={25} rowSpan={2}><strong /></td>
            <td colSpan={8}><strong>Coller Size/Quantity: Solid</strong></td>
            <td rowSpan={3}><strong>Cuff Color</strong></td>
            <td colSpan={4}><strong>Cuff Solid</strong></td>
          </tr>
          <tr className=''style={{border:"1px solid black"}}>
            <td><input type="text" name="header[collar_size_qty_40]" defaultValue="40X7.5" className="form-control reset-input" /></td>
            <td><input type="text" name="header[collar_size_qty_41]" defaultValue="41X7.5" className="form-control reset-input" /></td>
            <td><input type="text" name="header[collar_size_qty_42]" defaultValue="42X7.5" className="form-control reset-input" /></td>
            <td><input type="text" name="header[collar_size_qty_43]" defaultValue="43X7.5" className="form-control reset-input" /></td>
            <td><input type="text" name="header[collar_size_qty_44]" defaultValue="44X7.5" className="form-control reset-input" /></td>
            <td><input type="text" name="header[collar_size_qty_45]" defaultValue="45X7.5" className="form-control reset-input" /></td>
            <td><input type="text" name="header[collar_size_qty_46]" defaultValue="46X7.5" className="form-control reset-input" /></td>
            <td><input type="text" name="header[collar_size_qty_47]" defaultValue="47X7.5" className="form-control reset-input" /></td>
            <th><input type="text" name="header[cuff_solid_l]" defaultValue="Qty.XS-L" className="form-control reset-input" /></th>
            <th><input type="text" name="header[cuff_solid_4xl]" defaultValue="Qty.XL-4XL" className="form-control reset-input" /></th>
            <th><input type="text" name="header[cuff_solid_5xl]" defaultValue="Qty.XS-5XL" className="form-control reset-input" /></th>
            <th><input type="text" name="header[cuff_solid_6xl]" defaultValue="Qty.XL-6XL" className="form-control reset-input" /></th>
          </tr>
          <tr className='' style={{border:"1px solid black"}}>
            <th><strong>Style</strong></th>
            <th><strong>Color</strong></th>
            <th><strong>Item</strong></th>
            <th><strong>Shipment Date</strong></th>
            <th><strong>Garments QTY</strong></th>
            <th><strong>Unit Price</strong></th>
            <th><strong>Total Value</strong></th>
            <th><strong>Description Of Garments</strong></th>
            <th><strong>Garments Picture</strong></th>
            <th><strong>Pantone</strong></th>
            <th><strong>Body Fabrication</strong></th>
            <th><strong>Yarn Count For Body</strong></th>
            <th><strong>Garments QTY In DZN</strong></th>
            <th><strong>Consumption Body Fabric In DZN</strong></th>
            <th><strong>Body Gray Fabric In KG</strong></th>
            <th><strong>Description Of Garments (RIB)</strong></th>
            <th><strong>Yarn Counts For RIB 1*1</strong></th>
            <th><strong>Consumption RIB In DZN</strong></th>
            <th><strong>RIB In KG</strong></th>
            <th><strong>Yarn Counts For RIB 1*1 Lycra 1*1 RIB   Yarn- 26/1 Finished DIA  48” Open</strong></th>
            <th><strong>Receive</strong></th>
            <th><strong>Balance</strong></th>
            <th><strong>Gray Body Febric</strong></th>
            <th><strong>Graybody RIB (2*1)</strong></th>
            <th><strong>Revised</strong></th>
            <th><input type="text" name="header[collar_size_qty_xs]" defaultValue="XS" className="form-control reset-input" /></th>
            <th><input type="text" name="header[collar_size_qty_s]" defaultValue="S" className="form-control reset-input" /></th>
            <th><input type="text" name="header[collar_size_qty_m]" defaultValue="M" className="form-control reset-input" /></th>
            <th><input type="text" name="header[collar_size_qty_l]" defaultValue="L" className="form-control reset-input" /></th>
            <th><input type="text" name="header[collar_size_qty_xl]" defaultValue="XL" className="form-control reset-input" /></th>
            <th><input type="text" name="header[collar_size_qty_xxl]" defaultValue="XXL" className="form-control reset-input" /></th>
            <th><input type="text" name="header[collar_size_qty_3xl]" defaultValue="3XL" className="form-control reset-input" /></th>
            <th><input type="text" name="header[collar_size_qty_4xl]" defaultValue="4XL" className="form-control reset-input" /></th>
            <td><input type="text" name="header[cuff_solid_37]" defaultValue="37X.3.5 CM" className="form-control reset-input" /></td>
            <td><input type="text" name="header[cuff_solid_38]" defaultValue="40X.3.5 CM" className="form-control reset-input" /></td>
            <td><input type="text" name="header[cuff_solid_39]" defaultValue="37X.3.5 CM" className="form-control reset-input" /></td>
            <td><input type="text" name="header[cuff_solid_40]" defaultValue="40X.3.5 CM" className="form-control reset-input" /></td>
          </tr>
        </thead>
        <tbody>
          <tr className="position-relative">
            <td><div className="add-btn-one"><i className="fal fa-plus" aria-hidden="true" /></div></td>
            <td><div className="tr-remove-btn remove-one"><i className="fas fa-trash" /></div></td>
          </tr>
          <tr className="total">
            <td colSpan={4}><h6 className="text-end">Totals</h6></td>
            <td><h6 className="total_qty">0</h6></td>
            <td><h6 className="total_unit_price">0</h6></td>
            <td><h6 className="final_total_price">0</h6></td>
            <td colSpan={31} />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="col-lg-12">
  <div className=' w-96 mt-3 flex flex-row gap-3 ms-96  '>
    <button className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</button>
    <button className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>
  </div>
</div>

    </div>
  )
}

export default Add_New_Booking
