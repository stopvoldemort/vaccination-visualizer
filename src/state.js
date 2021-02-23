import React from "react";
import { HorizontalBarSeries } from "react-vis";
import shortid from "shortid";


export const State = ({ name, setHoverValue }) => {
  const onValueMouseOver = v => {
    setHoverValue({...v, x: v['x'] - 2.5})
  }

  return([
    <HorizontalBarSeries
      data={[{x: 5, y: name}]}
      onValueMouseOver={onValueMouseOver}
      key={shortid()}
    />,
    <HorizontalBarSeries
      data={[{x: 10, y: name}]}
      onValueMouseOver={onValueMouseOver}
      key={shortid()}
    />,
  ])
}
