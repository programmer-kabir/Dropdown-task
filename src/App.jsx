import React, { useState } from "react";
import Style from "./Style";

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <>
      <div className="flex">
        <Style
          name="Location"
          options={["Option 1", "Option 2", "Option 3"]}
          open={dropdownOpen}
          setOpen={setDropdownOpen}
          isFirst
        />
        <Style
          name="Property Size"
          options={["Option 1", "Option 2", "Option 3"]}
          open={dropdownOpen}
          setOpen={setDropdownOpen}
        />
        <Style
          name="Price Range $"
          options={["Option 1", "Option 2", "Option 3"]}
          open={dropdownOpen}
          setOpen={setDropdownOpen}
        />
        <div className="pl-5">
          <button className="bg-orange-500  rounded-full text-white px-9 py-2">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
