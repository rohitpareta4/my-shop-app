// import { useState } from 'react';
// import axios from 'axios';
// import StarRating from './StarRating';

// const ReviewForm = ({ onReviewSubmit }) => {
//     const [userName, setUserName] = useState('');
//     const [reviewText, setReviewText] = useState('');
//     const [rating, setRating] = useState(0);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!userName || rating === 0) {  // Fixed: Added || operator
//             alert('Please fill all fields');
//             return;
//         }

//         try {
//             await axios.post("http://localhost:8800/reviews", {
//                 user_name: userName,
//                 review_text: reviewText,
//                 rating: rating
//             });
            
//             onReviewSubmit();
//             setUserName('');
//             setReviewText('');
//             setRating(0);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div className="bg-black p-6 rounded-lg shadow-md mb-8">
//             <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Your Name</label>
//                     <input
//                         type="text"
//                         value={userName}
//                         onChange={(e) => setUserName(e.target.value)}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Rating</label>
//                     <StarRating rating={rating} setRating={setRating} />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Your Review</label>
//                     <textarea
//                         value={reviewText}
//                         onChange={(e) => setReviewText(e.target.value)}
//                         className="w-full p-2 border rounded"
//                         rows="4"
//                         required
//                     ></textarea>
//                 </div>
//                 <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                     Submit Review
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ReviewForm;

import { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating';

const ReviewForm = ({ onReviewSubmit }) => {
    const [userName, setUserName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!userName || rating === 0) {
            alert('Please fill all fields');
            return;
        }

        try {
            await axios.post("http://localhost:8800/reviews", {
                user_name: userName,
                review_text: reviewText,
                rating: rating
            });
            
            onReviewSubmit();
            setUserName('');
            setReviewText('');
            setRating(0);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Leave a Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-300 mb-3 font-medium">Your Name</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 mb-3 font-medium">Rating</label>
                    <StarRating rating={rating} setRating={setRating} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 mb-3 font-medium">Your Review</label>
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="5"
                        placeholder="Share your thoughts..."
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;