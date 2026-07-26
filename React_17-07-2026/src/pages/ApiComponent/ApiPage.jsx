import UserList from "../../Components_17-07-2026/Api component/Userlist"
import AxiosExample from "../../Components_17-07-2026/Api different/component/AxiosExample"
import ButtonApi from "../../Components_17-07-2026/Api different/component/ButtonApi"
import FetchThen from "../../Components_17-07-2026/Api different/component/FetchThen"
import FetchAsync from "../../Components_17-07-2026/Api different/component/FetchAsync"
import Header from "../../Components_17-07-2026/Assigment on functional compound_20-07-2026/Component Composition and Reusability/Header"
import UserProfile from "../../Components_17-07-2026/assigment states/Api/Component/UserProfile"
import Counter from "../../Components_17-07-2026/assigment states/local state/Counter"
import Parent10 from "../../Components_17-07-2026/assigmentprop,state/3.Parent to Child Communication/App"

const ApiPage = () => {
  return (
    <div>
        <UserList/>
        {/* Api Difference with axios */}
        <AxiosExample/>
        <ButtonApi/>
        <FetchAsync/>
        <FetchThen/>
        <Header/>
        <UserProfile/>
        <Counter/>
        <Parent10/>
        


    </div>
  )
}

export default ApiPage