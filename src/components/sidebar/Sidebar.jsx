
// import { Menu } from 'antd';
// import Sider from 'antd/es/layout/Sider';
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import StoreIcon from '@mui/icons-material/Store';
// import InsertChartIcon from '@mui/icons-material/InsertChart';
// import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
// import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// const Sidebar = (props) => {
//   const { collapsed, setCollapsed } = props;

//   const menuItems = [
//     { key: '1', icon: <DashboardIcon />, label: 'Dashboard', link: '/' },
//     { key: '2', icon: <PersonOutlineIcon />, label: 'Order Management' ,
//       children: [

//         { key: '2-1', label: 'Order List',link:"/orderlist" },
//         { key: '2-2', label: 'Booking List',link:"/bookinglist" },
//         // { key: '2-3', label: 'Budget List',link:"/budgetlist" },
//         { key: '2-3', label: 'Budget_list',link:"/budget_list" },

//         { key: '2-4', label: 'Costing',link:"/costing" },
//         { key: '2-5', label: 'Sample',link:"/Samplelist" },
//         { key: '2-6', label: 'Shipment List',link:"/shipmentlist" },
       
//       ]
//     },
//     {
//       key: '3', 
//       icon: <StoreIcon />, 
//       label: 'Manage Inventory', 
//       children: [
//         { key: '3-1', label: 'Units',link:"/unit" },
//         { key: '3-2', label: 'Accessory List',link:"/accessory" },
//         { key: '3-3', label: 'Accessories Orders',link:"/accOrderlist" },
//       ]
//     },
//     {
//       key: '4', 
//       icon: <CreditCardIcon />, 
//       label: 'User Management', 
//       children: [
//         { key: '4-1', label: 'Admin',link:"/admin" },
//         { key: '4-2', label: 'Buyer',link:"/buyer" },
//         { key: '4-3', label: 'Merchandiser',link:"/merchandiser" },
//         { key: '4-4', label: 'Commercial',link:"/commercial" },
//         { key: '4-5', label: 'Accountant',link:"/accountant" },
//         { key: '4-6', label: 'Production' ,link:"/productionlist" },
//       ]
//     },
//     {
//       key: '5', 
//       icon: <LocalShippingIcon />, 
//       label: 'Accounts & Bank', 
//       children: [
//         { key: '5-1', label: 'Commercial',
//           children: [
//             { key: '5-1-1', label: 'ccc' },
//             { key: '5-1-2', label: 'ccc'},
//           ]
//          },
//         { key: '5-2', label: 'General'},
//       ]
//     },
//     { key: '6', icon: <InsertChartIcon />, label: 'Party List',
//       children: [
//         { key: '6-1', label: 'Buyers', link:"/buyers" },
//         { key: '6-2', label: 'Suppliers',link:"/suppliers" },
  
//       ]
//      },

//     { key: '7',
//        icon: <NotificationsNoneIcon />,
//         label: 'HRM Management',
//         children: [
//           { key: '7-1', label: 'Designation', link:"/designation" },
//           { key: '7-2', label: 'Employee',link:"/employee" },
//           { key: '7-3', label: 'Salaries',link:"/salarylist" },
//         ]
//       },
//     { key: '8', icon: <SettingsSystemDaydreamOutlinedIcon />, label: 'Party Due List',link:"buyerduelist"},
//     { key: '9', icon: <PsychologyOutlinedIcon />, label: 'Loss Profit',link:"/lossprofit" },
//     { key: '10', icon: <SettingsApplicationsIcon />, label: 'Reports' ,
//       children: [
//         { key: '10-1', label: 'BuyerDue',link:"/buyerdue" },
//         { key: '10-2', label: 'MyProfile',link:"/myprofile" },
//         { key: '10-3', label: 'Order',link:"/order" },
//         { key: '10-4', label: 'Production',link:"/production" },
//         { key: '10-5', label: 'Parchase Report',link:"/purchasereport" },
//         { key: '10-6', label: 'Sales Report',link:"/salesreport" },
//         { key: '10-7', label: 'Supplier Due',link:"/supplierdue" },
//         { key: '10-8', label: 'Transaction',link:"/transaction" },
//       ]
//     },
//     { key: '11', icon: <AccountCircleOutlinedIcon />, label: 'Roles and Permission',
//       children: [
//         { key: '11-1', label: 'Permission',link:"permission" },
//         { key: '11-2', label: 'Role',link:"role" },
     
//       ]

//      },
//     { key: '12', icon: <ExitToAppIcon />, label: 'Setting',
//       children: [
//         { key: '12-1', label: 'Company Setting',link:"companysetting" },
//         { key: '12-2', label: 'Currency',link:"/currency" },
//         { key: '12-3', label: 'Notification', link:"/notification" },
//         { key: '12-4', label: 'System Setting', link:"/systemsetting" },
//       ]
//      },
//   ];

  
//   return (
//     <Sider trigger={null} collapsible collapsed={collapsed}>
//       <div style={{padding:"5px"}}>
//  <img src="https://erpsoftware.acnoo.com/assets/images/logo/backend_logo.svg" alt="Logo"/>

//       </div>
    
//     <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//       {menuItems.map((item) => (
//         item.children ? (
//           <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
//             {item.children.map((child) => (
//               <Menu.Item key={child.key}>
//                 {child.link ? <Link style={{textDecoration:"none"}} to={child.link}>{child.label}</Link> : child.label}
//               </Menu.Item>
//             ))}
//           </Menu.SubMenu>
//         ) : (
//           <Menu.Item key={item.key} icon={item.icon}>
//             {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
//           </Menu.Item>
//         )
//       ))}
//     </Menu>
   
//   </Sider>
//   );
// };

// export default Sidebar;
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Sidebar = (props) => {
  const { collapsed, setCollapsed } = props;

  const menuItems = [
    { key: '1', icon: <DashboardIcon />, label: 'Dashboard', link: '/' },
    {
      key: '2', icon: <PersonOutlineIcon />, label: 'Order Management',
      children: [
        { key: '2-1', label: 'Order List', link: "/orderlist" },
        { key: '2-2', label: 'Booking List', link: "/bookinglist" },
        { key: '2-3', label: 'Budget_list', link: "/budget_list" },
        { key: '2-4', label: 'Costing', link: "/costing" },
        { key: '2-5', label: 'Sample', link: "/Samplelist" },
        { key: '2-6', label: 'Shipment List', link: "/shipmentlist" },
      ]
    },
    {
      key: '3', icon: <StoreIcon />, label: 'Manage Inventory',
      children: [
        { key: '3-1', label: 'Units', link: "/unit" },
        { key: '3-2', label: 'Accessory List', link: "/accessory" },
        { key: '3-3', label: 'Accessories Orders', link: "/accOrderlist" },
      ]
    },
    {
      key: '4', icon: <CreditCardIcon />, label: 'User Management',
      children: [
        { key: '4-1', label: 'Admin', link: "/admin" },
        { key: '4-2', label: 'Buyer', link: "/buyer" },
        { key: '4-3', label: 'Merchandiser', link: "/merchandiser" },
        { key: '4-4', label: 'Commercial', link: "/commercial" },
        { key: '4-5', label: 'Accountant', link: "/accountant" },
        { key: '4-6', label: 'Production', link: "/productionlist" },
      ]
    },
    {
      key: '5', icon: <LocalShippingIcon />, label: 'Accounts & Bank',
      children: [
        {
          key: '5-1', label: 'Commercial',
          children: [
            { key: '5-1-1', label: 'Bank Accounts',link:"/bankAccount" },
            { key: '5-1-2', label: 'Cash in hand',link:'/cashinhand' },
            { key: '5-1-3', label: 'Cheques',link:'/cheques' },
          ]
        },
        { key: '5-2', label: 'General',
          children: [
            { key: '5-2-1', label: 'ccc' },
            { key: '5-2-2', label: 'ccc' },
          ]

         },
      ]
    },
    {
      key: '6', icon: <InsertChartIcon />, label: 'Party List',
      children: [
        { key: '6-1', label: 'Buyers', link: "/buyers" },
        { key: '6-2', label: 'Suppliers', link: "/suppliers" },
      ]
    },
    {
      key: '7', icon: <NotificationsNoneIcon />, label: 'HRM Management',
      children: [
        { key: '7-1', label: 'Designation', link: "/designation" },
        { key: '7-2', label: 'Employee', link: "/employee" },
        { key: '7-3', label: 'Salaries', link: "/salarylist" },
      ]
    },
    { key: '8', icon: <SettingsSystemDaydreamOutlinedIcon />, label: 'Party Due List', link: "buyerduelist" },
    { key: '9', icon: <PsychologyOutlinedIcon />, label: 'Loss Profit', link: "/lossprofit" },
    {
      key: '10', icon: <SettingsApplicationsIcon />, label: 'Reports',
      children: [
        { key: '10-1', label: 'BuyerDue', link: "/buyerdue" },
        { key: '10-2', label: 'MyProfile', link: "/myprofile" },
        { key: '10-3', label: 'Order', link: "/order" },
        { key: '10-4', label: 'Production', link: "/production" },
        { key: '10-5', label: 'Parchase Report', link: "/purchasereport" },
        { key: '10-6', label: 'Sales Report', link: "/salesreport" },
        { key: '10-7', label: 'Supplier Due', link: "/supplierdue" },
        { key: '10-8', label: 'Transaction', link: "/transaction" },
      ]
    },
    {
      key: '11', icon: <AccountCircleOutlinedIcon />, label: 'Roles and Permission',
      children: [
        { key: '11-1', label: 'Permission', link: "permission" },
        { key: '11-2', label: 'Role', link: "role" },
      ]
    },
    {
      key: '12', icon: <ExitToAppIcon />, label: 'Setting',
      children: [
        { key: '12-1', label: 'Company Setting', link: "companysetting" },
        { key: '12-2', label: 'Currency', link: "/currency" },
        { key: '12-3', label: 'Notification', link: "/notification" },
        { key: '12-4', label: 'System Setting', link: "/systemsetting" },
      ]
    },
  ];

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
          </Menu.Item>
        );
      }
    });
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{ padding: "5px" }}>
        <img src="https://erpsoftware.acnoo.com/assets/images/logo/backend_logo.svg" alt="Logo" />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {renderMenuItems(menuItems)}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
