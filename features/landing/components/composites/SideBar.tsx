import SideBarHeader from "../primitives/SideBarHeader"
import SideBarMenu from "../primitives/SideBarMenu"

const SideBar = () => {
  return (
    <div className="fixed left-0 z-[200] w-full bg-[#090707] md:left-auto md:w-full">
      <div className="md:fixed">
        <SideBarHeader />
        <div className="hidden md:flex">
          <SideBarMenu />
        </div>
      </div>
    </div>
  )
}

export default SideBar
