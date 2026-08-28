// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // 1. Components
// import ComponentsPage from "./Components/ComponentsPage.jsx";

// // 2. Fragment
// import FragmentsPage from "./Fragment/FragmentsPage.jsx";

// // 3. Props
// import PropsPage from "./Props/PropsPage.jsx";

// // 4. State
// import StatePage from "./State/StatePage.jsx";

// // 5. Conditional Rendering
// import ConditionalRenderingPage from "./ConditionalRendering/ConditionalRenderingPage.jsx";

// // 6. API
// import ApiPage from "./API/ApiPage.jsx";

// // 7. Composition
// import CompositionPage from "./Composition/CompositionPage.jsx";

// // 8. Form
// import DynamicFormHandling from "./Form/DynamicFormHandling.jsx";

// // 9. Global State
// import GlobalStatePage from "./pages/Global state/GlobalStatepage.jsx";

// // 10. API Status
// import ApiStatusPage from "./API/ApiStatusPage.jsx";

// // 11. HOC
// import HocPage from "./HOC/HocPage.jsx";

// // 12. Custom Hook
// import CustomHookpage from "./CustomHook/CustomHookpage.jsx";

// // 13. Pure Component
// import Purecomponentpage from "./PureComponent/Purecomponentpage.jsx";

// // 14. useCallback
// import Usecallback from "./UseCallback/Usecallback.jsx";

// // 15. useMemo
// import Usememopage from "./UseMemo/Usememopage.jsx";

// // 16. React Portal
// import Reactportalpage from "./ReactPortal/Reactportalpage.jsx";

// // 17. Event Binding
// import Eventbindingpage from "./EventBinding/Eventbindingpage.jsx";

// // 18. List Rendering
// import ListrenduringPage from "./ListRendering/ListrenduringPage.jsx";

// // 19. Destructuring
// import DestructingPage from "./Destructing/DestructingPage.jsx";

// // 20. Lazy Loading
// import LazyloadingPage from "./LazyLoading/LazyloadingPage.jsx";

// // 21. Function Components
// import FunctionalComponentspage from "./FunctionComponents/FunctionalComponentspage.jsx";

// // 22. Components JSX
// import Componentsjsxpage from "./ComponentsJSX/Componentsjsxpage.jsx";


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Home */}
//         <Route
//           path="/"
//           element={<h1>Welcome to React App</h1>}
//         />

//         {/* 1. Components */}
//         <Route
//           path="/component"
//           element={<ComponentsPage />}
//         />

//         {/* 2. Fragment */}
//         <Route
//           path="/fragment"
//           element={<FragmentsPage />}
//         />

//         {/* 3. Props */}
//         <Route
//           path="/props"
//           element={<PropsPage />}
//         />

//         {/* 4. State */}
//         <Route
//           path="/state"
//           element={<StatePage />}
//         />

//         {/* 5. Conditional Rendering */}
//         <Route
//           path="/conditional"
//           element={<ConditionalRenderingPage />}
//         />

//         {/* 6. API */}
//         <Route
//           path="/ApiComponent"
//           element={<ApiPage />}
//         />

//         {/* 7. Composition */}
//         <Route
//           path="/composition"
//           element={<CompositionPage />}
//         />

//         {/* 8. Form */}
//         <Route
//           path="/form"
//           element={<DynamicFormHandling />}
//         />

//         {/* 9. Global State */}
//         <Route
//           path="/global"
//           element={<GlobalStatePage />}
//         />

//         {/* 10. API Status */}
//         <Route
//           path="/Api"
//           element={<ApiStatusPage />}
//         />

//         {/* 11. HOC */}
//         <Route
//           path="/Hoc"
//           element={<HocPage />}
//         />

//         {/* 12. Custom Hook */}
//         <Route
//           path="/customhook"
//           element={<CustomHookpage />}
//         />

//         {/* 13. Pure Component */}
//         <Route
//           path="/purecomponent"
//           element={<Purecomponentpage />}
//         />

//         {/* 14. useCallback */}
//         <Route
//           path="/Usecallback"
//           element={<Usecallback />}
//         />

//         {/* 15. useMemo */}
//         <Route
//           path="/usememo"
//           element={<Usememopage />}
//         />

//         {/* 16. React Portal */}
//         <Route
//           path="/Reactportal"
//           element={<Reactportalpage />}
//         />

//         {/* 17. Event Binding */}
//         <Route
//           path="/Eventbinding"
//           element={<Eventbindingpage />}
//         />

//         {/* 18. List Rendering */}
//         <Route
//           path="/Listrenduriing"
//           element={<ListrenduringPage />}
//         />

//         {/* 19. Destructuring */}
//         <Route
//           path="/Destructing"
//           element={<DestructingPage />}
//         />

//         {/* 20. Lazy Loading */}
//         <Route
//           path="/Lazyloading"
//           element={<LazyloadingPage />}
//         />

//         {/* 21. Function Components */}
//         <Route
//           path="/FunctionComponents"
//           element={<FunctionalComponentspage />}
//         />

//         {/* 22. Components JSX */}
//         <Route
//           path="/Compoundsjsx"
//           element={<Componentsjsxpage />}
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react'
import {BrowserRouter,Routes, Route, Links } from 'react-router-dom'
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
import Purecomponentpage from './pages/Purecomponent_29-07-2026/Purecomponentpage'
import Reactmemopage from './pages/Reactmemo_29-07-2026/Reactmemopage'
import Usecallback from './pages/usecallback/Usecallbackpage'
import Usememopage from './pages/Usememo/Usememopage'
import Reactportalpage from './pages/Reactportal_30-07-2026/Reactportapage'
import Eventbindingpage from './pages/Eventbinding_30-07-2026/Eventbindiingpage'
import DestructingPage from './pages/Destructuring_31-07-2026/Destrucingpage'
import LazyloadingPage from './pages/Lazyloading_31-07-2026/Lazyloadingpage'
import Componentsjsxpage from './pages/Componentjsx_25-08-26/Componentsjsxpage'
import FunctionalComponentspage from './pages/Components_25-08-2026/FunctionalComponentspage'
import ClassComponent from './components_25-08-2026/classcompounds'
import ListrenduringPage from './pages/Listrenduring_25-08-2026/Listrenduringpage'
import Usestate from './pages/Usestate_26-08-2026/Usestatepage'
import UseEffect from './components_25-08-2026/Useeffect_26-08-2026/Useeffect'
import ApiCall from './components_25-08-2026/ApiCall_26-08-2026/ApiCall'
import LoadingErrorHandling from './components_25-08-2026/LoadingErrorHandling_26-08-2026/LoadingErrorHandling'
import UseRef from './components_25-08-2026/useRef_26-08-2026/useRefpage'


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
     <Route path='/customhook'element={<CustomHookpage/>}/>
     <Route path='/purecomponent'element={<Purecomponentpage/>}/>
     <Route path='/Reactmemo' element={<Reactmemopage/>}/>
     <Route path='/Usecallback' element={<Usecallbackpage/>}/>
     <Route path='/usememo' element={<Usememopage/>}/>
     <Route path='/Reactportal'element={<Reactportalpage/>}/>
     <Route path='/Eventbinding' element={<Eventbindingpage/>}/>
     <Route path='/Listrenduriing' elemenet={<ListrenduringPage/>}/>
     <Route path='/Destructing' element={<DestructingPage/>}/>
     <Route path='/Lazyloading' element={<LazyloadingPage/>}/>
     <Route path='/FunctionComponents' element={<FunctionalComponentspage/>}/>
     <Route path='/ClassCompound' element={<ClassComponent/>}/>
     <Route path='/Compoundsjsx' element={<Componentsjsxpage/>}/>
     <Route path='/Listrenduring' element={<ListrenduringPage/>}/>
     <Route path='/Usestate' element={<Usestate/>}/>
     <Route path='/UseEffect' element={<UseEffect/>}/>
     <Route path='/ApiCall' element={<Apicall/>}/>
     <Route path='/LoadingErrorHandling' element={<LoadingErrorHandling/>}/>
     <Route path='/UseRef' element={<UseRef/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App




