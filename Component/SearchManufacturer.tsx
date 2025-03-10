import { Combobox, Transition } from "@headlessui/react"
import Image from "next/image"
import { SearchManufacturerProps } from "../types"
import { useState, Fragment } from "react"
import { manufacturers } from "../constants"

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
    const [query, setQuery] = useState('')
    const filteredManufacture=
    query===""?manufacturers
    :manufacturers.filter((item:any)=>(
        item.toLowerCase().replace(/\s+/g,'')
        .includes(query.toLowerCase().replace(/\s+/g,''))
    ))
  return (
    <div className="flex-1 max-sm:w-full pr-2 flex justify-start items-center">
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full">
                <Combobox.Button className="absolute pl-4 top-[14px]" >
                    <Image
                    src={"/car-logo.svg"}
                    alt="car-logo"
                    width={20}
                    height={20}
                    />
                </Combobox.Button>

                <Combobox.Input
                className="w-full h-[48px] bg-gray-200 pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
                placeholder="Volkswagen"
                displayValue={(manufacturer:string) => manufacturer}
                onChange={(e:any)=>setQuery(e.target.value)}
                />

                <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={()=>setQuery('')}
                >
                    <Combobox.Options>
                        {
                            filteredManufacture.map((item:any) => (
                                <Combobox.Option
                                key={item}
                                className={({ active }) => `
                                relative  mt-1 max-h-60 w-full p-2 my-2 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm
                                ${active ? 'bg-blue-500 text-black cursor-pointer' : 'text-gray-900'}
                                `}
                                value={item}
                                >
                                    {item}
                                </Combobox.Option>
                            ))
                        }
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
      
    </div>
  )
}

export default SearchManufacturer
