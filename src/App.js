import Home from "./pages/home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import AccessoryList from "./components/ManageInventory/AccessoryList";
import CreateUnitt from "./components/ManageInventory/CreateUnitt";
import CreateInventory from "./components/ManageInventory/CreateAccessory";
import CreateAccessory from "./components/ManageInventory/CreateAccessory";
import CreateAccOrder from "./components/ManageInventory/CreateAccOrder";
import AccorderList from "./components/ManageInventory/AccorderList";
import Admin from "./components/userManagement/Admin";
import AddNewAdmin from "./components/userManagement/AddNewAdmin";
import Buyer from "./components/userManagement/Buyer";
import AddBuyer from "./components/userManagement/AddBuyer";
import Merchandiser from "./components/userManagement/Merchandiser";
import AddMerchandiser from "./components/userManagement/AddMerchandiser";
import CommercialList from "./components/userManagement/CommercialList";
import AddCommercial from "./components/userManagement/AddCommercial";
import Accountant from "./components/userManagement/Accountant";
import { useState } from "react";
import { Content, Header } from "antd/es/layout/layout";
import { Layout } from "antd";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import UnitList from "./components/ManageInventory/UnitList";
import Designations from "./components/HRMmanagement/Designations";
import Employees from "./components/HRMmanagement/Employees";
import AddEmployee from "./components/HRMmanagement/AddEmployee";
import './App.css'
import PayS from "./components/HRMmanagement/PayS";
import SalaryList from "./components/HRMmanagement/SalaryList";
import AddAccountant from "./components/userManagement/AddAccountant";
import BuyerDue from './components/Report/BuyerDue';
import MyProfile from './components/Report/MyProfile';
import Order from './components/Report/Order';
import Production from './components/Report/Production';
import PurchaseReport from './components/Report/PurchaseReport';
import SalesReport from './components/Report/SalesReport';
import Transaction from './components/Report/Transaction';
import Permission from './components/Permission/Permission';
import Role from './components/Permission/Role';
import CompanySetting from './components/Setting/CompanySetting';
import Currency from './components/Setting/Currency';
import Notification from './components/Setting/Notification';
import SystemSetting from './components/Setting/SystemSetting';
import Login from './components/login/Login';
import Forgotpassword from './components/login/ForgotPassword';
import Ordersummary from './orderManagement/Order_List/OrderSummary';
import AddNeworder from './orderManagement/Order_List/AddNewOrder';
import Booklist from './orderManagement/Order_List/Booking_list/Booklist';
import Addnewbudget from './orderManagement/Order_List/Budget_list/Addnewbudget';
import Costinglist from './orderManagement/Order_List/costing/Costing_list';
import Orderlist from './orderManagement/Order_List/sample/Orderlist';
import Shipmentslist from './orderManagement/Order_List/shipment_list/Shipment-list';
import Addbuyer from './party_List/AddBuyer';
import Supplierlist from './party_List/Supplierlist';
import Allbuyerduelist from './Party_Due_list/AllbuyerDuelist';
import ProductionList from './components/userManagement/Productionlist';
import AddProd from './components/userManagement/AddnewProduction';
import Booking_List from "./orderManagement/Order_List/Booking_list/Booking_List";
import Add_New_Booking from "./orderManagement/Order_List/Booking_list/Add_New_Booking";
import Budget_list from "./orderManagement/Order_List/Budget_list/Budget_list";
import Costingform from "./orderManagement/Order_List/costing/Costingform";
import Samplelist from "./orderManagement/Order_List/sample/Samplelist";
import Addnewsample from "./orderManagement/Order_List/sample/Addnewsample";
import Addnewshipmentlist from "./orderManagement/Order_List/shipment_list/Addnewshipmentlist";
import ExpList from './components/LossAndProfit/Loss/ExpenseList';
import LossProfit from './components/LossAndProfit/Loss/LossProfit';
import IncomeList from './components/LossAndProfit/Loss/IncomeList';
import Incomelist from './Party_Due_list/Incomelist';
import Adddnewincomecategory from './Party_Due_list/Addnewincomecategory';
import Createcredit from './Party_Due_list/CreateCredit';
import SearchSamplelist from './orderManagement/Order_List/sample/SearchSamplelist';
import Buyerlist from './party_List/Buyer';
import Createaddsupplier from './Party_Due_list/CreateAddsupplier';
import Addnewbuyer from './party_List/AddBuyer'
import SupplierDue from './components/Report/SupplierDue';
import BankAccount from "./components/accountBankCommercial/BankAccount";

import CashInHand from "./components/accountBankCommercial/CashInHand";
import Cheques from "./components/accountBankCommercial/Cheques";





function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div >
      <BrowserRouter>
      <Layout>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header style={{backgroundColor:"white"}}>
     
        <Navbar  collapsed={collapsed} setCollapsed={setCollapsed} />
          
        </Header>
      <Content>

        <Routes>
          <Route path="/">
            <Route path="/" element={<Login/>} />
            <Route path="/home" index element={<Home collapsed={collapsed} setCollapsed={setCollapsed} />} />
            <Route path="/forgot" element={<Forgotpassword/>} />
        
            <Route path="/manageInventory" element={<ManageInventory />} />
            <Route path="/accessory" element={<AccessoryList />} />
            <Route path="/createUnit/:id?" element={<CreateUnitt />} />
            <Route path="/unit" element={<UnitList />} />
            <Route path="/createAccess/:id?" element={<CreateAccessory />} />
            <Route path="/createAccorder/:id?" element={<CreateAccOrder />} />
            <Route path="/accOrderlist" element={<AccorderList />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/newAdmin/:id?" element={<AddNewAdmin />} />
            <Route path="/buyer" element={<Buyer />} />
            <Route path="/addBuyer/:id?" element={<AddBuyer />} />
            <Route path="/merchandiser" element={<Merchandiser />} />
            <Route path="/addMerch/:id?" element={<AddMerchandiser />} />
            <Route path="/commercial" element={<CommercialList />} />
            <Route path="/addComm/:id?" element={<AddCommercial />} />
            <Route path="/accountant" element={<Accountant />} />
            <Route path="/addAcc/:id?" element={<AddAccountant />} />
            <Route path="/designation" element={<Designations />} />
            <Route path="/pays/:id?" element={<PayS />} /> 
            <Route path="/employee" element={<Employees />} />
            <Route path="/addemp/:id?" element={<AddEmployee />} />
            <Route path="/salarylist" element={<SalaryList />} />
            <Route path="/buyerdue" element={<BuyerDue />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/order" element={<Order />} />
            <Route path="/production" element={<Production/>} />
            <Route path="/purchasereport" element={<PurchaseReport/>} />
            <Route path="/salesreport" element={<SalesReport/>} />
            {/* <Route path="/supplierDue" element={<SalesReport/>} /> */}
            <Route path="/transaction" element={<Transaction/>} />
            <Route path="/permission" element={<Permission/>} />
            <Route path="/role" element={<Role/>} />
            <Route path="/companysetting" element={<CompanySetting/>} />
            <Route path="/currency" element={<Currency/>} />
            <Route path="/notification" element={<Notification/>} />
            <Route path="/systemsetting" element={<SystemSetting/>} />
            <Route path="/orderlist" element={<Ordersummary/>} />
            <Route path="/addneworder/:id?" element={<AddNeworder/>} />
            <Route path="/bookinglist" element={<Booklist/>} />
            <Route path="/addNewbooklist/:id?" element={<AddNeworder/>} />
            <Route path="/budgetlist" element={<Booklist/>} />
            <Route path="/addnewbudget/:id?" element={<Addnewbudget/>} />
            <Route path="/costing" element={<Costinglist/>} />
            <Route path="/sample" element={<Orderlist/>} />
            <Route path="/shipmentlist" element={<Shipmentslist/>} />
            <Route path="/buyers" element={<Buyer/>} />
            <Route path="/addbuyer/:id?" element={<Addbuyer/>} />
            <Route path="/suppliers" element={<Supplierlist/>} />
            <Route path="/buyerduelist" element={<Allbuyerduelist/>} />
          
            <Route path="/addnewshipment" element={<Addnewshipmentlist/>} />

            <Route path="/productionlist" element={<ProductionList/>} />
            <Route path="/addproduction/:id?" element={<AddProd/>} />
            <Route path="/Booking_list" element={<Booking_List/>} />

            {/* update */}
            <Route path="/add_new_booking" element={<Add_New_Booking/>}/>
            <Route path="/budget_list" element={<Budget_list/>}/>
            <Route path="/costingform" element={<Costingform/>}/>
            <Route path="/samplelist" element={<Samplelist/>}/>
            <Route path="/search" element={<SearchSamplelist/>}/>
            {/* <Route path="/search" element={<Samplelist/>}/> */}
            <Route path="/addnewsample" element={<Addnewsample/>}/>
            <Route path="/expList" element={<ExpList/>}/>
            <Route path="/lossprofit" element={<LossProfit/>}/>
            <Route path="/incomeList" element={<IncomeList/>}/>
            <Route path="/Income" element={<Incomelist/>}/>
            <Route path="/addnewincome" element={<Adddnewincomecategory/>}/>
            <Route path="/creditlist" element={<Createcredit/>}/>
            <Route path="/addnewsupplier" element={<Createaddsupplier/>} />

            <Route path="/addnewbuyer" element={<Addnewbuyer/>}/>
            <Route path="/buyerlist" element={<Buyerlist/>}/>
            <Route path="/supplierdue" element={<SupplierDue/>}/>
            <Route path="/bankAccount" element={<BankAccount/>}/>
            <Route path="/cashinhand" element={<CashInHand/>}/>
            <Route path="/cheques" element={<Cheques/>}/>
       


         
            
           
          </Route>
        </Routes>
        </Content>
        </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
