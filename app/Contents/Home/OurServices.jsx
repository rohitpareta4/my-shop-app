


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