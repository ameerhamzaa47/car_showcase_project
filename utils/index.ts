import { RedirectType } from "next/navigation";
import { CarProps, FilterProps } from "../types";

export async function fetchCars(filters:FilterProps){
    const { manufacturers, year, fuel, limit, model } = filters;
    const headers = {
            'x-rapidapi-key': '450a00cf86msh1dc1b003b05e364p1274f8jsne907ee13ddd1',
            'x-rapidapi-host': 'car-api2.p.rapidapi.com'
    }

    const response = await fetch(`https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305?make=${manufacturers}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
        headers: headers,
    });

    const data = await response.json();
    return data;
}


export const calculateCarRent=(city_mpg:number,year:number)=>{
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor= 0.05;
    const mileageRate=city_mpg*mileageFactor;
    const ageRate=(new Date().getFullYear()-year)* ageFactor
    const rentalRatePerDay= basePricePerDay + mileageRate + ageRate
    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => { 
    
    const url = new URL("https://cdn.imagin.studio/getimage");
    
    const { make, model, year } = car;
    
    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

return `${url}`;
};


export const updateSearchParams = (type:string, value:string) =>{
    const searchParms = new URLSearchParams(window.location.search);
    
        searchParms.set(type, value)
    
        const newPathname = `${window.location.pathname}?${searchParms.toString()}`

        return newPathname;
}