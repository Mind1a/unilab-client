import Link from "next/link"

const Acceleration = () => {
  return (
    <div className="mx-auto flex max-w-[1098px] flex-col">
      <h2 className="font- mb-[88px] text-center text-[48px] font-[900]">
        აქსელერაცია
      </h2>
      <div className="flex flex-col gap-6">
        <section className="flex justify-center gap-6">
          <div className="flex h-[50px] items-center justify-center rounded-[24px] border border-[var(--color-cont-borders)] bg-transparent px-6 transition-all duration-500 hover:bg-[var(--color-cont-borders)]">
            <Link className="inline-block text-[18px] font-[900]" href="/">
              ციფრული მარკეტინგი
            </Link>
          </div>
          <div className="flex h-[50px] items-center justify-center rounded-[24px] border border-[var(--color-cont-borders)] px-8 py-3 transition-all duration-300 hover:bg-[var(--color-cont-borders)]">
            <Link className="inline-block text-[18px] font-[900]" href="/">
              ციფრული მარკეტინგი
            </Link>
          </div>
        </section>
        <section className="flex justify-center gap-6">
          <div className="flex h-[50px] items-center justify-center rounded-[24px] border border-[var(--color-cont-borders)] bg-transparent px-6 transition-all duration-300 hover:bg-[var(--color-cont-borders)]">
            <Link className="inline-block text-[18px] font-[900]" href="/">
              ინტერფეისის დიზაინი
            </Link>
          </div>
          <div className="flex h-[50px] items-center justify-center rounded-[24px] border border-[var(--color-cont-borders)] px-8 py-3 transition-all duration-300 hover:bg-[var(--color-cont-borders)]">
            <Link className="inline-block text-[18px] font-[900]" href="/">
              front-end react
            </Link>
          </div>
          <div className="flex h-[50px] items-center justify-center rounded-[24px] border border-[var(--color-cont-borders)] px-8 py-3 transition-all duration-300 hover:bg-[var(--color-cont-borders)]">
            <Link className="inline-block text-[18px] font-[900]" href="/">
              Python
            </Link>
          </div>
        </section>
        <section className="flex justify-center gap-6">
          <div className="flex h-[50px] items-center justify-center rounded-[24px] border border-[var(--color-cont-borders)] bg-transparent px-6 transition-all duration-300 hover:bg-[var(--color-cont-borders)]">
            <Link className="inline-block text-[18px] font-[900]" href="/">
              front-end (HTML, Css, js)
            </Link>
          </div>
          <div className="flex h-[50px] items-center justify-center rounded-[24px] border border-[var(--color-cont-borders)] px-8 py-3 transition-all duration-300 hover:bg-[var(--color-cont-borders)]">
            <Link className="inline-block text-[18px] font-[900]" href="/">
              ციფრული პროექტების მართვა
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Acceleration
