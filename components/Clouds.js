import React from 'react';
import SvgBabyCloud from './svg/SvgBabyCloud';
import SvgBabaCloud from './svg/SvgBabaCloud';
import tw from 'tailwind.macro';

const cloudStyles = tw`
  absolute
  h-10
`;

const initialClouds = [
  { x: -50, y: 50 },
  { x: 150, y: 200 },
];

const Clouds = () => {
  const variants = {
    initial: ({ x, y }) => ({ x, y }),
    to: ({ x, y, i }) => ({
      x: '100%',
      y: y,
      transition: {
        duration: (i+1)
      }
    })
  };

  return (
    <>
      {initialClouds.map((cloud, i) =>
        <SvgBabaCloud
          css={cloudStyles}
          variants={variants}
          initial="initial"
          custom={{ ...cloud, i }}
          key={i}
          animate="to"
      />)}
    </>
  );
}

export default Clouds;
