import React from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import ComponentsPage from './pages/components/ComponentsPage'
import FragmentsPage from './pages/Fragments/FragmentsPage'
import PropsPage from './pages/props/PropsPage'
import ConditionalRenderingPage from './pages/conditional renduring_22-07-2026/ConditionalRenderingPage'
import CompositionPage from './pages/Composition/CompositionPage'
import StatePage from "./pages/statemanagement/StatePage"
import ApiPage from "./pages/ApiComponent/ApiPage"
import DynamicFormHandling from './Components_17-07-2026/DynamicFormHandling/DyamicFormHandling'
import FragmentComponent from './Components_17-07-2026/Assigment on functional compound_20-07-2026/jsx practise/Fragment'
import GlobalStatepage from './pages/Global state/GlobalStatepage'
import ApiStatusPage from './pages/ApiComponent/ApiStatuspage'
import HocPage from './pages/Hoc_28-07-2026/Hocpage'
import CustomHookpage from './pages/CustomHook/CustomHookpage'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
         {/* Home Page */}
        <Route
          path="/"
          element={<h1>Welcome to React App</h1>}
        />
        <Route path="/component" element={<ComponentsPage/>}/>
        <Route path="/fragment" element={<FragmentsPage/>}/>
        <Route path='/props' element={<PropsPage/>}/>
        <Route path='/state' element={<StatePage/>}/>
        <Route path='/conditional' element={<ConditionalRenderingPage/>}/>
        <Route path='/ApiComponent' element={<ApiPage/>}/>
      <Route path='/composition' element={<CompositionPage/>}/>
      <Route path= '/form' element={<DynamicFormHandling/>}/>
      <Route path='/global' element={<GlobalStatepage/>}/>
      <Route path='/Api' element={<ApiStatusPage/>}/>
     <Route path='/Hoc' element={<HocPage/>}/>
     <Route path='/CustomHook'element={<CustomHookpage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App


