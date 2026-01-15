import { uniCourses } from "@features/aboutUs/data/uniCourses"
import PracticeLink from "common/components/primitives/PracticeLink"

const CompanyPage = () => {
  return (
    <main className="mx-auto w-full max-w-[1068px] py-[48px] text-[#D4D4D4]">
      <section className="mb-[48px] max-w-[1440px]">
        <h1 className="font-case mt-[50px] text-[64px] leading-[72px] font-[900]">
          ჩვენ შესახებ
        </h1>
      </section>

      <section className="max-w-[1068px]">
        <p className="font-case text-[16px] leading-[24px] font-[500]">
          ოდესმე გიფიქრია პატარა ოთახზე, რომელში შესვლისას დროსა და სივრცეში
          იკარგები და საშუალება გეძლევა მომავლის გარკვეული ნაწილი დაინახო? ისეთი
          იმპულსები მიიღო, რომლებიც სუპერძალებს შეგძენდა?მოგესალმებით ილიაუნის
          კიბერლაბორატორია უნილაბში, რომელიც საშუალებას მოგცემს საკუთარ თავში
          ახალი შესაძლებლობები, ინტერესები და უნარები აღმოაჩინო, შენ ირგვლივ
          სამყაროს განვითარების ტემპს ყურადღება არ მიაქციო და თავს ისე
          შემოუძახო, რომ ხვალ უკვე დროს გაუსწრო და შენს გუშინდელ თავზე სინათლის
          წლით წინ იყო.აქ ყველა ერთად ვცდილობთ მომავალში ადამიანის როლს
          მნიშვნელობა შევძინოთ, რათა ერთი შეხედვით საშიშ, რობოტიზირებულ
          მომავალში ამომავალი წერტილი კვლავ ადამიანი იყოს. სივრცეში, რომელშიც
          მომავლის პროფესიები ჩვენთვის უმნიშვნელოვანესია და მათ გარეშე დროში
          მოგზაურობა მარსზე უჟანგბადოდ გარეშე გაფრენის ტოლფასია.უნილაბი, ილიას
          სახელმწიფო უნივერსიტეტის ორი ურთიერთშემავსებელი კომპონენტისგან
          შემდგარი სივრცე, აერთიანებს თეორიული სწავლებისა და პრაქტიკული
          გამოცდილების მიღების შესაძლებლობებს.ჩვენ გვჯერა, რომ დღეს მხოლოდ
          თეორიული ცოდნა კოსმოსში მოგზაურობისას მთვარეზე დარჩენას ჰგავს. რეალური
          თავგადასავალი სწორედ მთვარის მიღმა და თეორიული ცოდნის მიღების შემდეგ
          პრაქტიკაში გველის.
        </p>
      </section>

      <section className="mt-[48px]">
        <h2 className="font-case sr-only">პრაქტიკული პროგრამები</h2>
        <p className="font-case text-[16px] font-[500]">
          თუ შესაბამისი თეორიული ცოდნა გაქვს, შეგიძლია შემოგვიერთდე
        </p>
        <PracticeLink className="mt-4 max-w-[312px]" />
        <p className="font-case mt-4 text-[16px] font-[500]">
          და იმუშაო რეალურ პროექტებზე;
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-case text-[16px]">
          ან დააგროვო თეორიული ცოდნა შემდეგი სასწავლო კურსების საშუალებით:
        </h2>
      </section>

      <section className="mt-[48px]" aria-labelledby="courses-heading">
        <h2 id="courses-heading" className="sr-only">
          სასწავლო კურსები
        </h2>
        <ul className="flex max-w-[312px] flex-col gap-[18px]">
          {uniCourses.map((uniCourse) => (
            <li key={uniCourse.id}>
              <PracticeLink
                title={uniCourse.title}
                href={`/courses/${uniCourse.slug}`}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-[48px] max-w-[639px]">
        <h2 className="sr-only">დამატებითი ინფორმაცია</h2>
        <p className="font-case font-[500]">
          ჩვენს განზომილებაში არსებული დროის ორიენტირი უნილაბში იკარგება, ამიტომ
          სივრცე 24 საათი ღიაა და ჩვენს კიბერარმიაში გაწევრიანების შემდეგ
          შეგიძლია ნებისმიერ დროს გვესტუმრო, გამოიყენო ჩვენი სამუშაო ადგილი და
          ტექნიკა.
        </p>
      </section>
    </main>
  )
}

export default CompanyPage
