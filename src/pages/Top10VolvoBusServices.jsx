// /* eslint-disable no-undef */
// import React, { useState } from 'react';
// import { BiMinus } from "react-icons/bi";
// import { BsPlusLg } from "react-icons/bs";
// import { Helmet } from 'react-helmet-async'

// export const table = [
//   {
//     question: "TABLE OF CONTENTS",
//     answers: [
//       "Sree Ganapathy Volvo Bus Services",
//       "KPN Travels",
//       "SRM Transports",
//       "Parveen Travels",
//       "ABT X Travels",
//       "Vivegam Travels",
//       "Royal Travels",
//       "Infant Jesus Travels",
//       "RKK Travels",
//       "Kallada Travels"
//     ],
//   },
// ];

// const Top10VolvoBusServices = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Top 10 Volvo Bus Services in Coimbatore | Sree Ganapathy Volvo</title>
//         <meta name='description' content='Explore the best Volvo bus services in Coimbatore for comfortable and safe travel. Book with Sree Ganapathy Volvo Buses and more.' />
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
//             Top 10 Volvo Bus Services In Coimbatore
//           </h1>

//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Volvo buses offer unmatched comfort, safety, and performance for long and short-distance travel. Coimbatore, being a major hub for intercity transportation, is served by several reputable Volvo operators. <span style={{ color: 'orange' }}>Here’s our curated list of the best 10 Volvo bus services in the city — starting with the leading name in the market:</span>
//           </p>

//           <section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
//             {table.map((item, index) => (
//               <SingleQuestion2 {...item} key={index} />
//             ))}
//           </section>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>1. Sree Ganapathy Volvo Bus Services</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Sree Ganapathy Volvo is the most preferred Volvo bus service in Coimbatore. Offering a fleet of luxury air-conditioned buses with professional drivers and punctual schedules, they ensure a relaxing and safe journey. Whether it's a business trip, vacation, or regular commute, their superior service quality makes them the top choice.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>2. KPN Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             KPN Travels has a long-standing reputation for reliability and coverage across South India. Their Volvo fleet connects Coimbatore to major cities with high standards of safety and comfort.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>3. SRM Transports</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Known for its punctual service and modern buses, SRM offers a premium Volvo experience with features like reclining seats, charging ports, and onboard entertainment.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>4. Parveen Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Parveen is a popular choice for its well-maintained Volvo fleet and quality service on routes to Chennai, Bangalore, and Kerala.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>5. ABT X Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             ABT X is known for its luxurious Volvo buses and excellent service on select intercity routes, with a focus on passenger safety and comfort.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>6. Vivegam Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Vivegam offers budget-friendly Volvo services with good connectivity and consistent customer satisfaction.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>7. Royal Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             With a wide network and reliable Volvo buses, Royal Travels is a preferred option for daily travelers and weekend getaways.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>8. Infant Jesus Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Infant Jesus Travels provides efficient Volvo bus services to popular destinations, combining affordability with quality.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>9. RKK Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             RKK is known for offering clean and punctual Volvo buses operating mainly in Tamil Nadu and Karnataka.
//           </p>

//           <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{ color: 'orange' }}>10. Kallada Travels</h1>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             Kallada is a leading name in interstate travel with Volvo services extending from Coimbatore to various destinations in Kerala and beyond.
//           </p>

//           <p className="text-justify ml-2 md:ml-4 max-w-[1400px] text-2xl mt-2 font-bold" style={{ color: 'orange' }}>Conclusion:</p>
//           <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
//             For a seamless and luxurious travel experience, Volvo buses remain a top choice. Whether you're traveling for business or leisure, these 10 services offer trustworthy and premium options. At the top of the list, Sree Ganapathy Volvo Bus Services continues to lead with unmatched professionalism and passenger satisfaction.
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

// export default Top10VolvoBusServices;
