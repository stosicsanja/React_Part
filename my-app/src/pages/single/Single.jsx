import SideBar from "../../sidebar/SideBar"
import SinglePost from "../../single_post/SinglePost"
import "./single.css"

function Single() {
  return (
    <div className="single">
        <SinglePost></SinglePost>
      <SideBar></SideBar>
    </div>
  )
}

export default Single
