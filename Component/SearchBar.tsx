"use client"
import Image from "next/image"
import SearchManufacturer from "./SearchManufacturer"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchButton = ({otherClasses}:{otherClasses:string}) => (
  <button type="submit" className={`-mt-3 z-10 ${otherClasses}`}>
    <Image
    src="/magnifying-glass.svg"
    alt="magnifying Glass"
    width={40}
    height={40}
    className="object-contain"
    />
  </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const Router = useRouter();
    const handleSearch = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

      if(manufacturer === '' && model === ''){
        return alert('Please fill in the search bar')
      }

      updateSearchParms(model.toLowerCase(),manufacturer.toLowerCase())
    }

    const updateSearchParms=(model:string,manufacturer:string) =>{
      const searchParms= new URLSearchParams(window.location.search);

      if(model){
        searchParms.set('model',model)
      }else{
        searchParms.delete('model')
      }

      if(manufacturer){
        searchParms.set('manufacturer',manufacturer)
      }else{
        searchParms.delete('manufacturer')
      }

      const newPathname =  `${window.location.pathname}?${searchParms.toString()}`

      Router.push(newPathname)
      
    }

  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' onSubmit={handleSearch}>
        <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
            <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
            {/* <SearchButton  otherClasses="sm:hidden" /> */}
        </div>

      <div className="flex-1 max-sm:w-full flex justify-start items-center relative;">
        <Image
        src="/model-icon.png"
        alt="car model icon"
        width={25}
        height={25}
        className="absolute w-[20px] h-[20px] ml-4"
        />
        <input type="text" name="model" value={model} 
        onChange={(e)=>setModel(e.target.value)}
        placeholder="Tiguan" className="w-full bg-gray-200 h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar
