import React from "react";
import "./index.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import PropTypes from "prop-types";

export const Input = (props) => {
  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      name: "Chicago",
      lat: 41.85,
      long: -87.65,
    },
    {
      id: 1,
      name: "New York",
      lat: 40.71,
      long: -74.01,
    },
    {
      id: 2,
      name: "Los Angeles",
      lat: 34.05,
      long: -118.24,
    },
    {
      id: 3,
      name: "Sacramento",
      lat: 38.5737,
      long: -121.4871,
    },
    {
      id: 4,
      name: "Philadelphia",
      lat: 39.95,
      long: 75.16,
    },
  ];

  const handleOnSelect = (item) => {
    // the item selected
    props.onSave(item);
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <div className="input">
      <header className="input-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            placeholder="Search a City"
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  );
};

Input.propTypes = {
  onSave: PropTypes.func.isRequired,
};
