import React from "react";
import "./Map.css";
import { Map as LeafLetMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";

function Map({ center, zoom, countries, casesType }) {
  return (
    <div className="map">
      <LeafLetMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafLetMap>
    </div>
  );
}

export default Map;
