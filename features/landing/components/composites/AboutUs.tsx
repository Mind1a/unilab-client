const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center bg-black px-4 py-12">
      <div className="mx-auto flex max-w-[1137px] flex-col">
        <h2 className="mb-6 text-[48px] font-[900]">ჩვენ შესახებ</h2>

        <div className="flex flex-1">
          <div className="mt-[88px] flex h-[308px] w-full max-w-[466px] justify-center">
            <img
              src="Image.Unilab.svg"
              alt="Unilab Logo"
              className="h-[308px] w-[246px] object-contain"
            />
          </div>

          <div className="mt-[110px] flex flex-1 flex-col items-end justify-between text-white">
            <p className="leading-[24px]">
              ოდესმე გიფიქრია პატარა ოთახზე, რომელში შესვლისას დროსა და სივრცეში
              იკარგები და საშუალება გეძლევა მომავლის გარკვეული ნაწილი დაინახო?
              ისეთი იმპულსები მიიღო, რომლებიც სუპერძალებს შეგძენდა? მოგესალმებით
              ილიაუნის კიბერლაბორატორია უნილაბში, რომელიც საშუალებას მოგცემს
              საკუთარ თავში ახალი შესაძლებლობები, ინტერესები და უნარები
              აღმოაჩინო, შენ ირგვლივ სამყაროს განვითარების ტემპს ყურადღება არ
              მიაქციო და თავს ისე შემოუძახო, რომ ხვალ უკვე დროს გაუსწრო და შენს
              გუშინდელ თავზე სინათლის წლით წინ იყო…
            </p>

            <button className="mt-6 flex h-[48px] w-[142px] items-center gap-2 self-end rounded-[8px] border border-white px-6 py-2 text-[16px] text-white transition-all hover:bg-white hover:text-black">
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
