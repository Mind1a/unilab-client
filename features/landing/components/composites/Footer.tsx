import PracticeLink from "common/components/primitives/PracticeLink"
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
      <div className="footer-resp:h-[156px] footer-resp:flex-row footer-resp:items-end footer-resp:justify-between flex flex-col items-center gap-10">
        <div className="footer-resp:order-1 footer-resp:flex-1 footer-resp:items-start footer-resp:text-left order-2 flex flex-col items-center gap-6 text-center">
          <div className="footer-resp:order-2 order-1 h-[48px] w-[210px] flex-none">
            <button className="cursor-pointer items-center gap-2 rounded-[8px] border border-[#EDFAFF] px-6 py-3 font-medium transition-colors hover:bg-[#D4D4D4] hover:text-black">
              კიბერგზამკვლევი
            </button>
          </div>

          <div className="footer-resp:order-1 order-2 flex flex-col gap-[14px]">
            <Link
              href="https://www.google.com/maps/search/3%2F5+%E1%83%A5%E1%83%90%E1%83%A5%E1%83%A3%E1%83%AA%E1%83%90+%E1%83%A8%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%A7%E1%83%90%E1%83%A8%E1%83%95%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1+%E1%83%92%E1%83%90%E1%83%9B%E1%83%96%E1%83%98%E1%83%A0%E1%83%98+%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98"
              target="_blank"
              className="footer-resp:flex-row footer-resp:gap-[24px] flex max-w-[345px] flex-col items-center gap-[8px] transition-opacity hover:opacity-80"
            >
              <div>
                <MapIcon className="h-[24px] w-[24px]" />
              </div>
              <span className="footer-resp:font-case footer-resp:text-[14px] text-[14px] lg:text-[16px]">
                3/5 ქაქუცა ჩოლოყაშვილის გამზირი, თბილისი
              </span>
            </Link>
            <Link
              href="mailto:infounilab@iliauni.edu.ge"
              className="footer-resp:flex-row footer-resp:gap-[24px] flex flex-col items-center gap-[8px] transition-opacity hover:opacity-80"
            >
              <div>
                <MailIcon className="h-[24px] w-[24px]" />
              </div>
              <span className="footer-resp:text-[14px] footer-resp:uppercase text-[14px] font-medium lg:text-[16px]">
                infounilab@iliauni.edu.ge
              </span>
            </Link>
          </div>
        </div>

        <div className="footer-resp:order-2 footer-resp:flex footer-resp:flex-1 footer-resp:justify-center order-4">
          {/* <UnilabFooter /> */}
          <span className="font-case text-[14px] font-bold lg:text-[16px]">
            Unilab©
          </span>
        </div>

        <div className="footer-resp:flex footer-resp:flex-1 footer-resp:justify-end order-3 hidden">
          <ul className="footer-resp:flex-col footer-resp:gap-[20px] footer-resp:w-[142px] flex gap-6">
            {footerSocials.map((social) => (
              <li key={social.id}>
                <PracticeLink
                  title={social.label}
                  href={social.href}
                  target="_blank"
                  className="footer-resp:text-[14px] font-medium uppercase lg:text-[16px]"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-resp:hidden order-3 flex gap-6">
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
