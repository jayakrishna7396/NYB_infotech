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
import Parent3 from '../../Components_17-07-2026/Assigment on functional compound_20-07-2026/Component Communication/Parent3'
import Parent4 from '../../Components_17-07-2026/Assigment on functional compound_20-07-2026/Data Between Sibling Components/Parent4'
import Parent5 from '../../Components_17-07-2026/Assigment on functional compound_20-07-2026/Display Dynamic Data Using Props/Parent5'
import FunctionalComponent from '../../Components_17-07-2026/Assigment on functional compound_20-07-2026/jsx practise/Functional'
import JSXPractice from '../../Components_17-07-2026/Assigment on functional compound_20-07-2026/jsx practise/JSXPractice'
import FragmentComponent from '../../Components_17-07-2026/Assigment on functional compound_20-07-2026/jsx practise/Fragment'
import Parent6 from '../../Components_17-07-2026/Assigment on functional compound_20-07-2026/Nest Multiple Child Components/Parent6'
import Parent7 from '../../Components_17-07-2026/Assigment on functional compound_20-07-2026/Pass Data from Parent to Child/Parent7'
import Parent8 from '../../Components_17-07-2026/Assigment on functional compound_20-07-2026/State and Props/Parent8'
import Stateandprops from '../../Components_17-07-2026/Assigment on functional compound_20-07-2026/State and Props/Stateandprops'
import PropsDrilling from '../../Components_17-07-2026/intoduction on react topics/Component Communication/Props Drilling/PropsDrilling'

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

        <Parent3/>
        <Parent4/>
<Parent5/>
{/* JSX PRACTICE */}
<FunctionalComponent/>
<JSXPractice/>

<FragmentComponent/>
<Parent6/>
<Parent7/>
<Parent8/>
<Stateandprops/>
<Header/>
<Student/>
<PropsDrilling/>
    </div>
  )
}

export default PropsPage