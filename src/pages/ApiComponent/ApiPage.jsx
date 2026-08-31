import UserList from "../../Components_17-07-2026/Api component/Userlist"
import AxiosExample from "../../Components_17-07-2026/Api different/component/AxiosExample"
import ButtonApi from "../../Components_17-07-2026/Api different/component/ButtonApi"
import FetchThen from "../../Components_17-07-2026/Api different/component/FetchThen"
import FetchAsync from "../../Components_17-07-2026/Api different/component/FetchAsync"
import Header from "../../Components_17-07-2026/Assigment on functional compound_20-07-2026/Component Composition and Reusability/Header"
import UserProfile from "../../Components_17-07-2026/assigment states/Api/Component/UserProfile"
import Counter from "../../Components_17-07-2026/assigment states/local state/Counter"
import Parent10 from "../../Components_17-07-2026/assigmentprop,state/3.Parent to Child Communication/App"
import ApiExample from "../../Components_17-07-2026/miniassigmentConditional Rendering/ApiExample"
import ConditionalExample from "../../Components_17-07-2026/miniassigmentConditional Rendering/ConditionalExample"
import FormExample from "../../Components_17-07-2026/miniassigmentConditional Rendering/FormExample"
import MapExample from "../../Components_17-07-2026/miniassigmentConditional Rendering/MapExample"
import UseEffectExample from "../../Components_17-07-2026/miniassigmentConditional Rendering/UseEffectExample"
import UserCard from "../../Components_17-07-2026/mininprojectUser Cards using API/UserCard"
import UserForm from "../../Components_17-07-2026/miniprojectconditionrendering/UserForm"
import User from "../../Components_17-07-2026/Higher Order Component/User"
import APicallinReact from "../../Components_17-07-2026/maxAPICallsinReact_22-07-2026/APICallsinReact"
import CreateUser from "../../Components_17-07-2026/apimethods/CreateUser"
import DeleteUser from "../../Components_17-07-2026/apimethods/DeleteUser"
import GetUsers from "../../Components_17-07-2026/apimethods/GetUsers"
import PatchUser from "../../Components_17-07-2026/apimethods/PatchUser"
import UpdateUser from "../../Components_17-07-2026/apimethods/UpdateUser"

const ApiPage = () => {
  return (
    <div>
        <UserList/>
        {/* Api Difference with axios */}
        <AxiosExample/>
        <ButtonApi/>
        <FetchAsync/>
        <FetchThen/>
        <APicallinReact/>
        <CreateUser/>
        <DeleteUser/>
        <GetUsers/>
        <PatchUser/>
        <UpdateUser/>
        
        <Header/>
        <UserProfile/>
        <Counter/>
        <Parent10/>
        <ApiExample/>
        <ConditionalExample/>
        <FormExample/>
        <MapExample/>
        <UseEffectExample/>
        <UserCard/>
        <UserForm/>
        <UserList/>
        <User/>
        
        


    </div>
  )
}

export default ApiPage