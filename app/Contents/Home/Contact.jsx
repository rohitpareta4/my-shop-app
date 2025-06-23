
import React from 'react';

export default function Contact() {
  return (
    <div id='contact' className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div id='expert' className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
            Contact <span className="text-blue-400">Information</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reach out to us for all your electrical needs. We're here to help!
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-blue-500 max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-lg">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Our Address</h3>
                <p className="mt-1 text-gray-300">Gurudware ki gali,kota road Baran</p>
                <p className="text-gray-300">Baran, Rajasthan 325205</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-lg">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Phone Numbers</h3>
                <p className="mt-1 text-gray-300">+91 9829374593 (General inquiries)</p>
                             </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-lg">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Email Address</h3>
                <a href="mailto:electricalshop@example.com" className="mt-1 text-blue-400 hover:underline block">
                  pareta924@gmail.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-lg">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Working Hours</h3>
                <p className="mt-1 text-gray-300">Monday - Saturday: 9:00 AM to 8:00 PM</p>
                <p className="text-gray-300">Sunday: Closed (Emergency services available)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}

      </div>
    </div>
  );
}

// https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.489289961477!2d75.7866233150449!3d26.91228308312689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b0a0b6d8a5%3A0x3a0a3a3a3a3a3a3a!2s123%20Main%20Road%2C%20Near%20Power%20House%2C%20Jaipur%2C%20Rajasthan%20302001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin


//         <div id='map' className="mt-12 bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-l-4 border-blue-500 max-w-2xl mx-auto">
//           <h2 className="text-2xl font-bold text-white p-8 pb-4">Our Location</h2>
//           <div className="px-8 pb-8">
//             <iframe
//               className="w-full h-96 rounded-lg"
// // https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.489289961477!2d75.7866233150449!3d26.91228308312689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b0a0b6d8a5%3A0x3a0a3a3a3a3a3a3a!2s123%20Main%20Road%2C%20Near%20Power%20House%2C%20Jaipur%2C%20Rajasthan%20302001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin
// // https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.489289961477!2d75.7866233150449!3d26.91228308312689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b0a0b6d8a5%3A0x3a0a3a3a3a3a3a3a!2s123%20Main%20Road%2C%20Near%20Power%20House%2C%20Jaipur%2C%20Rajasthan%20302001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.489289961477!2d75.7866233150449!3d26.91228308312689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b0a0b6d8a5%3A0x3a0a3a3a3a3a3a3a!2s123%20Main%20Road%2C%20Near%20Power%20House%2C%20Jaipur%2C%20Rajasthan%20302001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-12 text-center">
//           <h3 className="text-2xl font-bold text-white mb-4">Need immediate assistance?</h3>
//           <a 
//             href="tel:+919876543211" 
//             className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
//           >
//             <svg className="-ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//             </svg>
//             Call Emergency Hotline
//           </a>
//         </div>