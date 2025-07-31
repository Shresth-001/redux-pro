import { forwardRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const CalenderIconInput=forwardRef(({value,onClick,placeholder},ref)=>(
    <button
    className="bg-gray-200 text-gray-700 p-3 rounded-full mt-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
    onClick={onClick}
    ref={ref} 
    type="button"
    aria-label={placeholder || "Select date"} 
  >
    <FaCalendarAlt size={20} />
    {/* {value && <span className="ml-2">{value}</span>} */}
  </button>
))

export default CalenderIconInput;