import Auth from "../../Components_17-07-2026/Assigment on fragment/Hoc/Auth"
import Loading from "../../Components_17-07-2026/Assigment on fragment/Hoc/Loading"
import Employee from "../../Components_17-07-2026/HigherOrderComponents_28-07-2026/Employee"
import Student from "../../Components_17-07-2026/HigherOrderComponents_28-07-2026/Student"


const HocPage = () => {
  return (
    <div>
       <Employee/>
       <Student/>
       <Auth/>
       <Loading/>
    </div>
  )
}

export default HocPage