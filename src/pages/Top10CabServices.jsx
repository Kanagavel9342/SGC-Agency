// /* eslint-disable no-undef */
// import React, { useState } from "react";
// import { BiMinus } from "react-icons/bi";
// import { BsPlusLg } from "react-icons/bs";
// import { Helmet } from "react-helmet-async";

// // eslint-disable-next-line react-refresh/only-export-components
// export const table = [
//   {
//     question: "TABLE OF CONTENTS",
//     answers: [
//       "Sree Ganapathy Cabs",
//       "Red Taxi",
//       "Go Taxi",
//       "Fasttrack Taxi",
//       "TaxiGo",
//       "Friends Track Call Taxi",
//       "Cabs India",
//       "Namma Auto",
//       "Ezi Drive",
//       "City Taxi Coimbatore",
//     ],
//   },
// ];

// const Top10CabServices = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Top 10 Cab Services in Coimbatore | Sree Ganapathy Cabs</title>
//         <meta
//           name="description"
//           content="Explore the best cab services in Coimbatore for safe, reliable, and comfortable travel. Book Sree Ganapathy Cabs and more."
//         />
//       </Helmet>

//       <div className="text-xl">
//         <div className="mb-2 bg-gray-100 text-black" style={BannerImg}>
//           <div className="container py-28">
//             <div className="space-y-6 mx-auto"></div>
//           </div>
//         </div>

//         <div className="ml-4">
//           <h1
//             className="text-center font-bold py-7 mr-2 max-w-[1400px] md:py-5 text-2xl md:text-3xl"
//             style={{ color: "orange" }}
//           >
//             Check Out The Top 10 Cab Services In Coimbatore
//           </h1>

//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             Whether you're commuting within the city or heading out on a long
//             trip, Coimbatore offers a variety of reliable cab services. From
//             24/7 availability to safety and comfort, these companies ensure your
//             travel experience is seamless. Discover the top 10 cab service
//             providers in Coimbatore that you can trust for both personal and
//             business travel needs.{" "}
//             <span style={{ color: "orange" }}>
//               Here’s your comprehensive list featuring the most trusted names in
//               the cab industry of Coimbatore:
//             </span>
//           </p>

//           <section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
//             {table.map((item, index) => (
//               <SingleQuestion2 {...item} key={index} />
//             ))}
//           </section>

//           <h1
//             className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2"
//             style={{ color: "orange" }}
//           >
//             1. Sree Ganapathy Cabs
//           </h1>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             Sree Ganapathy Cabs is Coimbatore's most trusted and top-rated cab
//             service provider. Known for their punctuality, customer-centric
//             service, and well-maintained vehicles, they offer everything from
//             airport transfers to outstation trips at competitive rates. With a
//             strong reputation for professionalism and safety, Sree Ganapathy
//             Cabs is the go-to choice for residents and visitors alike.
//           </p>

//           <h1
//             className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2"
//             style={{ color: "orange" }}
//           >
//             2. Red Taxi
//           </h1>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             Red Taxi is a popular name in Coimbatore, offering AC and Non-AC
//             taxis with transparent fares. Their well-trained drivers and
//             easy-to-use booking app make them a favorite among daily commuters
//             and travelers.
//           </p>

//           <h1
//             className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2"
//             style={{ color: "orange" }}
//           >
//             3. Go Taxi
//           </h1>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             Go Taxi is known for providing reliable 24/7 cab services with
//             affordable pricing in and around Coimbatore. Their service includes
//             airport pickups, drops, and outstation travel.
//           </p>

//           <h1
//             className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2"
//             style={{ color: "orange" }}
//           >
//             4. Fasttrack Taxi
//           </h1>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             Fasttrack is a well-established cab aggregator with a wide fleet in
//             Coimbatore. From economy rides to luxury sedans, they provide a
//             variety of travel options to suit every customer.
//           </p>

//           <h1
//             className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2"
//             style={{ color: "orange" }}
//           >
//             5. TaxiGo
//           </h1>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             TaxiGo offers professional taxi services with GPS-enabled vehicles,
//             experienced drivers, and 24/7 support, ensuring comfort and safety
//             on every ride.
//           </p>

//           <h1
//             className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2"
//             style={{ color: "orange" }}
//           >
//             6. Friends Track Call Taxi
//           </h1>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             A local favorite for fast and friendly service, Friends Track Call
//             Taxi offers hassle-free travel experiences at economical prices.
//           </p>

//           <h1
//             className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2"
//             style={{ color: "orange" }}
//           >
//             7. Cabs India
//           </h1>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             Cabs India is known for their clean fleet and courteous drivers.
//             Their booking is quick and their pricing is transparent, making them
//             a reliable travel partner in Coimbatore.
//           </p>

//           <h1
//             className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2"
//             style={{ color: "orange" }}
//           >
//             8. Namma Auto
//           </h1>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             While focused mainly on autos, Namma Auto has become a trusted
//             transport partner in Coimbatore for quick and low-cost city
//             commuting.
//           </p>

//           <h1
//             className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2"
//             style={{ color: "orange" }}
//           >
//             9. Ezi Drive
//           </h1>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             Ezi Drive provides outstation cabs and hourly packages for local
//             usage. Their well-trained drivers ensure safe and relaxed trips.
//           </p>

//           <h1
//             className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2"
//             style={{ color: "orange" }}
//           >
//             10. City Taxi Coimbatore
//           </h1>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             City Taxi Coimbatore offers budget-friendly and reliable cab
//             services for city rides and outstation journeys with round-the-clock
//             availability.
//           </p>

//           <p
//             className="text-justify ml-2 md:ml-4 max-w-[1400px] text-2xl mt-2 font-bold"
//             style={{ color: "orange" }}
//           >
//             Conclusion:
//           </p>
//           <p className="text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]">
//             Choosing the right cab service in Coimbatore can significantly
//             improve your travel comfort and efficiency. Whether it's a quick
//             city ride, an airport drop, or a long-distance journey, these top 10
//             cab companies deliver trustworthy and safe transportation. Sree
//             Ganapathy Cabs leads the way with unmatched service, making your
//             commute stress-free and enjoyable.
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
//           {showAnswer ? (
//             <BiMinus className="text-white" />
//           ) : (
//             <BsPlusLg className="text-white" />
//           )}
//         </button>
//       </article>

//       {showAnswer && (
//         <article className="border-t border-black p-4 lg:p-6 font-bold text-white">
//           <ul>
//             {answers.map((answer, index) => (
//               <li
//                 key={index}
//                 style={{ listStyleType: "disc", listStylePosition: "inside" }}
//               >
//                 {answer}
//               </li>
//             ))}
//           </ul>
//         </article>
//       )}
//     </div>
//   );
// };

// export default Top10CabServices;
