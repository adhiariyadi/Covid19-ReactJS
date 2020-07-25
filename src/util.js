import React from "react";
import CountUp from "react-countup";
import { Circle, Popup } from "react-leaflet";

const casesTypeColor = {
  cases: {
    hex: "#0000FF",
    multipler: 800,
  },
  recovered: {
    hex: "#00FF00",
    multipler: 1200,
  },
  deaths: {
    hex: "#FF0000",
    multipler: 2000,
  },
};

export const sortData = (data, casesType) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a[casesType] > b[casesType] ? -1 : 1));
};

export const showDataOnMap = (data, casesType) =>
  data.map((country, i) => (
    <Circle
      key={i}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColor[casesType].hex}
      fillColor={casesTypeColor[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColor[casesType].multipler
      }
    >
      <Popup>
        <div className="info-container">
          <img
            className="info-flag"
            src={country.countryInfo.flag}
            alt={country.country}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Infected:{" "}
            <CountUp
              start={0}
              end={country.cases}
              duration={2.5}
              separator="."
            />
          </div>
          <div className="info-recovered">
            Recovered:{" "}
            <CountUp
              start={0}
              end={country.recovered}
              duration={2.5}
              separator="."
            />
          </div>
          <div className="info-deaths">
            Deaths:{" "}
            <CountUp
              start={0}
              end={country.deaths}
              duration={2.5}
              separator="."
            />
          </div>
        </div>
      </Popup>
    </Circle>
  ));
