import LinkList from "../primitives/LinkLists"
import Link from "next/link"
import { footerSocials } from "@features/landing/data/footerSocials"
import {
  MapIcon,
  MailIcon,
  UnilabFooter,
} from "@features/landing/assets/icons/index"
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "@features/landing/assets/icons/index"

const Footer = () => {
  return (
    <section className="text-#D4D4D4 w-full">
      <div className="flex flex-col items-center gap-10 md:h-[156px] md:flex-row md:items-end md:justify-between">
        <div className="order-2 flex flex-col items-center gap-6 text-center md:order-1 md:flex-1 md:items-start md:text-left">
          <div className="order-1 h-[48px] w-[210px] flex-none md:order-2">
            <button className="cursor-pointer items-center gap-2 rounded-[8px] border border-[#EDFAFF] px-6 py-3 font-medium transition-colors hover:bg-[#D4D4D4] hover:text-black">
              კიბერგზამკვლევი
            </button>
          </div>

          <div className="order-2 flex flex-col gap-[14px] md:order-1">
            <div className="flex flex-col items-center gap-[8px] md:flex-row md:gap-[24px]">
              <div>
                <MapIcon className="h-[24px] w-[24px]" />
              </div>
              <span className="md:font-base max-w-[34ch] text-[14px] leading-6 font-medium">
                3/5 ქაქუცა ჩოლოყაშვილის გამზირი, თბილისი
              </span>
            </div>
            <div className="flex flex-col items-center gap-[8px] md:flex-row md:gap-[24px]">
              <div>
                <MailIcon className="h-[24px] w-[24px]" />
              </div>
              <span className="md:font-base text-[14px] leading-6 font-medium md:uppercase">
                infounilab@iliauni.edu.ge
              </span>
            </div>
          </div>
        </div>

        <div className="order-4 md:order-2 md:flex md:flex-1 md:justify-center">
          <UnilabFooter />
        </div>

        <div className="order-3 hidden md:flex md:flex-1 md:justify-end">
          <LinkList
            items={footerSocials}
            ulClassName="flex gap-6
              md:flex-col md:gap-[20px] md:w-[142px]"
            linkClassName="flex items-center gap-2 justify-between"
            labelClassName="font-medium text-base uppercase"
            arrowClassName="h-4 w-4"
          />
        </div>

        <div className="order-3 flex gap-6 md:hidden">
          <Link
            href="https://www.facebook.com/UniLabEdu/"
            aria-label="Facebook w-[24px]"
            target="_blank"
          >
            <Facebook />
          </Link>
          <Link
            href="https://www.youtube.com/@unilab_edu"
            aria-label="Instagram w-[24px]"
            target="_blank"
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.linkedin.com/company/unilab-edu/posts/?feedView=all"
            aria-label="LinkedIn w-[24px]"
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://www.instagram.com/unilab_edu/?hl=en"
            aria-label="YouTube w-[24px]"
            target="_blank"
          >
            <Youtube />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Footer
