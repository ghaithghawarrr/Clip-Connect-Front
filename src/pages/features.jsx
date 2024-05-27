import React from 'react';

const Features = () => {
      return (
            <div className="min-h-screen min-w-screen items-center justify-center p-10">
                  <h1 className="text-3xl font-bold mb-4 text-center">Discover Premier Barber Services</h1>
                  <p className="text-black mb-8 text-center">
                        We partner with top-rated barbers across Tunisia to assist you in locating the perfect grooming services.
                  </p>
                  <div className='flex flex-wrap justify-center'>
                        <div className="m-4 w-full max-w-md p-8 text-white bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl">
                              <h1 className="jacquard text-amber-500 text-3xl font-bold mb-4">Easy Booking</h1>
                              <p className="text-white">
                                    Book your barber appointment with ease through our user-friendly booking system. Say goodbye to long waiting times and enjoy the convenience of scheduling your grooming sessions in advance. Receive instant confirmations and reminders, ensuring that you never miss an appointment.
                              </p>
                        </div>
                        <div className="m-4 w-full max-w-md p-8 text-white bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl">
                              <h1 className="jacquard text-amber-500 text-3xl font-bold mb-4">Rate & Review</h1>
                              <p className="text-white">
                                    Share your experience and help others discover the best barbers in town. Rate and review your barber after each appointment to provide valuable feedback and recommendations to fellow grooming enthusiasts. Your reviews contribute to building a vibrant community of informed consumers and skilled barbers.
                              </p>
                        </div>
                        <div className="m-4 w-full max-w-md p-8 text-white bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl">
                              <h1 className="jacquard text-amber-500 text-3xl font-bold mb-4">Find Barbershops</h1>
                              <p className="text-white">
                                    Explore a curated list of barbershops near you and discover new grooming destinations. Whether you're looking for a traditional barbershop experience or a modern salon, our platform connects you with a diverse range of grooming establishments. Browse through photos, reviews, and services offered to find the perfect barbershop for your grooming needs.
                              </p>
                        </div>
                  </div>
            </div>
      );
}

export default Features;
