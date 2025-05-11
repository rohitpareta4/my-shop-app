// import { FaStar } from 'react-icons/fa';

// const ReviewList = ({ reviews }) => {
//     return (
//         <div className="space-y-6">
//             <h2 className="text-2xl font-bold">Customer Reviews</h2>
//             {reviews.length === 0 ? (
//                 <p>No reviews yet. Be the first to review!</p>
//             ) : (
//                 reviews.map((review) => (
//                     <div key={review.id} className="bg-black p-6 rounded-lg shadow-md">
//                         <div className="flex justify-between items-start mb-2">
//                             <h3 className="font-bold text-lg">{review.user_name}</h3>
//                             <div className="flex items-center">
//                                 {[...Array(5)].map((_, i) => (
//                                     <FaStar 
//                                         key={i}
//                                         className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <p className="text-gray-500 text-sm mb-3">
//                             {new Date(review.created_at).toLocaleDateString()}
//                         </p>
//                         <p className="text-gray-700">{review.review_text}</p>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

// export default ReviewList;

import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const ReviewList = ({ reviews }) => {
    const [visibleCount, setVisibleCount] = useState(2);
    const increment = 2; // Load 2 more reviews each click
    
    const displayedReviews = reviews.slice(0, visibleCount);
    const canShowMore = reviews.length > visibleCount;
    
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet. Be the first to review!</p>
            ) : (
                <>
                    {displayedReviews.map((review) => (
                        <div key={review.id} className="bg-black p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">{review.user_name}</h3>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar 
                                            key={i}
                                            className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mb-3">
                                {new Date(review.created_at).toLocaleDateString()}
                            </p>
                            <p className="text-[white]">{review.review_text}</p>
                        </div>
                    ))}
                    
                    {canShowMore && (
                        <button
                            onClick={() => setVisibleCount(v => Math.min(v + increment, reviews.length))}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            Load More ({Math.min(increment, reviews.length - visibleCount)})
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default ReviewList;

// import { FaStar } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const ReviewList = ({ reviews }) => {
//     return (
//         <div className="space-y-6">
//             {reviews.length === 0 ? (
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-center py-12"
//                 >
//                     <div className="text-gray-400 text-lg mb-2">🌟</div>
//                     <h3 className="text-xl font-medium text-gray-300">No reviews yet</h3>
//                     <p className="text-gray-500 mt-1">Be the first to share your experience!</p>
//                 </motion.div>
//             ) : (
//                 reviews.map((review, index) => (
//                     <motion.div
//                         key={review.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
//                     >
//                         <div className="flex justify-between items-start mb-3">
//                             <div>
//                                 <h3 className="font-bold text-lg text-white">{review.user_name}</h3>
//                                 <p className="text-gray-400 text-sm mt-1">
//                                     {new Date(review.created_at).toLocaleDateString('en-US', {
//                                         year: 'numeric',
//                                         month: 'long',
//                                         day: 'numeric'
//                                     })}
//                                 </p>
//                             </div>
//                             <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
//                                 <span className="text-yellow-400 font-bold mr-1">{review.rating}</span>
//                                 <FaStar className="text-yellow-400" />
//                             </div>
//                         </div>
//                         <p className="text-gray-300 mt-4 leading-relaxed">
//                             {review.review_text}
//                         </p>
//                         <div className="flex mt-4 space-x-1">
//                             {[...Array(5)].map((_, i) => (
//                                 <FaStar 
//                                     key={i}
//                                     className={`text-lg ${i < review.rating ? "text-yellow-400" : "text-gray-600"}`}
//                                 />
//                             ))}
//                         </div>
//                     </motion.div>
//                 ))
//             )}
//         </div>
//     );
// };

// export default ReviewList;
