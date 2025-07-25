// /* eslint-disable no-undef */
// import React, { useState } from 'react';
// import { BiMinus } from "react-icons/bi";
// import { BsPlusLg } from "react-icons/bs";
// import { Helmet } from 'react-helmet-async'

// export const table = [
//   {
//     question: "TABLE OF CONTENTS",
//     answers: [
//       "Sree Ganapathy Tours and Travels",
//       "Akshaya Tours and Travels",
//       "Dream Holidays Coimbatore",
//       "Rathimeena Holidays",
//       "Grand Royal Tours",
//       "Trippy Wheels",
//       "Atlas Tours and Travels",
//       "Coimbatore Tour World",
//       "Classic Travel Service",
//       "Holiday Planners Coimbatore"
//     ],
//   },
// ];

// const Top10TravelAgencies = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Top 10 Travel Agencies in Coimbatore | Sree Ganapathy Tours</title>
//         <meta name='description' content='Explore the top 10 travel agencies in Coimbatore for your next vacation or business trip. Sree Ganapathy Tours and Travels leads the list with excellence.' />
//       </Helmet>

//       <div className='text-xl'>
//         <div className="mb-2 bg-gray-100 text-black" style={BannerImg}>
//           <div className="container py-28">
//             <div className="space-y-6 mx-auto">
//             </div>
//           </div>
//         </div>

//         <div className="ml-4">
//           <h1 className="text-center font-bold py-7 mr-2 max-w-[1400px] md:py-5 text-2xl md:text-3xl" style={{ color: 'orange' }}>
//             Top 10 Travel Agencies in Coimbatore
//           </h1>

//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Planning a vacation, pilgrimage, honeymoon, or business trip? Coimbatore is home to several reputed travel agencies that offer affordable, customized, and all-inclusive packages. <span style={{ color: 'orange' }}>Here’s a carefully curated list of the top 10 travel agencies in Coimbatore — led by the trusted Sree Ganapathy Tours and Travels.</span>
//           </p>

//           <section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
//             {table.map((item, index) => (
//               <SingleQuestion2 {...item} key={index} />
//             ))}
//           </section>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>1. Sree Ganapathy Tours and Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Sree Ganapathy Tours and Travels is a leading travel agency in Coimbatore, known for personalized service, timely execution, and great value. They specialize in domestic and international packages, corporate bookings, honeymoon trips, and pilgrimages.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>2. Akshaya Tours and Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             A trusted name in travel planning, Akshaya offers curated travel packages with special attention to customer comfort and affordability.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>3. Dream Holidays Coimbatore</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Dream Holidays brings your travel dreams to life with exotic destination packages, visa support, and 24x7 assistance.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>4. Rathimeena Holidays</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Known for reliable service and professional guides, Rathimeena offers great deals for family vacations and South India tours.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>5. Grand Royal Tours</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Grand Royal Tours caters to luxury travelers with upscale packages, five-star stays, and exclusive experiences.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>6. Trippy Wheels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             If you're into offbeat travel, Trippy Wheels is your go-to. They provide custom road trips, self-drive vacations, and group travel.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>7. Atlas Tours and Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Offering complete travel solutions, Atlas specializes in religious tourism, international tours, and visa arrangements.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>8. Coimbatore Tour World</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             A budget-friendly travel agency known for quick bookings and wide destination options in India and Southeast Asia.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>9. Classic Travel Service</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Classic Travel offers customized holiday packages and cruise bookings, with dedicated staff to guide you through the entire process.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>10. Holiday Planners Coimbatore</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             This agency is popular among young travelers for its modern booking experience and innovative travel itineraries.
//           </p>

//           <p className="text-justify ml-2 md:ml-4 max-w-[1400px] text-2xl mt-2 font-bold" style={{ color: 'orange' }}>Conclusion:</p>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             No matter your travel style or destination, these top-rated agencies in Coimbatore offer everything from luxury escapes to budget getaways. <strong>Sree Ganapathy Tours and Travels</strong> tops the list for their dedication, reliability, and wide-ranging services.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SingleQuestion2 = ({ question, answers }) => {
//   const [showAnswer, setShowAnswer] = useState(true);

//   return (
//     <div className="border border-black rounded-lg bg-primary md:width-320px width-500px">
//       <article className="flex items-center justify-between p-4 lg:p-6">
//         <h2
//           className="cursor-pointer text-center font-bold text-white"
//           onClick={() => setShowAnswer(!showAnswer)}
//         >
//           {question}
//         </h2>
//         <button onClick={() => setShowAnswer(!showAnswer)}>
//           {showAnswer ? <BiMinus className="text-white" /> : <BsPlusLg className="text-white" />}
//         </button>
//       </article>

//       {showAnswer && (
//         <article className="border-t border-black p-4 lg:p-6 font-bold text-white">
//           <ul>
//             {answers.map((answer, index) => (
//               <li key={index} style={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
//                 {answer}
//               </li>
//             ))}
//           </ul>
//         </article>
//       )}
//     </div>
//   );
// };

// export default Top10TravelAgencies;
