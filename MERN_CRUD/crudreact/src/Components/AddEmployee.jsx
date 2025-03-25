import React, { useState } from 'react'

import axios from "axios"

function AddEmployee() {
    let [empdata, setempdata] = useState({ fn: "", ln: "", email: "", gender: "", mob: "", add: "", age: "" });
    // axios.defaults.withCredentials = true
    axios.defaults.withCredentials = true;
    
    const BASE_URL = 'https://35.173.128.186';
    let updateEmpData = ({ target: { name, value } }) => {
        setempdata({ ...empdata, [name]: value })
    }

    let addEmployee =async  (e) => {
          e.preventDefault();
        let sentData=await axios.post(`${BASE_URL}/api/students/addstudent`,empdata);
        setempdata({ fn: "", ln: "", email: "", gender: "", mob: "", add: "", age: "" })
        console.log(sentData)
    }
    return (
        <form onSubmit={addEmployee} className='container col-md-12 border border-success mt-4 p-3' >
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>ADD EMPLOYEE</h1>
            <section className='container row'>
                <div className='my-3 col-md-6'>
                    <input value={empdata.fn} onChange={updateEmpData} type="text" name="fn" className='form-control border-primary' placeholder='First Name' />
                </div>
                <div className='my-3 col-md-6'>
                    <input value={empdata.ln} onChange={updateEmpData} type="text" name="ln" className='form-control border-primary' placeholder='Last Name' />
                </div>
            </section>
            <section className='container row'>
                <div className='my-3 col-md-6'>
                    <input value={empdata.email} onChange={updateEmpData} type="email" name="email" className='form-control border-primary' placeholder='Email' />
                </div>
                <div className='my-3 col-md-6'>
                    <input value={empdata.mob} onChange={updateEmpData} type="tel" name="mob" className='form-control border-primary' placeholder='Mobile' />
                </div>
            </section>
            <section className='container row'>
                <div className='my-3 col-md-6'>
                    <input value={empdata.age} onChange={updateEmpData} type="number" name="age" className='form-control border-primary' placeholder='Age' />
                </div>

                <div className='my-3 col-md-6' onChange={updateEmpData}>
                <label className="form-check-label me-2">Gender </label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value={empdata.gender}/>
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
                    <textarea value={empdata.add} onChange={updateEmpData} name="add" className='form-control border-primary p-5' placeholder='Address' ></textarea>
                </div>
                
            </section>

            <section className='container row'>
                <div className='d-grid my-2'>
                    <button type='submit' className='btn btn-outline-success btn-lg'>Add</button>
                </div>
            </section>
        </form>
    )
}

export default AddEmployee
