import SideBarHeader from "../primitives/SideBarHeader"
import SideBarMenu from "../primitives/SideBarMenu"

const SideBar = () => {
  return (
    <div className="px-[24px] py-[30px] xl:pt-12 2xl:pr-0 2xl:pl-12">
      <div className="2xl:fixed 2xl:space-y-12">
        <SideBarHeader />
        <SideBarMenu />
      </div>
    </div>
  )
}

export default SideBar
