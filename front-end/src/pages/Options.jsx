// import React, { useState } from 'react'
// import AnimatedLine from '../components/AnimatedLine'
// import { FaTwitter } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

// const Options = () => {

//   // Generate 30 records for demonstration.
//   const records = Array.from({ length: 30 }, (_, i) => ({
//     date: `2/${i + 3}/2024`, // Dates: 2/3/2024, 2/4/2024, etc.
//     percentage: Math.floor(Math.random() * 101), // Random percentage from 0 to 100.
//   }));

//   const [currentPage, setCurrentPage] = useState(0);
//   const record = records[currentPage];

//   const nextPage = () => {
//     if (currentPage < records.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };


//   return (
//     <div>
//       <AnimatedLine />
//       <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
//         <div className="bg-white shadow-xl rounded-lg p-6 w-11/12 max-w-md">
//           <div className="flex flex-col items-center">
//             {/* Profile Image */}
//             <img
//               className="w-32 h-32 rounded-full object-cover border-4 border-[#ed563b]"
//               src="https://via.placeholder.com/150"
//               alt="Profile"
//             />

//             {/* Name */}
//             <h1 className="mt-4 text-2xl font-bold text-gray-800">John Doe</h1>
//             {/* Bio */}
//             <div className="w-full max-w-md mx-auto p-4 bg-white shadow rounded mt-4">
//               {/* Header with Date and Percentage */}
//               <div className="flex justify-between items-center mb-2">
//                 <span className="font-semibold">Date: {record.date}</span>
//                 <span className="font-semibold">{record.percentage}%</span>
//               </div>
//               {/* Progress Bar */}
//               <div className="relative w-full h-4 bg-gray-300 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-[#ed563b] rounded-full"
//                   style={{ width: `${record.percentage}%` }}
//                 ></div>
//               </div>
//               {/* Pagination Controls */}
//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={prevPage}
//                   disabled={currentPage === 0}
//                   className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
//                 >
//                   Prev
//                 </button>
//                 <button
//                   onClick={nextPage}
//                   disabled={currentPage === records.length - 1}
//                   className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               </div>
//               <div className="mt-2 text-center text-sm text-gray-500">
//                 Record {currentPage + 1} of {records.length}
//               </div>
//             </div>


//             {/* Social Icons */}
//             <div className="flex space-x-4 mt-4">
//               <a href="https://twitter.com" className="text-blue-400 hover:text-blue-500 transition-colors">
//                 <FaTwitter size={24} />
//               </a>
//               <a href="https://github.com" className="text-gray-800 hover:text-gray-900 transition-colors">
//                 <FaGithub size={24} />
//               </a>
//               <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-800 transition-colors">
//                 <FaLinkedin size={24} />
//               </a>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Options


import React, { useState } from 'react'
import AnimatedLine from '../components/AnimatedLine'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Options = () => {

  const [currentMonth, setCurrentMonth] = useState(2); // starting with February (2)
  const [year, setYear] = useState(2024);

  const daysInMonth = 30; // assuming 30 days for demonstration
  const records = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    return {
      date: `${currentMonth}/${day}/${year}`,
      percentage: Math.floor(Math.random() * 101), // random percentage 0-100%
    };
  });

  const handleNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = year;
    if (newMonth > 12) {
      newMonth = 1;
      newYear++;
    }
    setCurrentMonth(newMonth);
    setYear(newYear);
  };

  return (
    <div>
      <AnimatedLine />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
        <div className="bg-white shadow-xl rounded-lg p-6 w-11/12 max-w-md">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <img
              className="w-32 h-32 rounded-full object-cover border-4 border-[#ed563b]"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />

            {/* Name */}
            <h1 className="mt-4 text-2xl font-bold text-gray-800">John Doe</h1>
            {/* Bio */}
            <div className="w-full max-w-lg mx-auto p-4 border-2 min-h-[100vh] h-[100vh] overflow-y-scroll">
              <h2 className="text-xl font-bold mb-4 text-center">
                Workout Progress for {currentMonth}/{year}
              </h2>
              <div className="space-y-4">
                {records.map((record, idx) => (
                  <div key={idx} className="border p-4 rounded shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Date: {record.date}</span>
                      <span className="font-semibold">{record.percentage}%</span>
                    </div>
                    <div className="relative w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#ed563b] rounded-full"
                        style={{ width: `${record.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleNextMonth}
                  className="px-4 py-2 bg-[#ed563b] text-white rounded hover:bg-[#e54427] transition-colors"
                >
                  Next Month
                </button>
              </div>
            </div>


            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com" className="text-gray-800 hover:text-gray-900 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-800 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Options

