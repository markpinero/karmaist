import React from 'react';
import {AreaChart, Area, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

export function WeeklyChart(props) {
  return (
     <ResponsiveContainer height={200}>
      <AreaChart data={props.data} margin={{top: 0, right: 0, bottom: 0, left: 0}}>
        <Area type="monotone" dataKey="total_completed" stroke="red" fill="pink" strokeWidth={5} dot={true} />
        <CartesianGrid />
        <ReferenceLine y={10} stroke="red" strokeDasharray="3 3" />
        <Tooltip />
        <XAxis dataKey="date" allowDataOverflow={true} />
        <YAxis />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default WeeklyChart;