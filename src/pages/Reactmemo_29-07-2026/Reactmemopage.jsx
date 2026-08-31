import Header from "../../Components_17-07-2026/Assigment on functional compound_20-07-2026/Component Composition and Reusability/Header"
import Header0 from "../../Components_17-07-2026/assigmnent_29-07-2026/Reactmemo/Header0"
import Student2 from "../../Components_17-07-2026/assigmnent_29-07-2026/Reactmemo/Student2"
import StudentMemo2 from "../../Components_17-07-2026/assigmnent_29-07-2026/Reactmemo/StudentMemo2"
import Childmemo from "../../Components_17-07-2026/ReactMemo_29-07-2026/ChildMemo"
import Parentmemo from "../../Components_17-07-2026/ReactMemo_29-07-2026/Parentmemo"
import SquareCalculator from "../../Components_17-07-2026/Use Memo_29-07-2026/SquareCalculator"

const Reactmemopage = () => {
  return (
    <div>
       <Parentmemo/>
       <Childmemo/>
       <SquareCalculator/>
       <Header0/>
       <Student2/>
       <StudentMemo2/>
    </div>
  )
}

export default Reactmemopage