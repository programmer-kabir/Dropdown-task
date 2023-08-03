import React, { useEffect, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
const Style = ({ name, options, open, setOpen, isFirst  }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (open !== name) {
      setIsOpen(false);
    }
  }, [open]);

  const handleToggle = () => {
    setOpen(isOpen ? null : name);
    setIsOpen(!isOpen);
  };
//   const divClass = isFirst ? "relative border-2 border-blue-800 rounded-l-md inline-block text-left" : "relative border-2 border-blue-800 inline-block text-left";
const divClass = isFirst ? "relative border-2 border-blue-800 rounded-l-full inline-block text-left" : "relative border-r-2 border-t-2 border-b-2 border-blue-800 inline-block text-left";
  return (
    // <div>
    //   <div className={divClass}>
    //     <button
    //       type="button"
    //       onClick={handleToggle}
    //       className="inline-flex items-center gap-4 justify-center w-full rounded-md shadow-sm px-4 py-2  text-sm font-medium text-gray-700  "
    //       id="options-menu"
    //       aria-haspopup="true"
    //       aria-expanded="true"
    //     >
    //       {name}
    //       <BiSolidDownArrow className="-mr-1 ml-2 h-4 w-4 " color="blue" />
    //     </button>
    //     {isOpen && (
    //       <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5">
    //         <div
    //           className="py-1"
    //           role="menu"
    //           aria-orientation="vertical"
    //           aria-labelledby="options-menu"
    //         >
    //           {options.map((option, index) => (
    //             <a
    //               key={index}
    //               href="#"
    //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               role="menuitem"
    //             >
    //               {option}
    //             </a>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div>
      <div className={divClass}>
        <button
          type="button"
          onClick={handleToggle}
          className="inline-flex items-center gap-4 justify-center w-full rounded-md px-4 py-2  text-sm font-medium text-gray-700  "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {name}
          <BiSolidDownArrow className="-mr-1 ml-2 h-4 w-4 " color="blue" />
        </button>
        {isOpen ? (
          <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 transition-all duration-500 overflow-hidden max-h-96">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 transition-all duration-500 overflow-hidden max-h-0">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Style;
