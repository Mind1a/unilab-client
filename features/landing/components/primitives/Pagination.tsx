"use client"
import { PaginationProps } from "@features/landing/types"
import {
  PaginationLeftLeftArrow,
  PaginationLeftRightArrow,
} from "public/newsIcon/image/svg"

const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-[8px]">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-[#D4D4D4] text-[#D4D4D4] disabled:border-[#3B3B3E] disabled:text-[#3B3B3E]"
      >
        <PaginationLeftLeftArrow />
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => setPage(i + 1)}
          className={`h-[32px] w-[32px] cursor-pointer rounded-[4px] ${
            page === i + 1
              ? "border border-[#1890FF] text-[#1890FF]"
              : "border border-[#D4D4D4] text-[#D4D4D4]"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-[#D4D4D4] text-[#D4D4D4] disabled:border-[#3B3B3E] disabled:text-[#3B3B3E]"
      >
        <PaginationLeftRightArrow />
      </button>
    </div>
  )
}

export default Pagination
