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
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
        </div>

        <div className='flex justify-center'>
            <section className='px-8 pt-10 w-3/6 '>
            <div className='flex items-center gap-2 mb-4 border-b-2 border-gray-300 pb-4 transition-transform duration-300 ease-in-out hover:scale-105'>
            <i className="fa-solid fa-car text-xl p-2 text-gray-500 "></i>
            <details className='text-gray-500'>
                <summary className='text-base cursor-pointer'><span className='text-base transition duration-300 ease-in-out text-black'>What types of cars are available on this platform?</span></summary>
                <p className='mt-2 text-gray-700'>Our platform features a wide variety of cars including sports cars, sedans, SUVs, trucks, electric vehicles (EVs), and hybrids from popular brands. You can filter your search by type, brand, price, and features to find the perfect car for you.</p>
            </details>
            </div>

            <div className='flex items-center gap-2 mb-4 border-b-2 border-gray-300 pb-4 transition-transform duration-300 ease-in-out hover:scale-105'>
            <i className="fa-solid fa-car relative left-1 text-xl borderbg-gradient-to-r p-2 text-gray-500 "></i>
            <details className='text-gray-500'>
                <summary className='text-base'><span className='text-base transition cursor-pointer duration-300 ease-in-out text-black'>Are the cars listed on the platform new or used?</span></summary>
                <p className='mt-2 text-gray-700'>We offer both new and used cars on the platform. You can easily filter your search based on the condition of the car to find the best option for your needs and budget.</p>
            </details>
            </div>

            <div className='flex items-center gap-2 mb-4 border-b-2 border-gray-300 pb-4 transition-transform duration-300 ease-in-out hover:scale-105'>
            <i className="fa-solid fa-car relative left-1 text-xl borderbg-gradient-to-r p-2 text-gray-500 "></i>
            <details className='text-gray-500'>
                <summary className='text-base'><span className='text-base transition cursor-pointer duration-300 ease-in-out text-black'>Can I compare multiple cars at once?</span></summary>
                <p className='mt-2 text-gray-700'>Yes! You can easily compare multiple cars to check their specifications, prices, features, and reviews side by side. This helps you make a more informed decision.</p>
            </details>
            </div>

            <div className='flex items-center gap-2 mb-4 border-b-2 border-gray-300 pb-4 transition-transform duration-300 ease-in-out hover:scale-105'>
            <i className="fa-solid fa-car relative left-1 text-xl borderbg-gradient-to-r p-2 text-gray-500 "></i>
            <details className='text-gray-500'>
                <summary className='text-base'><span className='text-base transition cursor-pointer duration-300 ease-in-out text-black'>Can I save cars to view later?</span></summary>
                <p className='mt-2 text-gray-700'>Absolutely! You can save cars to your favorites list for easy access later. This allows you to compare cars, track price changes, and make a decision when you're ready.</p>
            </details>
            </div>

            <div className='flex items-center gap-2 mb-4 border-b-2 border-gray-300 pb-4 transition-transform duration-300 ease-in-out hover:scale-105'>
            <i className="fa-solid fa-car relative left-1 text-xl borderbg-gradient-to-r p-2 text-gray-500 "></i>
            <details className='text-gray-500'>
                <summary className='text-base'><span className='text-base transition cursor-pointer duration-300 ease-in-out text-black'>Can I get alerts for new car listings?</span></summary>
                <p className='mt-2 text-gray-700'>Yes! You can set up alerts for new car listings based on your preferences. You'll receive notifications when new cars that match your criteria are added to the platform.</p>
            </details>
            </div>

            <div className='flex items-center gap-2 mb-4 border-b-2 border-gray-300 pb-4 transition-transform duration-300 ease-in-out hover:scale-105'>
            <i className="fa-solid fa-car relative left-1 text-xl borderbg-gradient-to-r p-2 text-gray-500 "></i>
            <details className='text-gray-500'>
                <summary className='text-base'><span className='text-base transition cursor-pointer duration-300 ease-in-out text-black'>Can I get a detailed history of the car?</span></summary>
                <p className='mt-2 text-gray-700'>Yes, we provide detailed car histories including accident reports, service records, ownership history, and more. This information helps you make an informed decision when purchasing a car.</p>
            </details>
            </div>

            <div className='flex items-center gap-2 mb-4 border-b-2 border-gray-300 pb-4 transition-transform duration-300 ease-in-out hover:scale-105'>
            <i className="fa-solid fa-car relative left-1 text-xl borderbg-gradient-to-r p-2 text-gray-500 "></i>
            <details className='text-gray-500'>
                <summary className='text-base'><span className='text-base transition cursor-pointer duration-300 ease-in-out text-black'>Can I schedule a test drive for a car?</span></summary>
                <p className='mt-2 text-gray-700'>Yes! You can easily schedule a test drive for a car you're interested in. Simply contact the seller through the platform to arrange a convenient time to test drive the car.</p>
            </details>
            </div>

            <div className='flex items-center gap-2 mb-4 border-b-2 border-gray-300 pb-4 transition-transform duration-300 ease-in-out hover:scale-105'>
            <i className="fa-solid fa-car relative left-1 text-xl borderbg-gradient-to-r p-2 text-gray-500 "></i>
            <details className='text-gray-500'>
                <summary className='text-base'><span className='text-base transition cursor-pointer duration-300 ease-in-out text-black'>Can I get financing for a car purchase?</span></summary>
                <p className='mt-2 text-gray-700'>Yes! We offer financing options for car purchases through our trusted partners. You can apply for financing directly through the platform and get pre-approved quickly and easily.</p>
            </details>
            </div>
            
            </section>
            </div>

        <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
    </div>
</section>
</>
    )
}

export default FAQs
