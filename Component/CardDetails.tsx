import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CarProps } from '../types';
import { generateCarImageUrl } from '../utils';
import CustomButton from './CustomButton';
import { db, collection, addDoc } from '../Firebase/firebase'; // Firestore methods

interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CardDetails = ({ isOpen, closeModal, car }: CardDetailsProps) => {
  // State to manage the visibility of the booking form
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [carModel, setCarModel] = useState('');

  const handleBookingClick = () => {
    setShowBookingForm(true);
  };

  const handleCloseForm = () => {
    setShowBookingForm(false);
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form data (check if required fields are filled)
    if (!name || !email || !phone || !carModel) {
      alert('Please fill in all fields.');
      return;
    }

    // Set fallback values in case car.make or other fields are undefined
    const bookingData = {
      fullName: name,
      email: email,
      phoneNumber: phone,
      additionalNotes: notes || '', // Use empty string if no notes provided
      carModel: carModel,
      carMake: car.make || 'Unknown Make', // Use a fallback value for carMake if undefined
      carYear: car.year || 'Unknown Year', // Use a fallback value for carYear if undefined
    };

    try {
      // Add the booking data to Firestore
      const docRef = await addDoc(collection(db, 'bookings'), bookingData);
      console.log('Document written with ID: ', docRef.id);
      // Close the form after submission
      setShowBookingForm(false);
      alert('Booking successful!');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <img src='/close.svg' alt='close' className='object-contain cursor-pointer' width={20} height={20} />
                </button>

                {/* Car Image & Details */}
                <div className='flex-1 flex flex-col gap-3'>
                  <div className='relative w-full h-40 bg-blue-500 bg-cover bg-center rounded-lg'>
                    <img src={generateCarImageUrl(car)} alt='car model' className='object-contain' />
                  </div>
                  <div className='flex gap-3'>
                    <div className='flex-1 relative w-full h-24 rounded-lg'>
                      <img src={generateCarImageUrl(car, '29')} alt='car model' className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 rounded-lg'>
                      <img src={generateCarImageUrl(car, '33')} alt='car model' className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 rounded-lg'>
                      <img src={generateCarImageUrl(car, '270')} alt='car model' className='object-contain' />
                    </div>
                  </div>
                </div>

                {/* Car Information */}
                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    {car.model ? car.model : 'Toyota corolla'} {car.make}
                  </h2>

                  <div className='mt-3 flex flex-wrap gap-4'>
                    {Object.entries(car).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full text-right' key={key}>
                        <h4 className='text-gray-600 capitalize'>{key.split('_').join(' ')}</h4>
                        <p className='font-semibold'>{typeof value === 'object' ? JSON.stringify(value) : value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Book Now Button */}
                  <CustomButton
                    title='Book Now'
                    containerStyle='w-full mt-3 py-[14px] rounded-full cursor-pointer bg-blue-500'
                    textStyles='text-white font-semibold text-[14px]'
                    rightIcon='/right-arrow.svg'
                    handleClick={handleBookingClick}
                  />
                </div>

                {/* Booking Form (only visible when showBookingForm is true) */}
                {showBookingForm && (
                  <div className='mt-5 p-4 bg-gray-100 rounded-lg'>
                    <h3 className='text-lg font-semibold'>Booking Form</h3>
                    <form onSubmit={handleSubmit} className='space-y-4 mt-3'>
                      <input
                        type='text'
                        placeholder='Full Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full p-2 border border-gray-300 rounded'
                      />
                      <input
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full p-2 border border-gray-300 rounded'
                      />
                      <input
                        type='tel'
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='w-full p-2 border border-gray-300 rounded'
                      />
                      <textarea
                        placeholder='Additional Notes'
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className='w-full p-2 border border-gray-300 rounded'
                      ></textarea>
                      <input
                        type='text'
                        placeholder='Car Model'
                        value={carModel}
                        onChange={(e) => setCarModel(e.target.value)}
                        className='w-full p-2 border border-gray-300 rounded'
                      />
                      <div className='flex justify-between'>
                        <button
                          type='button'
                          className='py-2 px-4 bg-red-500 text-white rounded'
                          onClick={handleCloseForm}
                        >
                          Close
                        </button>
                        <button
                          type='submit'
                          className='py-2 px-4 bg-blue-500 text-white rounded'
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CardDetails;




// import Image from 'next/image';
// import { Fragment, useState } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import { CarProps } from '../types';
// import { generateCarImageUrl } from '../utils';
// import CustomButton from './CustomButton';

// interface CardDetailsProps {
//     isOpen: boolean;
//     closeModal: () => void;
//     car: CarProps;
// }

// const CardDetails = ({ isOpen, closeModal, car }: CardDetailsProps) => {
//     // State to manage the visibility of the booking form
//     const [showBookingForm, setShowBookingForm] = useState(false);
    
//     const handleBookingClick = () => {
//         setShowBookingForm(true);
//     };

//     const handleCloseForm = () => {
//         setShowBookingForm(false);
//     };

//     return (
//         <>
//             <Transition appear show={isOpen} as={Fragment}>
//                 <Dialog as='div' className="relative z-10" onClose={closeModal}>
//                     <Transition.Child
//                         as={Fragment}
//                         enter="ease-out duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in duration-200"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <div className='fixed inset-0 bg-black opacity-25' />
//                     </Transition.Child>

//                     <div className='fixed inset-0 overflow-y-auto'>
//                         <div className='flex min-h-full items-center justify-center p-4 text-center'>
//                             <Transition.Child
//                                 as={Fragment}
//                                 enter="ease-out duration-300"
//                                 enterFrom="opacity-0 scale-95"
//                                 enterTo="opacity-100 scale-100"
//                                 leave="ease-in duration-200"
//                                 leaveFrom="opacity-100 scale-100"
//                                 leaveTo="opacity-0 scale-95"
//                             >
//                                 <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
//                                     <button
//                                         type='button'
//                                         className='absolute top-2 right-2 z-10 w-fit p-2 bg-blue-100 rounded-full'
//                                         onClick={closeModal}
//                                     >
//                                         <Image src='/close.svg' alt='close' className='object-contain cursor-pointer' width={20} height={20} />
//                                     </button>
                                    
//                                     {/* Car Image & Details */}
//                                     <div className='flex-1 flex flex-col gap-3'>
//                                         <div className='relative w-full h-40 bg-blue-500 bg-cover bg-center rounded-lg'>
//                                             <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
//                                         </div>
//                                         <div className='flex gap-3'>
//                                             <div className='flex-1 relative w-full h-24 rounded-lg'>
//                                                 <Image src={generateCarImageUrl(car, '29')} alt='car model' fill priority className='object-contain' />
//                                             </div>
//                                             <div className='flex-1 relative w-full h-24 rounded-lg'>
//                                                 <Image src={generateCarImageUrl(car, '33')} alt='car model' fill priority className='object-contain' />
//                                             </div>
//                                             <div className='flex-1 relative w-full h-24 rounded-lg'>
//                                                 <Image src={generateCarImageUrl(car, '270')} alt='car model' fill priority className='object-contain' />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Car Information */}
//                                     <div className='flex-1 flex flex-col gap-2'>
//                                         <h2 className='font-semibold text-xl capitalize'>
//                                             {car.model ? car.model : "Toyota corolla"} {car.make}
//                                         </h2>

//                                         <div className='mt-3 flex flex-wrap gap-4'>
//                                             {Object.entries(car).map(([key, value]) => (
//                                                 <div className='flex justify-between gap-5 w-full text-right' key={key}>
//                                                     <h4 className='text-gray-600 capitalize'>{key.split("_").join(" ")}</h4>
//                                                     <p className='font-semibold'>{typeof value === 'object' ? JSON.stringify(value) : value}</p>
//                                                 </div>
//                                             ))}
//                                         </div>

//                                         {/* Book Now Button */}
//                                         <CustomButton
//                                             title='Book Now' 
//                                             containerStyle='w-full mt-3 py-[14px] rounded-full cursor-pointer bg-blue-500'
//                                             textStyles='text-white font-semibold text-[14px]'
//                                             rightIcon="/right-arrow.svg"
//                                             handleClick={handleBookingClick}
//                                         />

//                                     </div>

//                                     {/* Booking Form (only visible when showBookingForm is true) */}
//                                     {showBookingForm && (
//                                         <div className="mt-5 p-4 bg-gray-100 rounded-lg">
//                                             <h3 className="text-lg font-semibold">Booking Form</h3>
//                                             <form className="space-y-4 mt-3">
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Full Name"
//                                                     className="w-full p-2 border border-gray-300 rounded"
//                                                 />
//                                                 <input
//                                                     type="email"
//                                                     placeholder="Email Address"
//                                                     className="w-full p-2 border border-gray-300 rounded"
//                                                 />
//                                                 <input
//                                                     type="tel"
//                                                     placeholder="Phone Number"
//                                                     className="w-full p-2 border border-gray-300 rounded"
//                                                 />
//                                                 <textarea
//                                                     placeholder="Additional Notes"
//                                                     className="w-full p-2 border border-gray-300 rounded"
//                                                 ></textarea>
//                                                 <div className="flex justify-between">
//                                                     <button
//                                                         type="button"
//                                                         className="py-2 px-4 bg-red-500 text-white rounded"
//                                                         onClick={handleCloseForm}
//                                                     >
//                                                         Close
//                                                     </button>
//                                                     <button
//                                                         type="submit"
//                                                         className="py-2 px-4 bg-blue-500 text-white rounded"
//                                                     >
//                                                         Submit
//                                                     </button>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     )}
//                                 </Dialog.Panel>
//                             </Transition.Child>
//                         </div>
//                     </div>
//                 </Dialog>
//             </Transition>
//         </>
//     );
// }

// export default CardDetails;


// import Image from 'next/image';
// import { Fragment, useState } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import { CarProps } from '../types';
// import { relative } from 'path';
// import { generateCarImageUrl } from '../utils';
// import { url } from 'inspector';
// import CustomButton from './CustomButton';

// interface CardDetailsProps {
//     isOpen: boolean;
//     closeModal: () => void;
//     car: CarProps;
// }

// const CardDetails = ({ isOpen, closeModal, car }: CardDetailsProps) => {
//     return (
//         <>
//             <Transition appear show={isOpen} as={Fragment}>
//                 <Dialog as='div' className="relative z-10" onClose={closeModal}>
//                     <Transition.Child
//                         as={Fragment}
//                         enter="ease-out duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in duration-200"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <div className='fixed inset-0 bg-black opacity-25' />
//                     </Transition.Child>

//                     <div className='fixed inset-0 overflow-y-auto'>
//                         <div className='flex min-h-full items-center justify-center p-4 text-center'>
//                             <Transition.Child
//                                 as={Fragment}
//                                 enter="ease-out duration-300"
//                                 enterFrom="opacity-0 scale-95"
//                                 enterTo="opacity-100 scale-100"
//                                 leave="ease-in duration-200"
//                                 leaveFrom="opacity-100 scale-100"
//                                 leaveTo="opacity-0 scale-95"
//                             >
//                                 <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform
//                                 rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
//                                     <button
//                                         type='button'
//                                         className='absolute top-2 right-2 z-10 w-fit p-2 bg-blue-100 rounded-full'
//                                         onClick={closeModal}
//                                     >
//                                         <Image src='/close.svg' alt='close' className='object-contain cursor-pointer' width={20} height={20} />
//                                     </button>
//                                     <div className='flex-1 flex flex-col gap-3'>
//                                         <div className='relative w-full h-40 bg-blue-500 bg-cover bg-center rounded-lg'>
//                                             <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
//                                         </div>

//                                         <div className='flex gap-3'>
//                                             <div className='flex-1 relative w-full h-24 rounded-lg'>
//                                                 <Image src={generateCarImageUrl(car, '29')} alt='car model' fill priority className='object-contain' />
//                                             </div>

//                                             <div className='flex-1 relative w-full h-24 rounded-lg'>
//                                                 <Image src={generateCarImageUrl(car, '33')} alt='car model' fill priority className='object-contain' />
//                                             </div>

//                                             <div className='flex-1 relative w-full h-24 rounded-lg'>
//                                                 <Image src={generateCarImageUrl(car, '270')} alt='car model' fill priority className='object-contain' />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className='flex-1 flex flex-col gap-2'>
//                                         <h2 className='font-semibold text-xl capitalize'>
//                                             {car.model ? car.model : "Toyota corolla"} {car.make}
//                                         </h2>

//                                         <div className='mt-3 flex flex-wrap gap-4'>
//                                             {Object.entries(car).map(([key, value]) => (
//                                                 <div className='flex justify-between gap-5 w-full text-right' key={key}>
//                                                     <h4 className='text-gray-600 capitalize'>{key.split("_").join(" ")}</h4>
//                                                     <p className='font-semibold'>{typeof value === 'object' ? JSON.stringify(value) : value}</p>
//                                                 </div>
//                                             ))}
//                                         </div>

//                                         <CustomButton
//                                             title='Book Now' containerStyle='w-full mt-3 py-[14px] rounded-full cursor-pointer bg-blue-500'
//                                             textStyles='text-white font-semibold text-[14px]'
//                                             rightIcon="/right-arrow.svg"
//                                         />

//                                     </div>


//                                 </Dialog.Panel>
//                             </Transition.Child>
//                         </div>

//                     </div>
//                 </Dialog>
//             </Transition>
//         </>
//     )
// }

// export default CardDetails
