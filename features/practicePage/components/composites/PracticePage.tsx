import { cards, tools } from "@features/practicePage/data/Practice"
import CardsList from "../prmitives/CardsList"
import ButtonIcon from "@features/landing/assets/icons/btnIcon.svg"
import ToolsList from "../prmitives/ToolsList"
import { practiceText } from "@features/practicePage/data/textContent"
import ParagraphList from "../prmitives/ParagraphList"

function PracticePage() {
  return (
    <main className="w-full p-[16px] lg:mt-[48px] lg:max-w-[1068px]">
      <h1 className="font-case text-[24px] leading-[32px] font-[900] lg:text-[48px] lg:leading-[56px]">
        საფინალო პროექტი
      </h1>
      <button className="font-case mt-6 flex h-[48px] w-[231px] cursor-pointer items-center justify-center rounded-[8px] border-[2px] border-[#D4D4D4] transition-colors duration-500 ease-in-out hover:bg-white hover:text-black lg:mt-6 lg:h-[48px] lg:w-full lg:max-w-[231px] lg:text-[16px] lg:leading-[24px] lg:font-[500]">
        <ButtonIcon />
        პროექტის ლინკი
      </button>
      <section className="mt-[48px] w-full lg:mt-[48px] lg:max-w-[1068px]">
        <ParagraphList items={practiceText} />
      </section>

      <section className="mt-[88px] flex w-full flex-col lg:max-w-[1068px]">
        <h3 className="font-case lg:text-[24px] lg:leading-[32px] lg:font-[900]">
          პროექტზე მუშაობდნენ
        </h3>
        <div className="mt-[24px]">
          <CardsList items={cards} />
        </div>
      </section>
      <section className="mt-[88px] w-full lg:max-w-[261px]">
        <h3 className="font-case lg:text-[16px] lg:leading-[24px] lg:font-[500]">
          გამოყენებული ხელსაწყოები
        </h3>
        <div className="mt-6 flex gap-[30px]">
          <ToolsList items={tools} />
        </div>
      </section>
    </main>
  )
}

export default PracticePage
