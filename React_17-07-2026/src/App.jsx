
import React from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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
import UseEffect from './components_25-08-2026/Usestate_26-08-2026/UseEffect_26-08-2026/UseEffect'
import ApiCall from './components_25-08-2026/ApiCall_26-08-2026/ApiCall'
import LoadingErrorHandling from './components_25-08-2026/LoadingErrorHandling_26-08-2026/LoadingErrorHandling'
import UseRef from './components_25-08-2026/Usestate_26-08-2026/useRef_26-08-2026/useRef'
import LazyLoadingPage from './pages/LazyLoading_31-08-2026/LazyLoadingpage'
import CustomHookPage from './pages/CustomHook_31-08-2026/CustomHookPage'
import UseMemoPage from './pages/UseMemo_31-08-2026/UseMemoPage'
import UseCallbackPage from './pages/UseCallback_31-08-2026/UseCallbackpage'
import MemoPage from './pages/ReactMemo_31-08-2026/Memopage'
import BrowserRouterpage from './pages/BrowserRouter_31-08-2026/BrowserRouterpage'
import Routerpage from './pages/Router_31-08-2026/Routerpage'
import DynamicRoutingpage from './pages/DynamicRouting_31-08-2026/DynamicRoutingpage'
import ProtectedRouterpage from './pages/ProtectedRouter_31-08-2026/ProtectedRouterpage'
import ControlledFormpage from './pages/ControlledForm_01-09-2026/ControlledFormPage'
import UncontrolledForm from './components_25-08-2026/UncontrolledForm_01-09-2026/UncontrolledForm'
import UncontrolledFormpage from './pages/UncontrolledForm_01-09-2026/UncontrolledFormpage'
import FormHandlingpage from './pages/FormHandling_01-08-2026/FormHandlingpage'
import FormValidationpage from './pages/FormValidation_01-09-2026/FormValidationpage'
import DynamicFormpage from './pages/DynamicForm_01-09-2026/DynamicFormpage'
import APIcallpage from './pages/APIcall_01-09-2026/APIcallpage'
import FetchAPI from './components_25-08-2026/FetchAPI_01-09-2026/FetchAPI'
import FetchAPIpage from './pages/FetchAPI_01-09-2026/FetchAPIpage'
import QueryParamspage from './pages/QueryParams_01-09-2026/QueryParamsPage'
import ErrorHandlingpage from './pages/ErrorHandling_01-09-2026/ErrorHandlingpage'
import Loadingpage from './pages/Loading_01-09-2026/LoadingPage'
import APIResponsepage from './pages/APIResponse_01-09-2026/APIResponsePage'
import RegistrationFormpage from './pages/Registration_01-09-2026/RegistrationFormpage'
import ProductSearchpage from './pages/ProductSearch_01-09-2026/ProductSearchpage'
import ReactMemopage from './pages/ReactMemo_01-09-2026/Reactmemopage'
import UseMemopage from './pages/UseMemo_01-09-2026/UseMemoPage'
import UseCallbackpage from './pages/UseCallback_01-09-2026/UseCallbackPage'
import LazyLoadingpage from './pages/LazyLoading_01-09-2026/LazyLoadingPage'
import CodeSplittingpage from './pages/CodeSplitting_01-09-2026/CodeSplittingPage'
import ContextAPIpage from './pages/ContextAPI_01-09-2026/ContextAPIpage'
import UseReducerpage from './pages/UseReducer_01-09-2026/UseReducerPage'
import ReactRouterpage from './pages/ReactRouter_01-09-2026/ReactRouterpage'
import NestedRoutingpage from './pages/NestedRouting_02-09-2026/NestedRoutingpage'
import LoginPage from './pages/ProtectedRoute_02-09-2026/LoginPage'
import NotFoundpage from './pages/NotFound_02-09-2026/NotFoundpage'
import ProtectedRoutingpage from './pages/ProtectedRoute_02-09-2026/ProtectedRoutingpage'
import Callbackpage from './pages/CallbackFunction_02-09-2026/Callbackpage'
import Hocpage from './pages/Hoc_02-09-2026/Hocpage'
import FirstClassFunctionPage from './pages/FirstClassFunction_02-09-2026/FirstClassFunctionpage'
import ClosurePage from './pages/Closure_02-9-2026/ClosurePage'
import IIFEPage from './pages/IIFE_02-09-2026/IIFEPage'
import PureImpurepage from './pages/PureImpureFunction_02-09-2026/PureImpurepage'
import ObjectDestructuringPage from './pages/objectdestructuring_02-09-2026/ObjectDestructuringPage'
import ObjectMethodsPage from './pages/objectmethods_02-09-2026/ObjectMethodsPage'
import ObjectKeysPage from './pages/objectkeys_02-09-2026/ObjectKeysPage'
import ObjectValuesPage from './pages/Objectvalues_02-09-2026/ObjectValuesPage'
import ObjectEntriesPage from './pages/objectentries_02-09-2026/ObjectEntriesPage'
import ObjectAssignpage from './pages/objectassign_02-09-2026/ObjectAssignpage'
import OptionalChainingPage from './pages/optionalchaining_02-09-2026/OptionalChainingPage'
import NullishCoalescingPage from './pages/nullishcoalescing_02-09-2026/NullishCoalescingPage'
import SpreadAndRestPage from './pages/spreadandrest_02-09-2026/SpreadAndRest'






const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={<h1>Welcome to React App</h1>}
        />
        <Route path="/component" element={<ComponentsPage />} />
        <Route path="/fragment" element={<FragmentsPage />} />
        <Route path='/props' element={<PropsPage />} />
        <Route path='/state' element={<StatePage />} />
        <Route path='/conditional' element={<ConditionalRenderingPage />} />
        <Route path='/ApiComponent' element={<ApiPage />} />
        <Route path='/composition' element={<CompositionPage />} />
        <Route path='/form' element={<DynamicFormHandling />} />
        <Route path='/global' element={<GlobalStatepage />} />
        <Route path='/Api' element={<ApiStatusPage />} />
        <Route path='/Hoc' element={<HocPage />} />
        <Route path='/customhook' element={<CustomHookpage />} />
        <Route path='/purecomponent' element={<Purecomponentpage />} />
        <Route path='/Reactmemo' element={<Reactmemopage />} />
        <Route path='/Usecallback' element={<Usecallback />} />
        <Route path='/Usememo' element={<Usememopage />} />
        <Route path='/Reactportal' element={<Reactportalpage />} />
        <Route path='/Eventbinding' element={<Eventbindingpage />} />
        <Route path='/Listrenduriing' element={<ListrenduringPage />} />
        <Route path='/Destructing' element={<DestructingPage />} />
        <Route path='/Lazyloading' element={<LazyloadingPage />} />
        <Route path='/FunctionComponents' element={<FunctionalComponentspage />} />
        <Route path='/ClassCompound' element={<ClassComponent />} />
        <Route path='/Compoundsjsx' element={<Componentsjsxpage />} />
        <Route path='/Listrenduring' element={<ListrenduringPage />} />
        <Route path='/Usestate' element={<Usestate />} />
        <Route path='/UseEffect' element={<UseEffect />} />
        <Route path='/ApiCall' element={<ApiCall />} />
        <Route path='/LoadingErrorHandling' element={<LoadingErrorHandling />} />
        <Route path='/UseRef' element={<UseRef />} />
        <Route path='/Lazy' element={<LazyLoadingPage/>}/>
       <Route path='/Custom' element={<CustomHookPage/>}/>
       <Route path='/Reactmemo' element={<MemoPage/>}/>
       <Route path='/Usememo1' element={<UseMemoPage/>}/>
       <Route path='/Usecallback' element={<UseCallbackPage/>}/>
       <Route path='/BrowserRouter' element={<BrowserRouterpage/>}/>
       <Route path ='/Router' element={<Routerpage/>}/>
       <Route path='/DynamicRouter' element={<DynamicRoutingpage/>}/>
       <Route path='/ProtectedRouter' element={<ProtectedRouterpage/>}/>
       <Route path='/ControlledForm' element={<ControlledFormpage/>}/>
       <Route path='/UncontrolledForm' element={<UncontrolledFormpage/>}/>
       <Route path='/FormHandling' element={<FormHandlingpage/>}/>
       <Route path='/FormValidation' element={<FormValidationpage/>}/>
       <Route path='/DynamicForm' element={<DynamicFormpage/>}/>
       <Route path='/APIcall' element={<APIcallpage/>}/>
       <Route path='/FetchAPI' element={<FetchAPIpage/>}/>
       <Route path='/QueryParams' element={<QueryParamspage/>}/>
       <Route path='/ErrorHandling' element={<ErrorHandlingpage/>}/>
       <Route path='/Loading' element={<Loadingpage/>}/>
       <Route path='/APIReponse' element={<APIResponsepage/>}/>
       <Route path='/RegistrationForm' element={<RegistrationFormpage/>}/>
       <Route path='/ProductSearch' element={<ProductSearchpage/>}/>
       <Route path='/ReactMemo' element={<ReactMemopage/>}/>
       <Route path='/UseMemo' element={<UseMemopage/>}/>
       <Route path='/UseCallback' element={<UseCallbackpage/>}/>
       <Route path='/LazyLoading' element={<LazyLoadingpage/>}/>
       <Route path='/CodeSplitting' element={<CodeSplittingpage/>}/>
       <Route path='/ContextAPI' element={<ContextAPIpage/>}/>
       <Route path='/UseReducer' element ={<UseReducerpage/>}/>
       <Route path='/ReactRouter' element={<ReactRouterpage/>}/>
       <Route path='/NestedRouting' element={<NestedRoutingpage/>}/>
       <Route path='/Login' element={<LoginPage/>}/>
       <Route path='/ProtectedRouting' element={<ProtectedRoutingpage/>}/>
       <Route path='/NotFound' element={<NotFoundpage/>}/>
       <Route path='/Callback' element={<Callbackpage/>}/>
       <Route path='/Hoc' element={<Hocpage/>}/>
       <Route path='/FirstClassFunction' element={<FirstClassFunctionPage/>}/>
       <Route path='/Closure' element={<ClosurePage/>}/>
       <Route path='/IIFE' element={<IIFEPage/>}/>
       <Route path='/PureImpure' element={<PureImpurepage/>}/>
       <Route path='/ObjectDestructing' element={<ObjectDestructuringPage/>}/>
       <Route path='/ObjectMethods' element={<ObjectMethodsPage/>}/>
       <Route path='/ObjectKeys' element={<ObjectKeysPage/>}/>
       <Route path='/ObjectValues' element={<ObjectValuesPage/>}/>
       <Route path='/ObjectEntries' element={<ObjectEntriesPage/>}/>
       <Route path='/ObjectAssign' element={<ObjectAssignpage/>}/>
       <Route path='/OptionalChaining' element={<OptionalChainingPage/>}/>
       <Route path='/NullishCoalescing' element={<NullishCoalescingPage/>}/>
       <Route path='/SpreadAndRest' element={<SpreadAndRestPage/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App




