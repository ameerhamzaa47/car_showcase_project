import Hero from "../../Component/Hero";
import SearchBar from "../../Component/SearchBar";
import CustomFilter from "../../Component/CustomFilter";
import { fetchCars } from "../../utils";
import CarCard from "../../Component/CarCard";
import { fuels, yearsOfProduction } from "../../constants";
import ShowMore from "../../Component/ShowMore";
import { CarProps } from "../../types";
import Testimonial from "../../Component/Testimonial";
import FAQs from "../../Component/FAQs";


interface SearchParams {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}


const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const allCars = await fetchCars({
    manufacturers: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
  
  //  !Array.isArray(allCars) || allCars.length<1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

      <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
        <SearchBar/>

        <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
        </div>
      </div>

      


{
  Array.isArray(allCars?.trims) && allCars.trims.length > 0 ? (
    <section>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
        {allCars.trims.map((car: CarProps, index: number) => (
          <CarCard car={car} key={index} />
        ))}
      </div>
      <ShowMore
      pageNumber={(searchParams.limit || 10)/10}
      isNext={(searchParams.limit || 10)> allCars.length}
      />
    </section>
  ) : (
    <div className="mt-16 flex justify-center items-center flex-col gap-2">
      <h2 className="text-black text-xl font-bold">Oops, no results!</h2>
      <p>{allCars?.message || "No car trims found."}</p>
    </div>
  )
}



            {/* {
              allCars?(
                <section>
                  <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
                    {allCars?.map((car:any)=> (
                    <CarCard  /> ))}
                  </div>
                </section>
              ):(
                <div className="mt-16 flex justify-center items-center flex-col gap-2">
                  <h2 className="text-black text-xl font-bold">Oops, no results!</h2>
                  <p>{allCars?.message}</p>
                </div>
              )
            } */}

      </div>
      <Testimonial/>
      <FAQs/>
    </main>


  );
}

export default Page;