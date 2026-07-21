import React from 'react'
import Footer from '../../Parent and Child Component Hierarchy/footer'
import Header from '../../Parent and Child Component Hierarchy/Header'
import Content from '../../Parent and Child Component Hierarchy/content'
import Parent from '../../Parent to Child Communication/Parent'
import Main from '../../Parentchild Hierarchy/Main'
import Child2 from '../../parenttochild/Child2'
import Parent1 from '../../Passing Data from Child to Parent/Parent1'
import Student from '../../Passing Data from Parent to Child/Student'
import Student2 from '../../prop and state/Student2'
import State from '../../prop and state/State'
import ReactStrictMode from '../../Reactstrictmode_20-07-2026/ReactStrictMode'
import Strictmode from '../../Reactstrictmode_20-07-2026/Strictmode'

const PropsPage = () => {
  return (
    <div>Props
        <Header/>
        <Footer/>
        <Content/>
        <Parent/>
        <Main/>
        <Child2/>
       <Parent1/>
        <Student/>
        <Student2/>
        <h1>State</h1>
        <State/>
        <h1>React Strict Mode</h1>
        <ReactStrictMode/>
        <h1>Strict Mode</h1>
        <Strictmode/>
        


    </div>
  )
}

export default PropsPage