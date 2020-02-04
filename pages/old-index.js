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
const interesting = x => x % 2 != 0 && x % 7 != 0;

const initialClouds = [
  // items(6).map(i => ({ y: i * (ranIn(60,100)), x: ranIn(-180, 180) }))
  { x: -180, y: 0 },
  { x: 0, y: 0 },
  { x: 180, y: 0 },
  { x: 360, y: 0 },
  // { x: 50, y: 50 },
  // { x: -50, y: 150 },
  // { x: 150, y: 150 },
  // { x: 250, y: 250 },
].flat();

const IndexPage = () => {
  const { colors } = useTheme();

  const variants = {
    initial: i => ({
      x: ((i % perRow) * 200) - ((Math.floor(i/perRow) % 2) * 100) - ranIn(1050,1150),
      y: Math.floor(i / perRow) * ranIn(90,110)
    }),
    dest: i => ({
      x: ((i % perRow) * 200) - ((Math.floor(i/perRow) % 2) * 100) + ranIn(550,650),
      y: Math.floor(i / perRow) * ranIn(90,110),
      transition: {
        duration: 2,
        ease: "linear"
      }
    }),
  }

  useInterval(() => {
  }, 1000)
  // const controls = useAnimation();

  // const perRow = 40;

  // useEffect(() => {
  //   controls.start(variants.dest).then(() => {
  //     controls.start(variants.initial, { duration: 0 }).then(() => {
  //       controls.start(variants.dest, { loop: Infinity, duration: 2, ease: "linear" })
  //     })
  //   })
  // });

  return (
    <div css={[mainColumnStyles]}>
      {/* {items(160).filter(interesting).map(i => <SvgBabaCloud
        css={cloudStyles}
        variants={variants}
        initial="initial"
        custom={i}
        key={i}
        animate={controls}
      />)} */}
      <SvgSun css={[tw`h-24 xl:h-32 relative z-20`]} fill={colors.yellow[400]} stroke={colors.gray[700]} />
      <SvgBannerPath css={[tw`h-12 xl:h-20 my-8 xl:my-10 relative z-40`]} fill={colors.blue[100]} stroke={colors.gray[700]} />
      <OptInForm css={[tw`h-10 mx-2 xl:mb-32 relative z-40`]} />
    </div>
  );

}

IndexPage.Layout = BackdropLayout;

export default IndexPage;