import React, { useState } from "react";
import Style from "./Style";

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <>
    <div className="flex">
      <Style name='Location' options={['Option 1', 'Option 2', 'Option 3']} open={dropdownOpen} setOpen={setDropdownOpen} isFirst />
      <Style name='Property Size' options={['Option 1', 'Option 2', 'Option 3']} open={dropdownOpen} setOpen={setDropdownOpen} />
      <Style name='Price Range $' options={['Option 1', 'Option 2', 'Option 3']} open={dropdownOpen} setOpen={setDropdownOpen} />
    </div>
    <button>Search</button>
    </>
  );
};

export default App;
