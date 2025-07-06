const AboutUs = () => {
  return (
    <div className="flex flex-col bg-black px-4 py-12">
      <div className="mx-auto flex max-w-[1137px] flex-col">
        <h2 className="mb-6 text-[48px] font-[900] text-[#EDFAFF]">
          ჩვენ შესახებ
        </h2>

        <div className="flex">
          <div className="flex w-full max-w-[466px] justify-center">
            <img
              src="Image.Unilab.svg"
              alt="Unilab Logo"
              className="mt-[58px] h-[308px] w-[246px] object-contain"
            />
          </div>

          <div className="mt-[110px] flex flex-1 flex-col text-start leading-[24px] text-[#D4D4D4]">
            <div>
              <p>
                ოდესმე გიფიქრია პატარა ოთახზე, რომელში შესვლისას დროსა და
                სივრცეში იკარგები და საშუალება გეძლევა მომავლის გარკვეული ნაწილი
                დაინახო? ისეთი იმპულსები მიიღო, რომლებიც სუპერძალებს შეგძენდა?
              </p>
            </div>

            <div>
              <p>
                მოგესალმებით ილიაუნის კიბერლაბორატორია უნილაბში, რომელიც
                საშუალებას მოგცემს საკუთარ თავში ახალი შესაძლებლობები,
                ინტერესები და უნარები აღმოაჩინო, შენ ირგვლივ სამყაროს
                განვითარების ტემპს ყურადღება არ მიაქციო და თავს ისე შემოუძახო,
                რომ ხვალ უკვე დროს გაუსწრო და შენს გუშინდელ თავზე სინათლის წლით
                წინ იყო…
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[24px] flex justify-end">
          <button className="flex w-[142px] cursor-pointer items-center gap-2 rounded-[8px] border border-white px-[24px] py-[12px] text-[16px] text-[#D4D4D4] transition-all hover:bg-white hover:text-black">
            ვრცლად
            <img src="Btn.Arrow.svg" alt="arrowUp" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
