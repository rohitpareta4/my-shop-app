// // import React from 'react'
// "use client"
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // Import required Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";



// const ServicesSection = () => {

//     const services = [
//         { title: "Electrical Repairs", image: "https://1000logos.net/wp-content/uploads/2021/04/Havells-logo.png" },
//         { title: "New Installations", image: "https://media.assettype.com/freepressjournal/2023-07/ace64526-46e7-432f-b78f-df4dc9c1ccdd/Untitled_design__26_.jpg" },
        
//       ];

//   return (
//     <div className="flex flex-col p-10 gap-y-10">
//         <div className=" text-[black]">
//           <h1 className="text-4xl font-bold bg-black text-white w-80">Service Center</h1>

//           <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={50}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//         >
//           {services.map((service, index) => (
//             <SwiperSlide key={index}>
//               <img src={service.image} alt={service.title} className="w-full h-98 object-cover"/>
//               <h3 className="text-center mt-2">{service.title}</h3>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         </div>
//     </div>
//   )
// }

// export default ServicesSection


// "use client"
// import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const ServicesSection = () => {
//     const services = [
//         { 
//             title: "Electrical Repairs", 
//             image: "https://1000logos.net/wp-content/uploads/2021/04/Havells-logo.png",
//             // description: "24/7 expert repair services"
//         },
//         { 
//             title: "New Installations", 
//             image: "https://media.assettype.com/freepressjournal/2023-07/ace64526-46e7-432f-b78f-df4dc9c1ccdd/Untitled_design__26_.jpg",
//             // description: "Professional installations"
//         },
//     ];

//     return (
//         <div className="py-12 px-4 sm:px-6 bg-gray-50">
//             {/* Header */}
//             <div className="text-center mb-8">
//                 <h1 className="text-3xl font-bold bg-black text-white inline-block px-6 py-2 rounded-lg">
//                     Service Center
//                 </h1>
               
//             </div>

//             {/* Mobile View - Only Circular Images (no slider) */}
//             <div className="flex flex-col items-center md:hidden">
//                 <div className="flex flex-wrap justify-center gap-8">
//                     {services.map((service, index) => (
//                         <div key={index} className="flex flex-col items-center">
//                             <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
//                                 <img 
//                                     src={service.image} 
//                                     alt={service.title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="mt-3 text-center">
//                                 <h3 className="font-semibold">{service.title}</h3>
//                                 <p className="text-sm text-gray-600">{service.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Desktop View - Swiper Slider (hidden on mobile) */}
//             <div className="hidden md:block max-w-3xl mx-auto">
//                 <Swiper
//                     modules={[Navigation, Pagination, Autoplay]}
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     navigation
//                     pagination={{ clickable: true }}
//                     autoplay={{ delay: 3000 }}
//                     className="rounded-lg shadow-lg"
//                 >
//                     {services.map((service, index) => (
//                         <SwiperSlide key={index}>
//                             <div className="relative h-80">
//                                 <img 
//                                     src={service.image} 
//                                     alt={service.title}
//                                     className="w-full h-full object-cover rounded-lg"
//                                 />
//                                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
//                                     <h3 className="text-xl font-bold">{service.title}</h3>
//                                     <p>{service.description}</p>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>

//             {/* Call to Action Buttons */}
          
//         </div>
//     );
// }

// export default ServicesSection;
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ServicesSection = () => {
    const services = [
        { 
            title: "HAVELLS", 
            image: "https://1000logos.net/wp-content/uploads/2021/04/Havells-logo.png"
        },
        { 
            title: "SYMPHONY", 
            image: "https://media.assettype.com/freepressjournal/2023-07/ace64526-46e7-432f-b78f-df4dc9c1ccdd/Untitled_design__26_.jpg"
        },
    ];

    return (
        <div className="py-12 px-4 bg-gray-900 min-h-[400px]">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-white inline-block px-8 py-2 rounded-lg shadow-lg">
                    Service Center
                </h1>
               
            </div>

            {/* Mobile View - Circular Brand Logos */}
            <div className="sm:hidden">
                <div className="flex justify-center space-x-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg bg-white p-1">
                                <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="mt-3 text-lg font-bold text-white">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop View - Swiper Slider */}
            <div className="hidden sm:block max-w-4xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true
                    }}
                    autoplay={{ 
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    className="rounded-xl shadow-xl"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-96">
                                <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="w-full h-full object-cover rounded-xl "
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Call to Action */}
         
        </div>
    );
}

export default ServicesSection;
