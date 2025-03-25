import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
import "../index.css"

function SingleEmployee() {
let [empdata,setempdata]=useState({})
  const BASE_URL = 'https://35.173.128.186'

  axios.defaults.withCredentials = true
  let {eid}=useParams();
console.log(eid);
  let getEmpData=async ()=>
  {
    let {data}=await axios.get(`${BASE_URL}/api/students/getSingleStudent/${eid}`);
    console.log(data);
    setempdata(data)
  }
  console.log(empdata)
useEffect(()=>
{
  getEmpData()
},[])
  return (
    <section className='mainCardsContainer'>
      <div className='cards'>
      <h1 style={{color:"green"}}>Name: {`${empdata.data?.fn}`}</h1>
      <h1 style={{color:"red"}}>Age : {empdata.data?.age}</h1>
      <h1>Mobile: {empdata.data?.mob}</h1>
      <h1>Email: {empdata.data?.email}</h1>
      <h1>Address: {empdata.data?.add}</h1>
      <h1>Gender: {empdata.data?.gender}</h1>
    </div>
    </section>
  )
}

export default SingleEmployee
