import type { ArrowProps } from "@features/landing/types"

function Arrow({ isDisabled, direction }: ArrowProps) {
  const color = isDisabled ? "#3B3B3E" : "#D4D4D4"
  return (
    <svg
      className={`transform ${direction === "right" ? "rotate-180" : ""} h-6 w-6 cursor-pointer md:h-[34px] md:w-[35px]`}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="34"
      viewBox="0 0 35 34"
      fill="none"
    >
      <path
        d="M4.03125 14.9995C2.92668 14.9995 2.03125 15.8949 2.03125 16.9995C2.03125 18.1041 2.92668 18.9995 4.03125 18.9995V14.9995ZM31.4455 18.4137C32.2265 17.6327 32.2265 16.3663 31.4455 15.5853L18.7175 2.85738C17.9365 2.07633 16.6702 2.07633 15.8891 2.85738C15.1081 3.63842 15.1081 4.90475 15.8891 5.6858L27.2028 16.9995L15.8891 28.3132C15.1081 29.0943 15.1081 30.3606 15.8891 31.1416C16.6702 31.9227 17.9365 31.9227 18.7175 31.1416L31.4455 18.4137ZM4.03125 16.9995V18.9995H30.0312V16.9995V14.9995L4.03125 14.9995V16.9995Z"
        fill={color}
      />
    </svg>
  )
}

export default Arrow
