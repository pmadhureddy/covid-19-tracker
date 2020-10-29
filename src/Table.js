import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  console.log(countries);
  return (
    <div className="table">
      {countries.map(({ country, cases, countryInfo }) => (
        <tr>
          <td>
            <img
              style={{ width: "30px", height: "30px", objectFit: "contain" }}
              src={countryInfo.flag}
              alt=""
            />
          </td>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
