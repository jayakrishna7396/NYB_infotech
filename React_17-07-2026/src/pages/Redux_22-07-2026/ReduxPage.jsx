import React from 'react'
import ContextExample from '../../Components_17-07-2026/assigment on redux/components/ContextExample'
import ReduxExample from '../../Components_17-07-2026/assigment on redux/components/ReduxExample'
import UseReducerExample from '../../Components_17-07-2026/assigment on redux/components/UseReducerExample'
import Redux from '../../Components_17-07-2026/assigment on redux/Redux'
import ShoppingCart from '../../Components_17-07-2026/assigment on usereducer/components/ShoppingCart'
import { store } from '../../Components_17-07-2026/assigment on redux/redux/store'
import FormHandling from '../../Components_17-07-2026/assigment on usereducer/components/FormHandling'
import { Provider } from 'react-redux'
import UserEffect from '../../Components_17-07-2026/UseEffect-22-07-2026/A'

const ReduxPage = () => {
  return (
    <div>ReduxPage
       <h1>useReducer Project</h1>

      <Counter />

      <hr />

      <FormHandling />

      <hr />

      <ShoppingCart />
        <Provider store={store}>

      <UserProvider>

        <Redux />

      </UserProvider>

    </Provider>
    

    </div>
  )
}

export default ReduxPage