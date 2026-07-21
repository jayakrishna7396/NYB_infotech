import React from 'react'
import Main1 from '../../state mangment in api/Main1'
import ApiInfo from '../../topics of api/component/ApiInfo'
import StatusCode from '../../topics of api/component/StatusCode'
import UserList from '../../topics of api/component/UserList'
import AsyncAwaitApi from '../../topics of api/making the api call/component/AsyncAwaitApi'
import AxiosApi from '../../topics of api/making the api call/component/axiosApi'
import FetchApi from '../../topics of api/making the api call/component/FetchApi'
import PromiseApi from '../../topics of api/making the api call/component/PromiseApi'
import XMLHttpRequestApi from '../../topics of api/making the api call/component/XMLHttpRequestApi'
import UseHook from '../../use local hook/UseHook'

const StatePage = () => {
  return (
    <div>
        <Main1/>
        <h1>API</h1>
       <ApiInfo/>
       <StatusCode/>
       <UserList/>
       <AsyncAwaitApi/>
       <AxiosApi/>
       <FetchApi/>
       <PromiseApi/>
       <XMLHttpRequestApi/>
       <UseHook/>
       

           </div>
  )
}

export default StatePage