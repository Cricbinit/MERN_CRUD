import React, { useEffect, useState } from 'react' 
import axios from "axios"
function UpdateEmployee() {
    let [empdata, setempdata] = useState({ fn: "", ln: "", email: "", gender: "", mob: "", add: "", age: "" });
   const BASE_URL = 'https://35.173.128.186'
    axios.defaults.withCredentials = true

    let getEmpData=async ()=>
    {
      let {data}=await axios.get(`${BASE_URL}/api/students/getSingleStudent/${localStorage.getItem("eid")}`);
      console.log(localStorage.getItem("eid"));
      setempdata(data.data)
      console.log(data.data);
    }
   

  useEffect(()=>
  {
    getEmpData()
  },[])

    let updateEmpData = ({ target: { name, value } }) => {
        
        setempdata({ ...empdata, [name]: value })
    }
    console.log(empdata);
    let updateEmployee =async  (e) => {
        e.preventDefault();
        let sentData=await axios.put(`${BASE_URL}/api/student/updateStudent/${localStorage.getItem("eid")}`,empdata);
        console.log(sentData)
    }
    return (
        <form onSubmit={updateEmployee} className='container col-md-12 border border-success mt-4 p-3' >
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>ADD EMPLOYEE</h1>
            <section className='container row'>
                <div className='my-3 col-md-6'>
                    <input onChange={updateEmpData} type="text" name="fn" className='form-control border-primary' placeholder='First Name' 
                    value={empdata.fn} />
                </div>
                <div className='my-3 col-md-6'>
                    <input onChange={updateEmpData} type="text" name="ln" className='form-control border-primary' placeholder='Last Name'
                    value={empdata.ln} />
                </div>
            </section>
            <section className='container row'>
                <div className='my-3 col-md-6'>
                    <input onChange={updateEmpData} type="email" name="email" className='form-control border-primary' placeholder='Email' 
                    value={empdata.email}/>
                </div>
                <div className='my-3 col-md-6'>
                    <input onChange={updateEmpData} type="tel" name="mob" className='form-control border-primary' placeholder='Mobile'
                    value={empdata.mob} />
                </div>
            </section>
            <section className='container row'>
                <div className='my-3 col-md-6'>
                    <input onChange={updateEmpData} type="number" name="age" className='form-control border-primary' placeholder='Age' 
                    value={empdata.age}/>
                </div>

                <div className='my-3 col-md-6' onChange={updateEmpData} >
                <label className="form-check-label me-2">Gender </label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio1"value={empdata.gender}/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value={empdata.gender}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value={empdata.gender} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Others</label>
                    </div>
                </div>
            </section>
            <section className='container row'>
                <div className='my-3 col-md-12'>
                    <textarea onChange={updateEmpData} name="add" className='form-control border-primary p-5' placeholder='Address'
                    value={empdata.add} ></textarea>
                </div>
                
            </section>
            <section className='container row'>
                <div className='d-grid my-2'>
                    <button type='submit' className='btn btn-outline-success btn-lg'>Update</button>
                </div>
            </section>
        </form>
    )
}
export default UpdateEmployee
