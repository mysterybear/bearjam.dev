import React from 'react';
import SvgBabyCloud from './svg/SvgBabyCloud';
import { css } from '@emotion/core';
import tw from 'tailwind.macro';
import { useTheme } from 'emotion-theming';

const ranIn = (a, b) => (Math.random() * (b - a)) + a;
const items = n => [...Array(n).keys()].map(x => x + 1)
const cloudStyles = css`
  ${tw`h-16 z-10`};
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
`;

const cloud = y => {

  const { colors } = useTheme();

  return <SvgBabyCloud
    key={y}
    animate={{
      x: [`-${ranIn(4, 12)}rem`, `${ranIn(30,60)}rem`],
      y: [`${ranIn(y, y+2)*0.3}rem`, `${ranIn(y, y*2)*0.3}rem`],
      opacity: [0, 0.8, 0.9, 0.8, 0],
      scale: [ranIn(0.66, 1.66), 1, ranIn(0.66, 1.66)]
    }}
    transition={{
      loop: Infinity,
      duration: ranIn(10, 20),
      delay: ranIn(0, 10)
    }}
    css={cloudStyles}
    stroke={colors.gray[500]}
    fill={colors.gray[300]}
  />;
}

const Clouds = () => {

  return (
    <>
      {items(8).filter(x => x % 3 !== 0).map(k => cloud((ranIn(k, k + 1) * 5)))}
    </>
  );
}

export default Clouds;
