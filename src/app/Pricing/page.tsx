import React from 'react'

const page = () => {
  return (
    <>
    <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
                        <p className="text-gray-700 mb-4">$19.99 / month</p>
                        <ul className="mb-6">
                            <li className="mb-2">Feature 1</li>
                            <li className="mb-2">Feature 2</li>
                            <li className="mb-2">Feature 3</li>
                        </ul>
                    </div>
                    <button className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 hover:transition-all text-white py-2 rounded-lg mt-auto">Choose Plan</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Standard Plan</h3>
                        <p className="text-gray-700 mb-4">$49.99 / month</p>
                        <ul className="mb-6">
                            <li className="mb-2">Feature 1</li>
                            <li className="mb-2">Feature 2</li>
                            <li className="mb-2">Feature 3</li>
                            <li className="mb-2">Feature 4</li>
                        </ul>
                    </div>
                    <button className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 hover:transition-all text-white py-2 rounded-lg mt-auto">Choose Plan</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
                        <p className="text-gray-700 mb-4">$99.99 / month</p>
                        <ul className="mb-6">
                            <li className="mb-2">Feature 1</li>
                            <li className="mb-2">Feature 2</li>
                            <li className="mb-2">Feature 3</li>
                            <li className="mb-2">Feature 4</li>
                            <li className="mb-2">Feature 5</li>
                        </ul>
                    </div>
                    <button className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 hover:transition-all text-white py-2 rounded-lg mt-auto">Choose Plan</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default page
