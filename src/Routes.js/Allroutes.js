import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Token from '../Component/token'

function Allroutes() {
  return (
    <div>
        <Routes>
        <Route path="/token" element={<Token/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes