import React from "react";
import CountUp from "react-countup";
import "./Table.css";

function Table({ countries, casesType }) {
  return (
    <div className="table">
      {countries.map((data, i) => (
        <tr key={i}>
          <td>{data.country}</td>
          <td>
            <strong>
              <CountUp
                start={0}
                end={data[casesType]}
                duration={2.5}
                separator="."
              />
            </strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
