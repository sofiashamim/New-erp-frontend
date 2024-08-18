import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const CashInHand = () => {
    const data = [
        {
          id: 1,
          date: '20,june,2024',
          bankNameNote:'PESO',
          accNameNote:'$12.00',
          type:'$12.00',
          amount:'$4002.00',
          action: <MoreVertIcon/>,
         }]
  return (
    <div>
        <div className="row" >
        <div style={{marginLeft:"50px",marginTop:"60px"}} className="col-11">
          <div className="card">
            <div className="card-content">
          
                 <div  className="card-body titleHead">

<div  style={{display:"flex", height:"100px",gap:"50px"}} >

<div style={{height:"100px",width:"250px",marginTop:"20px",marginBottom:"20px",marginLeft:"20px", boxShadow:"0px 0px 5px 0.5px lightgrey",
                    borderRadius:"20px",border:"none"}} class="card">
  <div  style={{display:"flex"}} class="card-body">
    <div style={{height:"70px",width:"70px",borderRadius:"10px",marginRight:"20px",backgroundColor:"rgb(254, 230, 232)"}}><img src="	https://erpsoftware.acnoo.com/assets/images/icons/value.svg" alt="" /></div>
   <div> <h2>$18.800</h2>
   <h5> Total Balance</h5></div>
  </div>
</div>
<div style={{height:"100px",width:"250px",marginTop:"20px",marginBottom:"20px",marginLeft:"20px", boxShadow:"0px 0px 5px 0.5px lightgrey",
                    borderRadius:"20px",border:"none"}} class="card">
  <div  style={{display:"flex"}} class="card-body">
    <div style={{height:"70px",width:"70px",borderRadius:"10px",marginRight:"20px",backgroundColor:"rgb(254, 230, 232)"}}><img src="https://erpsoftware.acnoo.com/assets/images/icons/deposit.png" alt="" /></div>
   <div> <h2>$18.800</h2>
   <h5> Total Credit</h5></div>
  </div>
</div>
<div style={{height:"100px",width:"250px",marginTop:"20px",marginBottom:"20px",marginLeft:"20px", boxShadow:"0px 0px 5px 0.5px lightgrey",
                    borderRadius:"20px",border:"none"}} class="card">
  <div  style={{display:"flex"}} class="card-body">
    <div style={{height:"70px",width:"70px",borderRadius:"10px",marginRight:"20px",backgroundColor:"rgb(254, 230, 232)"}}><img src="https://erpsoftware.acnoo.com/assets/images/icons/money-withdrawal.png" alt="" /></div>
   <div> <h2>$18.800</h2>
   <h5> Total Debit</h5></div>
  </div>
</div>
</div>
                
                <h4 style={{marginTop:"150px",marginLeft:"-1465px"}} className="card-title">
                CASH IN HAND                   
                </h4>
                <div style={{flexDirection: "row",marginTop:"150px",
    alignItems: "baseline"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
     <button type="button" class="btn btn-outline-primary"  ><Link to="/admin">Adjust Cash</Link></button>
     
 
</div>
              </div>
              <hr />
              <div style={{display:"flex"}}>
              <div style={{marginLeft:"10px",alignSelf:"center"}} class="dropdown mx-4">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    All result
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
              </div>

<div>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Date</th>
                <th>Bank Name/Note</th>
                <th>Account Name/Note</th>
               
                <th>Type</th>
                <th>Amount</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.bankNameNote}</td>
                  <td>{item.accNameNote}</td>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.action}</td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
</div>


        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CashInHand
