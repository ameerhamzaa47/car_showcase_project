import { MouseEventHandler } from "react";
export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    year: number
    make: string
    model: string
    citymanufacturer_name:string
    make_model:object
    city_mpg:number
    transmission:string
    drive:string
    make_model_id:number
}

export interface FilterProps {
    manufacturers: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext:boolean;
}