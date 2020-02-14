import { useTheme } from 'emotion-theming';
import React, { createElement, useState } from 'react';
import tw from 'tailwind.macro';
import { SvgSun } from '../components';
import OptInForm from '../components/OptInForm';
import SvgBabaCloud from '../components/svg/SvgBabaCloud';
import SvgBabyCloud from '../components/svg/SvgBabyCloud';
import SvgBannerPath from '../components/svg/SvgBannerPath';
import { BackdropLayout } from '../layouts';
import { useMediaQuery } from 'beautiful-react-hooks';
import { css } from '@emotion/core';
import { useAnimation } from 'framer-motion';

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
  h-16
  z-30
`;

const ran = x => Math.random() * x;
const ranIn = (x1, x2) => ran(x2 - x1) + x1;
const items = n => [...Array(n).keys()]
const Box = ({ as, children, ...props }) => createElement(as, props, children);

const IndexPage = () => {
  const { colors } = useTheme();
  const controls = useAnimation();
  const [d, setD] = useState(2);
  const [w, setW] = useState(30);

  const animations = [
    i => ({
      x: `${(w + (i*10)) / 2}vw`,
      transition: {
        duration: d / 2,
        ease: "linear"
      }
    }),
    i => ({
      x: `-${w + (i*10)}vw`,
      transition: {
        duration: 0,
      }
    }),
    i => ({
      x: `${w + (i*10)}vw`,
      transition: {
        duration: d,
        loop: Infinity,
        ease: "linear"
      }
    }),
  ].reduce((acc, v) => acc.then(async () => controls.start(v)), Promise.resolve());

  controls.start(animations);
  return (
    <div css={mainColumnStyles}>
      {items(2).map(i =>
        <Box
          as={i % 2 === 0 ? SvgBabaCloud : SvgBabyCloud}
          css={cloudStyles}
          initial={i => ({ x: i * 10 })}
          animate={controls}
          custom={i}
          key={i}
        />
      )}
      <SvgSun css={tw`h-24 xl:h-32 relative z-20`} fill={colors.yellow[400]} stroke={colors.gray[700]} animate={{ opacity: [0.9, 0.95, 0.9] }} transition={{ loop: Infinity, duration: 0.3, ease: [0.55, 0.45, 0.55, 0.45] }} />
      <SvgBannerPath css={tw`h-12 xl:h-20 my-8 xl:my-10 relative z-40`} fill={colors.blue[100]} stroke={colors.gray[700]} />
      <OptInForm css={tw`h-10 mx-2 xl:mb-32 relative z-40`} />
    </div>
  );

}

IndexPage.Layout = BackdropLayout;

export default IndexPage;
