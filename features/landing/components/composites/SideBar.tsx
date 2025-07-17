import SideBarHeader from "../primitives/SideBarHeader"
import SideBarMenu from "../primitives/SideBarMenu"

const SideBar = () => {
  return (
    <div className="fixed z-[200] w-[calc(100%-16px-16px)] bg-[#090707] md:w-full">
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
