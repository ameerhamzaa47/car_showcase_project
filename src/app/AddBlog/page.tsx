import Image from 'next/image'

const Page = () => {
  return (
    <>
    <div className='mx-auto w-full max-w-[1000px] px-6 py-8 shadow-xl rounded-3xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl'>
    <h1 className='font-bold text-4xl text-center mb-6 text-gray-800 tracking-tight'>
        Add Blog
    </h1>
    <div className='flex justify-center mb-6'>
        <Image
            src={'/hero.png'}
            width={500}
            height={500}
            alt='blog'
            className='rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl'
        />
    </div>
    <p className='text-base text-gray-600 leading-relaxed tracking-wide'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni doloribus voluptate ipsa, incidunt fugit quis odio dignissimos, error vitae officiis earum ex? Velit, eveniet, iste doloremque labore mollitia ullam asperiores est, temporibus recusandae obcaecati quos architecto unde quasi! Error ipsum aspernatur rem quas libero, id illo voluptas mollitia deleniti.
    </p>
</div>

    </>
  )
}

export default Page
