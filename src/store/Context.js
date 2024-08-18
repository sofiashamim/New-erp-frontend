// import React, { useEffect, useState } from 'react'
// import createcontext from './CreateStore';

// const Context = (props) => {
// const [superadminid, setsuperadminid] = useState('');
//     const SuperAdminData=async()=>{
// const res=await fetch('http://localhost:8080/api/adminprofile')
// const data=await res.json()
// console.log('fagsdjkfhbsdfbjdsabfsdbc',data.data[0]._id)
// setsuperadminid(data.data)
//     }
// useEffect(()=>{
//     SuperAdminData()
// },[])
//   return (
//     <createcontext.Provider value={{SuperAdminData,superadminid}}>
//         {props.children}
//     </createcontext.Provider>
//   )
// }

// export default Context
import React, { useEffect, useState } from 'react'
import createcontext from './CreateStore';

const Context = (props) => {
  const [superadminid, setsuperadminid] = useState('');
  const [error, setError] = useState(null); // State to track errors

  const SuperAdminData = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/adminprofile');

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log('SuperAdmin ID:', data.data[0]._id);
      setsuperadminid(data.data[0]._id); // Update the state with the correct value

    } catch (error) {
      console.error('Error fetching SuperAdmin data:', error);
      setError(error.message); // Update the error state
    }
  }

  useEffect(() => {
    SuperAdminData();
  }, []);

  return (
    <createcontext.Provider value={{ SuperAdminData, superadminid, error }}>
      {props.children}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>} {/* Display error message */}
    </createcontext.Provider>
  );
}

export default Context;
