import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  Hint
} from "react-vis";
import { tickValues } from "./tick_values"
import { State } from "./state";

export default function Chart() {
  const [hoverValue, setHoverValue] = useState(null);

  return (
    <XYPlot
      yType="ordinal"
      margin={{left: 100, right: 10, top: 50, bottom: 40}}
      width={600}
      height={300}
      stackBy="x"
    >
      <XAxis orientation="top" tickValues={tickValues} />
      <YAxis />
      <VerticalGridLines />
      {State({ name: "Alaska", setHoverValue: setHoverValue })}
      {hoverValue && (
        <Hint value={hoverValue}>
          <p>{hoverValue.x}</p>
        </Hint>
      )}
    </XYPlot>
  );
}
