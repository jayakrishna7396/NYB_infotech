import React from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import ComponentsPage from './pages/components/ComponentsPage'
import FragmentsPage from './pages/Fragments/FragmentsPage'
import PropsPage from './pages/props/PropsPage'
import ConditionalRenderingPage from './pages/conditional renduring_22-07-2026/ConditionalRenderingPage'
import CompositionPage from './pages/Composition/CompositionPage'
import StatePage from "./pages/statemanagement/StatePage"
import ApiPage from "./pages/ApiComponent/ApiPage"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/component" element={<ComponentsPage/>}/>
        <Route path="/fragment" element={<FragmentsPage/>}/>
        <Route path='/props' element={<PropsPage/>}/>
        <Route path='/state' element={<Statepage/>}/>
        <Route path='/conditional' element={<ConditionalRenderingPage/>}/>
        <Route path='/ApiComponent' element={<ApiPage/>}/>
      <Route path='/composition' element={<CompositionPage/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App



