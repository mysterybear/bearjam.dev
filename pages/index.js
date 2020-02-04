import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import React, { useEffect, useState, useRef } from 'react';
import tw from 'tailwind.macro';
import { SvgSun } from '../components';
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
// const interesting = x => x % 2 != 0 && x % 7 != 0;
const interesting = x => x;

const initialClouds = [
  { x: -180, y: 0 },
  { x: 0, y: 0 },
  { x: 180, y: 0 },
  { x: 360, y: 0 },
].flat();

const IndexPage = () => {
  const { colors } = useTheme();

  const transition = {
    duration: 10,
    loop: Infinity,
    ease: "linear"
  }

  const perRow = 12;

  const variants = {
    leftOffScreen: i => ({
      x: -2000 + (i * 10),
      y: i * 10,
      transition
    }),
    rightOffScreen: i => ({
      x: 2000 + (i * 10),
      y: i * 10,
      transition
    }),
    default: i => ({
      x: i * 10,
      y: i * 10,
      transition
    }),
  }

  return (
    <div css={mainColumnStyles}>
      {items(10).map(i => {
        const r = ranIn(1,5);
        return [
          <SvgBabaCloud
            key={`${i}a`}
            css={cloudStyles}
            variants={variants}
            custom={i*r}
            initial="default"
            animate="rightOffScreen"
          />,
          <SvgBabaCloud
            key={`${i}b`}
            css={cloudStyles}
            variants={variants}
            custom={i*r}
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
