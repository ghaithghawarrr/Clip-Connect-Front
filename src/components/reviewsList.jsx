import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "./avatar";
import Rating from "./rating";

const ReviewsList = ({ userId }) => {
      const [reviews, setReviews] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
            const fetchReviews = async () => {
                  try {

                        const response = await axios.get(`http://localhost:8080/api/reviews/by-client`, { params: { userId } });
                        setReviews(response.data.data);
                        setLoading(false);
                        console.log(response)
                  } catch (error) {
                        console.error("Error fetching reviews:", error);
                        setError("Error fetching reviews");
                        setLoading(false);
                  }
            };

            if (userId) {
                  fetchReviews();
            }
      }, [userId]);

      if (loading) return <p>Loading reviews...</p>;
      if (error) return <p>{error}</p>;

      return (
            <div>
                  <h2 className="w-full p-4 text-center text-white jacquard text-2xl">My Reviews</h2>
                  {reviews.length > 0 ? (
                        <ul>
                              {reviews.map((review) => (
                                    <div key={review.id} className="w-full text-white p-4 border border-gray-700 rounded-lg mb-4">
                                          <div className='flex mb-4'>
                                                <div className='size-10'>
                                                      <Avatar size="size-10" imageUrl={review.barber.user.avatarUrl} />
                                                </div>
                                                <div className='content-center p-2'>{review.barber.shopName}</div>
                                          </div>
                                          <Rating initialValue={review.rating} interactive={false} />
                                          <p className="w-full text-white text-md">{review.comment}</p>
                                    </div>
                              ))}
                        </ul>
                  ) : (
                        <p className="text-white">You have not reviewed any barbers yet.</p>
                  )}
            </div>
      );
};

export default ReviewsList;
