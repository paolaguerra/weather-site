import React from "react";
import "./index.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import PropTypes from "prop-types";

export const Input = (props) => {
  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      name: "Chicago, IL",
      lat: 41.85,
      long: -87.65,
    },
    {
      id: 1,
      name: "New York, NY",
      lat: 40.71,
      long: -74.01,
    },
    {
      id: 2,
      name: "Los Angeles, CA",
      lat: 34.05,
      long: -118.24,
    },
    {
      id: 3,
      name: "Sacramento, CA",
      lat: 38.5737,
      long: -121.4871,
    },
    {
      id: 4,
      name: "Philadelphia, PA",
      lat: 39.95,
      long: 75.16,
    },
    {
      id: 5,
      name: "Cartersville, GA",
      lat: 34.1667371,
      long: -84.7989018,
    },
    {
      id: 6,
      name: "Miami, FL",
      lat: 25.7825453,
      long: -80.2994988,
    },
    {
      id: 7,
      name: "Seattle, WA",
      lat: 47.6131746,
      long: -122.4821479,
    },
    {
      id: 8,
      name: "Boston, MA",
      lat: 42.3145186,
      long: -71.1103681,
    },
    {
      id: 9,
      name: "Columbus, OH",
      lat: 39.9831302,
      long: -83.1309134,
    },
    {
      id: 10,
      name: "Nuuk, Greenland",
      lat: 64.1791399,
      long: -51.7418292,
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
