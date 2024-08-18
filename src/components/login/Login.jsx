import React, { useRef } from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Link } from 'react-router-dom';
const Login = () => {
    let usernameRef=useRef()
    let passwordRef=useRef()
  let handlesubmit=async()=>{
    let obj={
        usernameRef:usernameRef.current.value,
        passwordRef:passwordRef.current.value
    }
  }
  return (
    <div className='w-full absolute top-0 right-0 bottom-0 left-0  login-page p-3 gap-5  bg-purple-400' style={{height:"100vh"}}>
       
    <form className='w-1/2 h-2/3 bg-white rounded-3xl p-10 m-auto mt-5  pt-5 '>
    <h1 className='fw-bold text-center' style={{fontSize:"2rem"}}>Welcome to <span className='text-purple-500 fw-bold'>Garments ERP</span></h1>
    <p className='text-center mb-4'>Please login in to your account</p>
  <div className="mb-3 w-auto d-flex ">
    <div className='w-12 bg-gray-50 p-3 '><FaRegUser /> </div>
    {/* <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> */}

  <input type="text" ref={usernameRef} className="form-control" id="exampleInputEmail1"  placeholder='Enter your Username ' />
  </div>
  <div className="mb-3w-auto d-flex ">
  <div className='w-12 bg-gray-50 p-3'> <IoIosLock /></div>


    <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" placeholder='Enter Password' />
  </div>
  
  <div className="mb-3   mt-3 w-auto d-flex  form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />

  <label className="form-check-label ms-2" htmlFor="exampleCheck1 "> </label>
  {/* <Link to='/forgot'> */}
  <p type="submit" className="ms-auto "><Link to='/forgot'>Forgot Password?</Link></p>

  {/* </Link> */}
</div>

  <Link  to={'/home'} type="submit " onClick={handlesubmit} className=" btn btn-primary" style={{width:"700px"}}>Login</Link>
  <div className='main-div  w-auto h-8 d-flex gap-16 mt-3 text-white ' style={{fontWeight:"bold"}}>
<div className= ' w-32 bg-green-500 pl-4 pt-1' style={{borderRadius:"5px"}}>
    Super Admin
</div>
<div className='w-32 pl-11 pt-1  bg-blue-400'style={{borderRadius:"5px"}}>
  Admin
</div>
<div className='w-32 pl-8 pt-1 bg-orange-600' style={{borderRadius:"5px"}}>
   Manager
</div>
<div className='w-32 pl-3 pt-1 bg-pink-600' style={{borderRadius:"5px"}}>
Merchandiser</div>
  </div>
  {/* second-main-div */}
  <div className='main-div w-auto h-8  text-white d-flex gap-16 mt-3' style={{fontWeight:"bold"}}>
<div className='w-32 pl-4 pt-1 bg-black'style={{borderRadius:"5px",borderRight:"5px"}}>
 Commercial
</div>
<div className='w-32  pl-5 pt-1 ' style={{background:"maroon",borderRadius:"5px"}}>
Accountant</div>
<div className='w-32 pl-5 pt-1 bg-sky-700'style={{borderRadius:"5px"}}>
Production
</div>
<div className=' w-32  bg-green-600 pl-10 pt-1' style={{borderRadius:"5px"}}> 
Buyer</div>
  </div>
</form>

    </div>
  )
}

export default Login
