"use client"
import Image from "next/image"
import { CustomButtonProps } from "../types"

const CustomButton = ({title,containerStyle,handleClick, btnType, textStyles, rightIcon}:CustomButtonProps) => {
  return (
    <>
      <button
      disabled={false}
      type={btnType || "button"}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyle}`}
      onClick={handleClick}
      >
        <span className={`flex-1 ${textStyles}`}>
          {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt="right Icon" fill className="object-contain" />
          </div>
        )}
      </button>
    </>
  )
}

export default CustomButton
