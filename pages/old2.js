import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import React, { useEffect, useState, useRef } from 'react';
import tw from 'tailwind.macro';
import { SvgSun, SvgBackdrop } from '../components';
import OptInForm from '../components/OptInForm';
import SvgBabaCloud from '../components/svg/SvgBabaCloud';
import SvgBannerPath from '../components/svg/SvgBannerPath';
import { BackdropLayout } from '../layouts';
import { useAnimation } from 'framer-motion';
import { useInterval } from 'beautiful-react-hooks';

const border = tw`border-2 border-red-500 border-solid`

const mainColumnStyles = tw`
  w-full
  flex
  flex-col
  items-center
  justify-center
  h-full
  pb-64
  max-w-xl
  relative
`;

const cloudStyles = tw`
  absolute
  inset-0
  h-10
  z-30
`;

const ran = x => Math.random() * x;
const ranIn = (x1, x2) => ran(x2 - x1) + x1;
const items = n => [...Array(n).keys()]

const IndexPage = () => {
  const { colors } = useTheme();

  const transition = {
    duration: 32,
    loop: Infinity,
    ease: "linear"
  }

  let cols = 12,
      rows = 4;

  const variants = {
    leftOffScreen: ({ row, col, offsetX, offsetY }) => ({
      x: -3000 + (col * offsetX),
      y: row * offsetY,
      transition
    }),
    rightOffScreen: ({ row, col, offsetX, offsetY }) => ({
      x: 3000 + (col * offsetX),
      y: row * offsetY,
      transition
    }),
    default: ({ row, col, offsetX, offsetY }) => ({
      x: col * offsetX,
      y: row * offsetY,
      transition
    }),
  }

  return (
    <div css={mainColumnStyles}>
      {items(cols*rows).filter(x => x % 7 != 0 && x % 2 != 0).map(i => {
        // let offsetX = ranIn(8,12) * 30;
        // let offsetY = ranIn(8,12) * 20;
        let offsetX = ranIn(280,320);
        let offsetY = ranIn(90,110);
        return [
          <SvgBabaCloud
            key={`${i}a`}
            css={cloudStyles}
            variants={variants}
            custom={{
              col: i % cols,
              row: Math.floor(i/cols),
              offsetX,
              offsetY
            }}
            initial="default"
            animate="rightOffScreen"
          />,
          <SvgBabaCloud
            key={`${i}b`}
            css={cloudStyles}
            variants={variants}
            custom={{
              col: i % cols,
              row: Math.floor(i/cols),
              offsetX,
              offsetY
            }}
            initial="leftOffScreen"
            animate="default"
          />
        ];
      }).flat()}
      <SvgSun css={tw`h-24 xl:h-32 relative z-20`} fill={colors.yellow[400]} stroke={colors.gray[700]} />
      <SvgBannerPath css={tw`h-12 xl:h-20 my-8 xl:my-10 relative z-40`} fill={colors.blue[100]} stroke={colors.gray[700]} />
      <OptInForm css={tw`h-10 mx-2 xl:mb-32 relative z-40`} />
    </div>
  );

}

IndexPage.Layout = BackdropLayout;

export default IndexPage;
