import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AddEmployee from './Components/AddEmployee'
import UpdateEmployee from './Components/UpdateEmployee'
import EmployeeList from './Components/EmployeeList'
import SingleEmployee from './Components/SingleEmployee'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/add' element={<AddEmployee/>}/>
            <Route path='/update' element={<UpdateEmployee/>}/>
            <Route path='/emplist' element={<EmployeeList/>}/>
            <Route path='/emp/:eid' element={<SingleEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
