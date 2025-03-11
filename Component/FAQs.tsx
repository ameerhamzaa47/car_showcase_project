import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const FAQs = () => {
    return (
        <>
            <section>
                <div className="px-8 py-4 lg:px-16">
                    <h1 className="font-bold text-3xl sm:text-4xl my-4 text-gray-900 text-center sm:text-left">Frequently Asked Questions</h1>
                    <p className="text-base text-gray-600 w-full sm:w-3/5 text-justify leading-relaxed mx-auto sm:mx-0">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur non illo eaque minus nam soluta facere,
                        consequuntur corrupti eos repudiandae. Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
            </section>

            <section className='px-8 lg:px-16'>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-lg font-semibold transition cursor-pointer duration-300 ease-in-out'>
                        What types of cars are available on this platform?
                    </AccordionTrigger>
                    <AccordionContent className='mt-2 text-gray-700'>
                        Our platform features a wide variety of cars including sports cars, sedans, SUVs, trucks, electric vehicles (EVs), and hybrids from popular brands. You can filter your search by type, brand, price, and features to find the perfect car for you.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='text-lg font-semibold transition cursor-pointer duration-300 ease-in-out'>Can I compare multiple cars at once?</AccordionTrigger>
                    <AccordionContent className='mt-2 text-gray-700'>
                    Yes! You can easily compare multiple cars to check their specifications, prices, features, and reviews side by side. This helps you make a more informed decision.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='text-lg font-semibold transition cursor-pointer duration-300 ease-in-out'>How can I filter cars based on my preferences?</AccordionTrigger>
                    <AccordionContent className='mt-2 text-gray-700'>
                    We offer multiple filtering options including brand, price range, car type, fuel type (electric, hybrid, petrol, diesel), color, year of manufacture, mileage, and more to help you find exactly what you're looking for.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className='text-lg font-semibold transition cursor-pointer duration-300 ease-in-out'>Can I view a 360-degree view of the car?</AccordionTrigger>
                    <AccordionContent className='mt-2 text-gray-700'>
                    Yes! Many of the cars in our showcase feature interactive 360-degree views. You can rotate the car to view it from all angles, giving you a complete look at the vehicle.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className='text-lg font-semibold transition cursor-pointer duration-300 ease-in-out'>Can I book a test drive?</AccordionTrigger>
                    <AccordionContent className='mt-2 text-gray-700'>
                    Absolutely! Once you’ve found a car you're interested in, you can easily schedule a test drive through the platform. Simply select your preferred time and location, and we’ll arrange everything for you.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className='text-lg font-semibold transition cursor-pointer duration-300 ease-in-out'>Is financing available for car purchases?</AccordionTrigger>
                    <AccordionContent className='mt-2 text-gray-700'>
                    Yes, we offer various financing options through trusted partners. You can apply for car loans directly through the platform and get pre-approved before you make your purchase.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger className='text-lg font-semibold transition cursor-pointer duration-300 ease-in-out'>Can I trade in my current car?</AccordionTrigger>
                    <AccordionContent className='mt-2 text-gray-700'>
                    Yes, we accept trade-ins! You can get an estimate for your current vehicle's value by providing its details, and we’ll give you a fair trade-in offer towards your new car purchase.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger className='text-lg font-semibold transition cursor-pointer duration-300 ease-in-out'>Are the car prices negotiable?</AccordionTrigger>
                    <AccordionContent className='mt-2 text-gray-700'>
                    Prices on the platform are typically fixed; however, depending on promotions, deals, and availability, we may offer special discounts or negotiation options through our partnered dealerships.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </section>
        </>
    )
}

export default FAQs
