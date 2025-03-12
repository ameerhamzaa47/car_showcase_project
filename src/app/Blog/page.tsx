import Image from "next/image"

const page = () => {
    return (
        <>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Car Showcase Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image src="/hero.png" alt="Car 1" className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-2">Car Title 1</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image src="/model-icon.png" alt="Car 2" className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-2">Car Title 2</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image src="/tire.svg" alt="Car 3" className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-2">Car Title 3</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default page
