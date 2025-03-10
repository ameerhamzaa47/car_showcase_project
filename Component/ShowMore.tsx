"use client"
import { useRouter } from "next/navigation"
import { ShowMoreProps } from "../types"
import CustomButton from "./CustomButton"
import { updateSearchParams } from "../utils"

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter()
    const handleNavigation = () => { 
        const newLimit = (pageNumber +1)*10;
        const newPathName = updateSearchParams("limit",`${newLimit}`)
        router.push(newPathName)
    }
    return (
        <>
            <div className="w-full flex justify-center items-center gap-5 mt-10">
                {!isNext && (
                    <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyle="bg-blue-500 cursor-pointer rounded-full text-white"
                    handleClick={handleNavigation}
                    />
                )}
            </div>
        </>
    )
}

export default ShowMore
