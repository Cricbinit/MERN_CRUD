import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios  from 'axios';

function EmployeeList() {

  let [emplist,setemplist]=useState([]);

  let navigate=useNavigate()

  let getemps=async ()=>
  {
    let {data}=await axios.get("https://mern-crud-fwpp.vercel.app/api/students/getStudents");
    console.log(data)
    setemplist(data)
  }


  useEffect(()=>
  { 
    getemps()
  },[])


  let viewEmployee=(eid)=>
  {
    navigate(`/emp/${eid}`)
  }

  let navigateToUpdateComponent=(eid)=>
    {
      localStorage.setItem("eid", eid)
      navigate("/update");
    }

    let deleteEmployee=async (eid)=>
    {
        await axios.delete(`http://localhost:4500/api/students/deleteStudent/${eid}`)
        getemps()
    }

  return (
    <section className='container col-md-12 mt-3'>
      <h1 className='fw-bold text-center mb-3'>EMPLOYEE LIST</h1>
        {emplist.data?.map(({fn,ln,mob,age,_id})=>
        {
            return <div key={_id} className="card m-2 d-inline-block" style={{width:"18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{`${fn} ${age}`}</h5>
              <p className="card-text">{mob}</p>
              <div className="container-fluid col-md-12">
              <button  className="btn btn-success col-lg-3 btn-sm" onClick={()=>{viewEmployee(_id)}}>View</button>
              <button  className="btn btn-secondary col-lg-6 btn-sm" onClick={()=>{navigateToUpdateComponent(_id)}}>Update</button>
              <button  className="btn btn-danger col-lg-3 btn-sm" onClick={()=>{deleteEmployee(_id)}}>Delete</button>
              </div>
            </div>
          </div>
        })}
    </section>
  )
}

export default EmployeeList
