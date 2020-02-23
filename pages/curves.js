import React from 'react';
import { LinePath } from '@vx/shape'
import { useState } from 'react';
import { useEffect } from 'react';
import { curveCatmullRom } from '@vx/curve'
import Select from 'react-select';

const ran = x => Math.random() * x;
const ranIn = (x1, x2) => ran(x2 - x1) + x1;
const items = n => [...Array(n).keys()]

export default ({
  width = 800,
  height = 800
}) => {
  const viewBox = `0 0 ${width} ${height}`;
  const [vectors, setVectors] = useState([]);

  const randomVectors = n =>
    items(n).map(() => [ranIn(0, width), ranIn(0, height)]);

  useEffect(() => {
    setVectors(randomVectors(8));
  }, []);

  return (
    <>
      <svg width={width} height={height} viewBox={viewBox}>
        <LinePath
          data={vectors}
          x={([x, y]) => x}
          y={([x, y]) => y}
          stroke={'#000'}
          strokeWidth={1}
          curve={curveCatmullRom}
        />
      </svg>
      <Select
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]}
      />
    </>
  );
}
