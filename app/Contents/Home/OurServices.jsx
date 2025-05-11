// // import React from 'react'

// const OurServices = () => {
//   return (
//     <div className="bg-[black]">
//       <h1>OurServices</h1>
//         <div className="grid grid-cols-2">
//            <div>
//              <img className="" src="https://static.wixstatic.com/media/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg/v1/fill/w_1000,h_580,al_c,q_85,usm_0.66_1.00_0.01/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg"/>
//              <h2>AC Service & Installation</h2>
//            </div>
//            <div>
//            <img src="https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Water-Heater/GHWERUPIR003_1.jpg"/>
//              <h2>GYSER Service & Installation</h2>
//            </div>
//            <div>
//            <img src="https://www.lg.com/content/dam/channel/wcms/in/images/refrigerators/gl-s342spzy_apzzebn_eail_in_c/gallery/GL-S342SPZY-Refrigerators-Front-View-DZ-01.jpg"/>
//              <h2>Refrigerator Service & Installation</h2>
//            </div>
//            <div>
//            <img src="https://www.homeserve.co.uk/-/jssmedia/hs-living/data/media/wp-attachments/2023/08/how-to-change-a-light-fitting.png"/>
//              <h2>light fitting</h2>
//            </div>
//            <div>
//            <img src="https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghracdwe3451_1_.jpg"/>
//              <h2>Cooler Service</h2>
//            </div>
//            <div>
//            <img src="https://www.batteryestore.com/cdn/shop/products/single-battery-combo-rapid-1650-iltt-26060-220-ah-60-months-warranty-tubular-battery-1.png?v=1655538462"/>
//              <h2>Inverter Installation</h2>
//            </div>
//         </div>
//     </div>
//   )
// }

// export default OurServices


// import React from 'react';

// const OurServices = () => {
//   const services = [
//     {
//       title: "AC Service & Installation",
//       image: "https://static.wixstatic.com/media/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg/v1/fill/w_1000,h_580,al_c,q_85,usm_0.66_1.00_0.01/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg"
//     },
//     {
//       title: "Geyser Service & Installation",
//       image: "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Water-Heater/GHWERUPIR003_1.jpg"
//     },
//     {
//       title: "Refrigerator Service & Installation",
//       image: "https://www.lg.com/content/dam/channel/wcms/in/images/refrigerators/gl-s342spzy_apzzebn_eail_in_c/gallery/GL-S342SPZY-Refrigerators-Front-View-DZ-01.jpg"
//     },
//     {
//       title: "Light Fitting",
//       image: "https://www.homeserve.co.uk/-/jssmedia/hs-living/data/media/wp-attachments/2023/08/how-to-change-a-light-fitting.png"
//     },
//     {
//       title: "Cooler Service",
//       image: "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghracdwe3451_1_.jpg"
//     },
//     {
//       title: "Inverter Installation",
//       image: "https://www.batteryestore.com/cdn/shop/products/single-battery-combo-rapid-1650-iltt-26060-220-ah-60-months-warranty-tubular-battery-1.png?v=1655538462"
//     }
//   ];

//   return (
//     <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-12">
//           <span className="block">Our Services</span>
//           <span className="block text-indigo-400">Professional Solutions for Your Home</span>
//         </h1>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div 
//               key={index}
//               className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//             >
//               <div className="aspect-w-16 aspect-h-9">
//                 <img 
//                   className="w-full h-64 object-cover"
//                   src={service.image} 
//                   alt={service.title}
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <button className="mt-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;


// import React from 'react';

// const OurServices = () => {
//   const services = [
//     {
//       title: "AC Service & Installation",
//       image: "https://static.wixstatic.com/media/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg/v1/fill/w_1000,h_580,al_c,q_85,usm_0.66_1.00_0.01/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg"
//     },
//     {
//       title: "Geyser Service & Installation",
//       image: "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Water-Heater/GHWERUPIR003_1.jpg"
//     },
//     {
//       title: "Refrigerator Service & Installation",
//       image: "https://www.lg.com/content/dam/channel/wcms/in/images/refrigerators/gl-s342spzy_apzzebn_eail_in_c/gallery/GL-S342SPZY-Refrigerators-Front-View-DZ-01.jpg"
//     },
//     {
//       title: "Light Fitting",
//       image: "https://www.homeserve.co.uk/-/jssmedia/hs-living/data/media/wp-attachments/2023/08/how-to-change-a-light-fitting.png"
//     },
//     {
//       title: "Cooler Service",
//       image: "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghracdwe3451_1_.jpg"
//     },
//     {
//       title: "Inverter Installation",
//       image: "https://www.batteryestore.com/cdn/shop/products/single-battery-combo-rapid-1650-iltt-26060-220-ah-60-months-warranty-tubular-battery-1.png?v=1655538462"
//     }
//   ];

//   return (
//     <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8">
//           <span className="block">Our Services</span>
//           <span className="block text-indigo-400 text-lg mt-2">Professional Solutions for Your Home</span>
//         </h1>
        
//         <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
//           {services.map((service, index) => (
//             <div 
//               key={index}
//               className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//             >
//               <div className="aspect-w-1 aspect-h-1">
//                 <img 
//                   className="w-full h-40 sm:h-48 object-cover rounded-t-xl"
//                   src={service.image} 
//                   alt={service.title}
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-sm sm:text-base font-bold text-white text-center">
//                   {service.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;


import React from 'react';

const OurServices = () => {
  const services = [
    {
      title: "AC Service & Installation",
      image: "https://static.wixstatic.com/media/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg/v1/fill/w_1000,h_580,al_c,q_85,usm_0.66_1.00_0.01/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg"
    },
    {
      title: "Geyser Service & Installation",
      image: "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Water-Heater/GHWERUPIR003_1.jpg"
    },
    {
      title: "Refrigerator Service & Installation",
      image: "https://www.lg.com/content/dam/channel/wcms/in/images/refrigerators/gl-s342spzy_apzzebn_eail_in_c/gallery/GL-S342SPZY-Refrigerators-Front-View-DZ-01.jpg"
    },
    {
      title: "Light Fitting",
      image: "https://www.homeserve.co.uk/-/jssmedia/hs-living/data/media/wp-attachments/2023/08/how-to-change-a-light-fitting.png"
    },
    {
      title: "Cooler Service",
      image: "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghracdwe3451_1_.jpg"
    },
    {
      title: "Inverter Installation",
      image: "https://www.batteryestore.com/cdn/shop/products/single-battery-combo-rapid-1650-iltt-26060-220-ah-60-months-warranty-tubular-battery-1.png?v=1655538462"
    }
  ];

  return (
    <div id="services">
    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8" >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8">
          <span className="block">Our Services</span>
          <span className="block text-indigo-400 text-lg mt-2">Professional Solutions for Your Home</span>
        </h1>
        
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4 group">
                <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img 
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
                  src={service.image} 
                  alt={service.title}
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white px-2">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurServices;