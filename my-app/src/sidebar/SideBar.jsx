import "./sidebar.css"

function SideBar() {
  return (
    <div className="sidebar">
     <div className="sidebarItem">
        <span className="sidebarItem">ABOUT ME</span>
      <img className=""
      alt=""
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPEObm3OP2Vxf0GnhBPiKYVAlKaF95vqMeg&usqp=CAU"
      >
        </img>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quasi aperiam corporis.</p>
     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>
            <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
      <i class="sidebarIcon fa-brands fa-square-facebook"></i>
      <i class="sidebarIcon fa-brands fa-square-twitter"></i>
      <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
      <i class="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  )
}

export default SideBar
