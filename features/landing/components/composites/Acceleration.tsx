import Link from "next/link"

const Acceleration = () => {
  return (
    <div className="mx-auto max-w-[1098px]">
      <h2 className="font- text-center text-[48px] font-[900]">აქსელერაცია</h2>
      <section className="flex justify-center gap-6">
        <div className="flex h-[50px] items-center justify-center rounded-[24px] border border-[var(--color-cont-borders)] bg-transparent px-6">
          <Link className="inline-block text-[18px] font-[900]" href="/">
            ციფრული მარკეტინგი
          </Link>
        </div>
        <div className="flex h-[50px] items-center justify-center rounded-[24px] border border-[var(--color-cont-borders)] px-8 py-3">
          <Link className="inline-block text-[18px] font-[900]" href="/">
            ციფრული მარკეტინგი
          </Link>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  )
}

export default Acceleration
