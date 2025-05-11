
// 'use client';
// import React from 'react'
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// // import ReviewForm from './components/ReviewForm';
// import ReviewForm from '@/app/components/ReviewForm';
// // import ReviewList from './components/ReviewList';
// import ReviewList from '@/app/components/ReviewList';

// const Reviews = () => {


//   const [reviews, setReviews] = useState([]);

//   const fetchReviews = async () => {
//       try {
//           const res = await axios.get("http://localhost:8800/reviews");
//           setReviews(res.data);
//       } catch (err) {
//           console.error(err);
//       }
//   };

//   useEffect(() => {
//       fetchReviews();
//   }, []);


//   return (
//     <div className="bg-[black]">
//     <h1 className="">Product Reviews</h1>
//     <ReviewForm onReviewSubmit={fetchReviews} />
//     <ReviewList reviews={reviews} />
// </div>
//   )
// }

// export default Reviews


'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewForm from '@/app/components/ReviewForm';
import ReviewList from '@/app/components/ReviewList';
import { motion } from 'framer-motion';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:8800/reviews");
      setReviews(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
          Customer Reviews
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Share your experience and read what others think about our product
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Review Form Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <ReviewForm onReviewSubmit={fetchReviews} />
        </motion.section>

        {/* Reviews List Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
            What Our Customers Say
          </h2>
          <ReviewList reviews={reviews} />
        </motion.section>
      </div>

      {/* Floating Particles Background (optional) */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;




// 'use client';
// import { useState } from 'react';
// import { FiStar, FiUser, FiMessageSquare } from 'react-icons/fi';

// const ReviewSection = () => {





//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({
//     name: '',
//     rating: 0,
//     comment: ''
//   });
//   const [hoverRating, setHoverRating] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newReview.rating === 0 || !newReview.comment) return;
    
//     const reviewWithDate = {
//       ...newReview,
//       date: new Date().toLocaleDateString(),
//       id: Date.now()
//     };
    
//     setReviews(prev => [reviewWithDate, ...prev]);
//     setNewReview({ name: '', rating: 0, comment: '' });
//   };

//   return (
//     <section id="reviews" className="py-16 bg-gray-900 text-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Customer <span className="text-blue-400">Reviews</span>
//         </h2>
        
//         {/* Review Form */}
//         <div className="bg-gray-800 rounded-xl shadow-md p-6 mb-12 max-w-2xl mx-auto">
//           <h3 className="text-xl font-semibold mb-4 flex items-center">
//             <FiMessageSquare className="mr-2 text-blue-400" />
//             Share Your Experience
//           </h3>
          
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
//                 Your Name (Optional)
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={newReview.name}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-400 focus:border-blue-400 text-white"
//                 placeholder="John Doe"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 Your Rating
//               </label>
//               <div className="flex space-x-1">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <button
//                     key={star}
//                     type="button"
//                     onClick={() => setNewReview({ ...newReview, rating: star })}
//                     onMouseEnter={() => setHoverRating(star)}
//                     onMouseLeave={() => setHoverRating(0)}
//                     className="text-2xl focus:outline-none"
//                   >
//                     <FiStar
//                       className={
//                         (hoverRating || newReview.rating) >= star
//                           ? 'text-yellow-400 fill-yellow-400'
//                           : 'text-gray-500'
//                       }
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             <div>
//               <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-1">
//                 Your Review
//               </label>
//               <textarea
//                 id="comment"
//                 name="comment"
//                 rows="4"
//                 required
//                 value={newReview.comment}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-400 focus:border-blue-400 text-white"
//                 placeholder="Share your experience with our electrical services..."
//               ></textarea>
//             </div>
            
//             <button
//               type="submit"
//               disabled={!newReview.comment || newReview.rating === 0}
//               className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//             >
//               Submit Review
//             </button>
//           </form>
//         </div>
        
//         {/* Reviews Display */}
//         <div className="max-w-4xl mx-auto">
//           <h3 className="text-xl font-semibold mb-6 flex items-center">
//             <FiStar className="mr-2 text-yellow-400" />
//             What Our Customers Say ({reviews.length})
//           </h3>
          
//           {reviews.length === 0 ? (
//             <p className="text-gray-400 text-center py-8">
//               No reviews yet. Be the first to share your experience!
//             </p>
//           ) : (
//             <div className="space-y-6">
//               {reviews.map((review) => (
//                 <div key={review.id} className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
//                   <div className="flex justify-between items-start mb-2">
//                     <div>
//                       <h4 className="font-medium text-white">
//                         {review.name || 'Anonymous'}
//                       </h4>
//                       <p className="text-sm text-gray-400">{review.date}</p>
//                     </div>
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <FiStar
//                           key={i}
//                           className={
//                             i < review.rating
//                               ? 'text-yellow-400 fill-yellow-400'
//                               : 'text-gray-500'
//                           }
//                         />
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-gray-300 mt-2">{review.comment}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReviewSection;