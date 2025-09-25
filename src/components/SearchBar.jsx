import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Buscar contacto..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;
