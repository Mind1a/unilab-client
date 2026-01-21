import { cards } from "@features/practicePage/data/Practice"
import React from "react"

function PracticePage() {
  return (
    <main className="w-full p-[16px] lg:mt-[48px] lg:max-w-[1068px]">
      <h1 className="font-case text-[24px] leading-[32px] font-[900] lg:text-[48px] lg:leading-[56px]">
        საფინალო პროექტი
      </h1>
      <button className="font-case mt-6 flex h-[48px] w-[231px] cursor-pointer items-center justify-center rounded-[8px] border-[2px] border-[#D4D4D4] hover:bg-white hover:text-black lg:mt-6 lg:h-[48px] lg:w-full lg:max-w-[231px] lg:text-[16px] lg:leading-[24px] lg:font-[500]">
        <img src="Practice.page.Btn.svg" alt="" width={24} height={24} />
        პროექტის ლინკი
      </button>
      <section className="mt-[48px] w-full space-y-5 lg:mt-[48px] lg:max-w-[1068px]">
        <p className="font-case text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] lg:font-[500]">
          კაცობრიობის განვითარების სხვადასხვა პერიოდში წიგნს განსხვავებული სახით
          გამოსცემდნენ. უძველესი შუმერული წიგნები თიხის ფირფიტებისა იყო. ჩვენი
          გადმოსახედიდან, ისინი აგურებს უფრო ჰგვანან ვიდრე წიგნებს. ეგვიპტელები
          წიგნებს პაპირუსზე წერდნენ, მასალიდან გამომდინარე, ასეთ წიგნებს გრძელი
          გრაგნილების სახე ჰქონდათ. შუა საუკუნეების ხელნაწერი წიგნები,
          ფოლიანტები, ძალიან დიდი ზომისა იყო. ასეთ წიგნთან ერთად შენს ოთახში ვერ
          განმარტოვდებოდი, ასეთ წიგნს მუხლებზე ვერ დაიდებდი, მათ სპეციალურად
          მოწყობილ მაგიდებზე დებდნენ და ისე კითხულობდნენ.
        </p>
        <p className="font-case text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] lg:font-[500]">
          წიგნის გარეგანი ფორმის ცვლილებასთან ერთად იცვლება წიგნის ავტორი, მისი
          გამომცემელი და წიგნის მკითხველი. იცვლება თავად ამბავიც, რომელსაც წიგნი
          ყვება. თუმცა არ იცვლება ის უსაზღვრო შესაძლებლობები რომელსაც წიგნი
          გვაძლევს. ვიმოგზაუროთ იქ სადაც არ ვყოფილვართ, გავხდეთ თანაზიარი იმ
          ამბებისა, რომელიც ჩვენ არ გადაგვხდენია თავს. გავიზიაროთ აზრები,
          რომელსაც ავტორი გვთავაზობს.
        </p>
        <p className="font-case text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] lg:font-[500]">
          სასურველი წიგნის მოძიება რთულ საქმეს აღარ წარმოადგენს, შესაძლოა იცოდე
          ის, რასაც ეძებ და ამავე დროს ძიების პოცესში აღმოაჩინო, რაღაც ახალი და
          საინტერესო.
        </p>
      </section>

      <section className="gap- mt-[88px] flex w-full flex-col lg:max-w-[1068px]">
        <h3 className="font-case lg:text-[24px] lg:leading-[32px] lg:font-[900]">
          პროექტზე მუშაობდნენ
        </h3>
        <div className="mt-[24px] space-y-4 lg:mt-6 lg:flex lg:gap-[32px]">
          {cards.map((card, i) => (
            <div key={i} className="rounded-[8px] bg-[#0F0F10] p-6">
              <h3 className="font-case lg:text-[18px] lg:leading-[26px] lg:font-[900]">
                {card.title}
              </h3>
              <p className="font-case lg:mt-2 lg:text-[14px] lg:leading-[20px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[88px] w-full lg:max-w-[261px]">
        <h3 className="font-case lg:text-[16px] lg:leading-[24px] lg:font-[500]">
          გამოყენებული ხელსაწყოები
        </h3>
        <div className="mt-6 flex gap-[30px]">
          <div>
            <img src="Practice.page.AI.svg" alt="" width={48} height={48} />
          </div>
          <div>
            <img src="Practice.page.Figma.svg" alt="" width={48} height={48} />
          </div>
          <div>
            <img src="Practice.page.XD.svg" alt="" width={48} height={48} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default PracticePage
