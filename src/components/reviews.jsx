import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InputTextArea from './inputTextArea';
import Button from './button';
import Rating from './rating';
import Avatar from './avatar';

export default function Reviews({ barberId, clientId, admin }) {
      const [newReview, setNewReview] = useState('');
      const [newRating, setNewRating] = useState('');
      const [finalRate, setFinalRate] = useState(0);
      const [allReviews, setAllReviews] = useState([]);
      const [myReview, setMyReview] = useState(null);

      useEffect(() => {
            const fetchReviews = async () => {
                  try {
                        const [barberClientResponse, barberResponse] = await Promise.all([
                              axios.get('http://localhost:8080/api/reviews/by-barber-client', {
                                    params: { barberId, clientId }
                              }),
                              axios.get('http://localhost:8080/api/reviews/by-barber', {
                                    params: { barberId }
                              })
                        ]);
                        setMyReview(barberClientResponse.data.data);
                        setAllReviews(barberResponse.data.data);
                        calculateAverageRating();
                  } catch (error) {
                        console.error('Error fetching reviews:', error);
                  }
            };

            fetchReviews();
      }, [barberId, clientId]);

      const handleReviewSubmit = async (e) => {
            e.preventDefault();


            try {
                  await axios.post('http://localhost:8080/api/reviews', null, {
                        params: { clientId, barberId, rating: newRating, comment: newReview }
                  });

                  const [barberClientResponse, barberResponse] = await Promise.all([
                        axios.get('http://localhost:8080/api/reviews/by-barber-client', {
                              params: { barberId, clientId }
                        }),
                        axios.get('http://localhost:8080/api/reviews/by-barber', {
                              params: { barberId }
                        })
                  ]);

                  setMyReview(barberClientResponse.data.data);
                  setAllReviews(barberResponse.data.data);
                  calculateAverageRating();
                  setNewReview('');
                  setNewRating('');
            } catch (error) {
                  console.error('Error submitting review:', error);
            }

      };

      const calculateAverageRating = () => {
            if (allReviews.length == 0) {
                  setFinalRate('0');
                  return;
            }

            const totalRating = allReviews.reduce((acc, review) => acc + review.rating, 0);
            const averageRating = (totalRating / allReviews.length).toFixed(1);

            setFinalRate(averageRating);

      };

      return (
            <div className="flex flex-col gap-4 p-4 bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl">
                  <div className="text-white">
                        <h2 className="text-center text-white jacquard text-3xl">Reviews</h2>
                        <div className='flex content-center items-center justify-center w-full'>
                              <h2 className="text-center text-white jacquard text-3xl">4</h2>
                              <svg

                                    className="text-yellow-400 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"

                              >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg></div>


                  </div>

                  <div className='overflow-auto border border-gray-800 rounded-lg px-2' style={{ maxHeight: "330px" }}>
                        {allReviews.length === 0 ? (
                              <div className='w-full p-4 text-center text-white jacquard text-2xl content-center h-full '>There are no reviews</div>
                        ) : (
                              allReviews.map((review) => (
                                    <div key={review.id} className="w-full text-white p-4 border border-gray-700 rounded-lg my-4">
                                          <div className='flex mb-4'>
                                                <div className='size-10'>
                                                      <Avatar size="size-10" imageUrl={review.client.user.avatarUrl} />
                                                </div>
                                                <div className='content-center p-2'>{review.client.user.name}</div>
                                          </div>
                                          <Rating initialValue={review.rating} interactive={false} />
                                          <p className="w-full text-white text-md">{review.comment}</p>
                                    </div>
                              ))
                        )}
                  </div>

                  {!admin && !myReview ? (
                        <>
                              <hr className='bg-white' />
                              <form onSubmit={handleReviewSubmit} className="text-white">
                                    <label className="block text-sm text-gray-500 dark:text-gray-300 mb-2">
                                          Rating
                                    </label>
                                    <Rating initialValue={newRating} onChange={setNewRating} />
                                    <div style={{ height: "20px" }}></div>
                                    <InputTextArea
                                          label="Review"
                                          placeHolder="Enter your review"
                                          onChange={(e) => setNewReview(e.target.value)}
                                          value={newReview}
                                    />
                                    <div style={{ height: "20px" }}></div>
                                    <Button buttonText="Submit Review" type="submit" fullWidth={true} />
                              </form>
                        </>
                  ) : (
                        <div key={myReview.id} className="w-full text-white p-4 border border-gray-700 rounded-lg my-4">
                              <h2 className="text-center text-white jacquard text-3xl">Your Review</h2>
                              <div className='flex mb-4'>
                                    <div className='size-10'>
                                          <Avatar size="size-10" imageUrl={myReview.client.user.avatarUrl} />
                                    </div>
                                    <div className='content-center p-2'>{myReview.client.user.name}</div>
                              </div>
                              <Rating initialValue={myReview.rating} interactive={false} />
                              <p className="w-full text-white text-md">{myReview.comment}</p>
                        </div>
                  )}
            </div>
      );
}
