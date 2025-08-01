import { BtnArrow } from "@features/landing/assets/icons/index"
const AboutUs = () => {
  return (
    <div id="aboutUs" className="flex flex-col">
      <div className="mx-auto flex flex-col">
        <h2 className="font-case mb-[32px] text-center text-[32px] font-[900] text-[#EDFAFF] md:mb-[88px] lg:text-left lg:text-[48px]">
          ჩვენ შესახებ
        </h2>

        <div className="flex flex-col items-center lg:flex-row lg:items-center">
          <div className="max-W-[358px] mb-6 flex w-full justify-center lg:mb-0 lg:w-full lg:max-w-[466px] lg:justify-center">
            <img
              src="Image.Unilab.svg"
              alt="Unilab Logo"
              className="h-[308px] w-auto object-contain lg:w-[246px]"
            />
          </div>

          <div className="font-case flex flex-col text-justify text-[14px] leading-[24px] font-medium text-[#D4D4D4] lg:flex-1 lg:text-start">
            <p>
              ოდესმე გიფიქრია პატარა ოთახზე, რომელში შესვლისას დროსა და სივრცეში
              იკარგები და საშუალება გეძლევა მომავლის გარკვეული ნაწილი დაინახო?
              ისეთი იმპულსები მიიღო, რომლებიც სუპერძალებს შეგძენდა?
            </p>
            <p>
              მოგესალმებით ილიაუნის კიბერლაბორატორია უნილაბში, რომელიც
              საშუალებას მოგცემს საკუთარ თავში ახალი შესაძლებლობები, ინტერესები
              და უნარები აღმოაჩინო, შენ ირგვლივ სამყაროს განვითარების ტემპს
              ყურადღება არ მიაქციო და თავს ისე შემოუძახო, რომ ხვალ უკვე დროს
              გაუსწრო და შენს გუშინდელ თავზე სინათლის წლით წინ იყო…
            </p>
          </div>
        </div>

        <div className="mt-[16px] flex justify-center lg:mt-[24px] lg:justify-end">
          <button className="group flex cursor-pointer items-center justify-center gap-2 rounded-[8px] border border-[#D4D4D4] px-6 py-3 text-[#D4D4D4] transition-colors hover:bg-[#D4D4D4] hover:text-black">
            ვრცლად
            <BtnArrow
              alt="arrowUp"
              className="h-4 w-4 transition-colors group-hover:[&>path]:fill-black"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
