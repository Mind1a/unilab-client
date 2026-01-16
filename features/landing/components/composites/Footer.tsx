import LinkList from "../primitives/LinkLists"
import Link from "next/link"
import { footerSocials } from "@features/landing/data/footerSocials"
import {
  MapIcon,
  MailIcon,
  // UnilabFooter,
} from "@features/landing/assets/icons/index"
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "@features/landing/assets/icons/index"

const Footer = () => {
  return (
    <section className="w-full text-[#D4D4D4]">
      <div className="flex flex-col items-center gap-10 md:h-[156px] md:flex-row md:items-end md:justify-between">
        <div className="order-2 flex flex-col items-center gap-6 text-center md:order-1 md:flex-1 md:items-start md:text-left">
          <div className="order-1 h-[48px] w-[210px] flex-none md:order-2">
            <button className="cursor-pointer items-center gap-2 rounded-[8px] border border-[#EDFAFF] px-6 py-3 font-medium transition-colors hover:bg-[#D4D4D4] hover:text-black">
              კიბერგზამკვლევი
            </button>
          </div>

          <div className="order-2 flex flex-col gap-[14px] md:order-1">
            <Link
              href="https://www.google.com/maps/search/3%2F5+%E1%83%A5%E1%83%90%E1%83%A5%E1%83%A3%E1%83%AA%E1%83%90+%E1%83%A8%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%A7%E1%83%90%E1%83%A8%E1%83%95%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1+%E1%83%92%E1%83%90%E1%83%9B%E1%83%96%E1%83%98%E1%83%A0%E1%83%98+%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98"
              target="_blank"
              className="flex max-w-[345px] flex-col items-center gap-[8px] transition-opacity hover:opacity-80 md:flex-row md:gap-[24px]"
            >
              <div>
                <MapIcon className="h-[24px] w-[24px]" />
              </div>
              <span className="md:font-case text-[14px] md:text-[14px] lg:text-[16px]">
                3/5 ქაქუცა ჩოლოყაშვილის გამზირი, თბილისი
              </span>
            </Link>
            <Link
              href="mailto:infounilab@iliauni.edu.ge"
              className="flex flex-col items-center gap-[8px] transition-opacity hover:opacity-80 md:flex-row md:gap-[24px]"
            >
              <div>
                <MailIcon className="h-[24px] w-[24px]" />
              </div>
              <span className="text-[14px] font-medium md:text-[14px] md:uppercase lg:text-[16px]">
                infounilab@iliauni.edu.ge
              </span>
            </Link>
          </div>
        </div>

        <div className="order-4 md:order-2 md:flex md:flex-1 md:justify-center">
          {/* <UnilabFooter /> */}
          <span className="font-case text-[14px] font-bold lg:text-[16px]">
            Unilab©
          </span>
        </div>

        <div className="order-3 hidden md:flex md:flex-1 md:justify-end">
          <LinkList
            items={footerSocials}
            ulClassName="flex gap-6
              md:flex-col md:gap-[20px] md:w-[142px]"
            linkClassName="flex items-center gap-2 justify-between"
            labelClassName="font-medium uppercase md:text-[14px] lg:text-[16px]"
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
