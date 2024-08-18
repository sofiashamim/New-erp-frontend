import React from 'react'
import { Link } from 'react-router-dom';

const LossProfit = () => {

    const data = [
        {
          id: 1,
          category: 'Shipment-QTY',
          jan:'0.00',
          feb:'$12.00',
          mar:'0.00',
          apr:'$12.00',
          may:'$12.00',
          jun:'$12.00',
          jul:'$12.00',
          aug:'$12.00',
          sep:'$12.00',
          oct:'$12.00',
          nov:'$12.00',
          dec:'$12.00',
          
            total:'total'
         },
         
        ];

        const totalRow=[
          {
            id: 1,
            categoryTot: 'Total',
            janTot:'0.00',
            febTot:'$12.00',
            marTot:'0.00',
            aprTot:'$12.00',
            mayTot:'$12.00',
            junTot:'$12.00',
            julTot:'$12.00',
            augTot:'$12.00',
            sepTot:'$12.00',
            octTot:'$12.00',
            novTot:'$12.00',
            decTot:'$12.00',
            
              total:'total'
           },
        ]


  return (
    <div>
      <div className="row" >
        <div style={{marginLeft:"50px",marginTop:"50px"}} className="col-11">
          <div className="card">
            <div className="card-content">
          
                 <div style={{display:"flex"}} className="card-body titleHead">
                <h4  className="card-title">
                LOSS/PROFIT                 
                </h4>
                <div style={{flexDirection: "row",
    alignItems: "baseline"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
     <button type="button" class="btn btn-outline-primary"  ><Link to="/lossprofit">Loss/Profit </Link></button>
     <button type="button" class="btn btn-outline-primary"><Link to="/expList">Expense List</Link></button>
     <button type="button" class="btn btn-outline-primary"><Link to="/incomeList">Income list</Link></button>
 
</div>
              </div>
              <hr />
              
<div>

    <div style={{display:"flex"}}>
    <div style={{height:"90px",width:"215px",marginTop:"30px",marginBottom:"20px",marginLeft:"20px", backgroundColor:"rgb(207,239,250)",border:"none"}} class="card">
  <div class="card-body">
    <h2>$18.800</h2>
   <h5> Total Sale</h5>
  </div>
</div>
<div style={{height:"90px",width:"215px",marginTop:"30px",marginBottom:"20px",marginLeft:"20px", backgroundColor:"rgb(250,232,207)",border:"none"}} class="card">
  <div class="card-body">
    <h2>$18.800</h2>
   <h5> Total Expense</h5>
  </div>
</div>
<div style={{height:"90px",width:"215px",marginTop:"30px",marginBottom:"20px",marginLeft:"20px", backgroundColor:"rgb(207,250,230)",border:"none"}} class="card">
  <div class="card-body">
    <h2>$18.800</h2>
   <h5> Total Profit</h5>
  </div>
</div>
<div style={{height:"90px",width:"215px",marginTop:"30px",marginBottom:"20px",marginLeft:"20px", backgroundColor:"rgb(250,207,213)",border:"none"}} class="card">
  <div class="card-body">
    <h2>$18.800</h2>
   <h5> Total Loss</h5>
  </div>
</div>

    </div>


<div style={{marginLeft:"10px",alignSelf:"center", marginBottom:"20px"}} class="dropdown mx-4">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    This year
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">2024</a></li>
    <li><a class="dropdown-item" href="#">2023</a></li>
    <li><a class="dropdown-item" href="#">2022</a></li>
  </ul>
</div>
        

      <table class="table ">
      <div className="table-responsive">
          <table className="table mb-0  table-bordered">
            <thead>
              <tr>
                <th>Revenue</th>
                <th>January</th>
                <th>February</th>
                <th>March</th>
                <th>April</th>
                <th>May</th>
                <th>June</th>
                <th>July</th>
                <th>August</th>
                <th>September</th>
                <th>October</th>
                <th>November</th>
                <th>December</th>
                <th>TOTAL</th>
                
                
                
              </tr>
              
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.category}</td>
                  <td>{item.jan}</td>
                  <td>{item.feb}</td>
                  <td>{item.mar}</td>
                  <td>{item.apr}</td>
                  <td>{item.may}</td>
                  <td>{item.jun}</td>
                  <td>{item.jul}</td>
                  <td>{item.aug}</td>
                  <td>{item.sep}</td>
                  <td>{item.oct}</td>
                  <td>{item.nov}</td>
                  <td>{item.dec}</td>
                  <td>{item.total}</td>
          </tr>

                
              ))}
             {totalRow.map((total)=>(
  <tr style={{backgroundColor:"rgb(252,217,166)"}} key={total.id}>
  <td style={{backgroundColor:"orange"}}>{total.categoryTot}</td>
  <td >{total.janTot}</td>
  <td>{total.febTot}</td>
  <td>{total.marTot}</td>
  <td>{total.aprTot}</td>
  <td>{total.mayTot}</td>
  <td>{total.junTot}</td>
  <td>{total.julTot}</td>
  <td>{total.augTot}</td>
  <td>{total.sepTot}</td>
  <td>{total.octTot}</td>
  <td>{total.novTot}</td>
  <td>{total.decTot}</td>
  <td>{total.total}</td>

</tr>
             ))}
            </tbody>
          </table>
          </div>
</table>

</div>


        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LossProfit