// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const BlogData = [
//   {
//     id: 1,
//     name: "top-10-cab-services-in-coimbatore",
//     text: "Here are the top 10 cab-services-in-coimbatore, known for their quality craftsmanship and exceptional service.",
//   },
//   {
//     id: 2,
//     name: "Top-10-volvo-bus-services-in-coimbatore",
//     text: "Here are the top 10 volvo-bus-services-in-coimbatore renowned for their creative excellence and transformative designs.",
//   },
//   {
//     id: 3,
//     name: "top-10-travel-agencies-in-coimbatore",
//     text: "Find the travel-agencies-in-coimbatore to ensure the best quality for your sports or recreational area.",
//   },
// ];

// const Blogpost = ({ handleOrderPopup }) => {
//   const navigate = useNavigate();

//   const handleReadMore = (id) => {
//     switch (id) {
//       case 1:
//         navigate("/blogs/top-10-cab-services-in-coimbatore");
//         break;
//       case 2:
//         navigate("/blogs/top-10-volvo-bus-services-in-coimbatore");
//         break;
//       case 3:
//         navigate("/blogs/top-10-travel-agencies-in-coimbatore");
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="ml-4">
//       {/* <Helmet>
//         <title>Blog &#124; Infratech Builders</title>
//         <meta
//           name="description"
//           content="Read Infratech Builders&#39; blogs to learn more about construction, interior, renovation and painting companies in Chennai."
//         />
//       </Helmet> */}
//       <h1
//         className="text-center font-bold py-7 mr-2 max-w-[1400px] md:py-5 text-2xl  md:text-5xl"
//         style={{ color: "orange" }}
//       >
//         BLOG POSTS
//       </h1>
//       <div className="py-14 mb-10">
//         <div className="container">
//           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5 place-items-center">
//             {BlogData.map((service) => (
//               <div
//                 key={service.id}
//                 className="rounded-2xl mt-20 bg-white/100 hover:bg-primary relative shadow-xl duration-high group max-w-[300px] h-[450px]"
//               >
//                 <div className="h-[150px]">{/* Image removed */}</div>
//                 <div className="p-4 text-center">
//                   <h1 className="text-xl font-bold">{service.name}</h1>
//                   <p className="py-2 text-gray-500 group-hover:text-white duration-high text-sm">
//                     {service.text}
//                   </p>
//                   <button
//                     className="bg-primary hover:scale-105 duration-300 text-white py-3 px-8 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
//                     onClick={() => handleReadMore(service.id)}
//                   >
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogpost;
