import React from 'react'
import ComponentsPage from './pages/components/ComponentsPage'
import FragmentsPage from './pages/Fragments/FragmentsPage'
import PropsPage from './pages/props/PropsPage'
import StatePage from './pages/statemanagement/StatePage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/component" element={<ComponentsPage/>}/>
        <Route path="/fragment" element={<FragmentsPage/>}/>
        <Route path='/props' element={<PropsPage/>}/>
        <Route path='/state' element={<StatePage/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App