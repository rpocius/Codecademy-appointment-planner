import React from "react";
import Tile from '../../tile/tile'

export const TileList = (props) => {

  function renderTiles(arr) {
    return arr.map(({ name, ...rest }, index) => {
      return <Tile name={name} description={rest} key={index} />
    });
  }

  return (
    <div>

    </div>
  );
};
