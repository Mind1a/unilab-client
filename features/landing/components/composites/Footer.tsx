import LinkList from "../primitives/LinkLists"
import { footerSocials } from "@features/landing/data/footerSocials"
import {
  MapIcon,
  MailIcon,
  UnilabFooter,
} from "@features/landing/assets/icons/index"

const Footer = () => {
  return (
    <section className="text-#D4D4D4 w-full">
      <div className="flex h-[156px] justify-between">
        <div className="flex flex-1 flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[24px]">
              <div className="h-[24px] w-[24px]">
                <MapIcon />
              </div>
              <span className="leading-6 font-medium">
                3/5 ქაქუცა ჩოლოყაშვილის გამზირი, თბილისი
              </span>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="h-[24px] w-[24px]">
                <MailIcon />
              </div>
              <span className="font-medium uppercase">
                infounilab@iliauni.edu.ge
              </span>
            </div>
          </div>
          <div className="h-[48px] w-[210px] flex-none">
            <button className="cursor-pointer items-center gap-2 rounded-[8px] border border-[#EDFAFF] px-6 py-3 font-medium transition-colors hover:bg-[#D4D4D4] hover:text-black">
              კიბერგზამკვლევი
            </button>
          </div>
        </div>

        <div className="flex flex-1 items-end justify-center">
          <UnilabFooter />
        </div>

        <div className="flex flex-1 flex-col items-end">
          <LinkList
            items={footerSocials}
            ulClassName="flex flex-col gap-[20px] w-[142px]"
            linkClassName="flex items-center gap-2 justify-between"
            labelClassName="font-medium text-base uppercase"
            arrowClassName="h-4 w-4"
          />
        </div>
      </div>
    </section>
  )
}

export default Footer
