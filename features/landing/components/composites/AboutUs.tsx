const AboutUs = () => {
  return (
    <div className="m-auto flex w-full justify-center bg-black px-4 py-12 text-white">
      <div className="ml-[288px] flex h-[524px] w-[1137px] flex-col">
        <h2 className="mx-start mb-6 text-[48px] font-[900]">ჩვენ შესახებ</h2>

        <div className="mt-[88px] flex flex-1 justify-between">
          <div className="h-[308px]">
            <img
              src="Image.Unilab.svg"
              alt="Unilab Logo"
              className="h-[308px] w-[246px] object-contain"
            />
          </div>

          <div className="flex h-[308px] max-w-[517px] flex-col justify-start pl-8">
            <p className="mt-[22px] mr-[48px] max-h-[264px] w-[517px] text-justify text-[16px] leading-[24px] text-white">
              ოდესმე გიფიქრია პატარა ოთახზე, რომელში შესვლისას დროსა და სივრცეში
              იკარგები და საშუალება გეძლევა მომავლის გარკვეული ნაწილი დაინახო?
              ისეთი იმპულსები მიიღო, რომლებიც სუპერძალებს შეგძენდა? მოგესალმებით
              ილიაუნის კიბერლაბორატორია უნილაბში, რომელიც საშუალებას მოგცემს
              საკუთარ თავში ახალი შესაძლებლობები, ინტერესები და უნარები
              აღმოაჩინო, შენ ირგვლივ სამყაროს განვითარების ტემპს ყურადღება არ
              მიაქციო და თავს ისე შემოუძახო, რომ ხვალ უკვე დროს გაუსწრო და შენს
              გუშინდელ თავზე სინათლის წლით წინ იყო…
            </p>

            <button className="mt-[46px] ml-auto flex h-[48px] max-w-[142px] items-center gap-2 rounded-[8px] border border-white px-6 py-2 text-[16px] text-white transition-all hover:bg-white hover:text-black">
              ვრცლად
              <img src="Btn.Arrow.svg" alt="arrowUp" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
