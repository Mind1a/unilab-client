import SideBarHeader from "../primitives/SideBarHeader"
import SideBarMenu from "../primitives/SideBarMenu"

const SideBar = () => {
  return (
    <div className="fixed z-[200] w-full bg-[#090707]">
      <div className="2xl:fixed">
        <SideBarHeader />
        <div className="hidden 2xl:flex">
          <SideBarMenu />
        </div>
      </div>
    </div>
  )
}

export default SideBar
