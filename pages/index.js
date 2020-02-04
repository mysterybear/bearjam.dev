import { useTheme } from 'emotion-theming';
import React, { createElement } from 'react';
import tw from 'tailwind.macro';
import { SvgSun } from '../components';
import OptInForm from '../components/OptInForm';
import SvgBabaCloud from '../components/svg/SvgBabaCloud';
import SvgBabyCloud from '../components/svg/SvgBabyCloud';
import SvgBannerPath from '../components/svg/SvgBannerPath';
import { BackdropLayout } from '../layouts';
import { useMediaQuery } from 'beautiful-react-hooks';
import { css } from '@emotion/core';

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

const IndexPage = () => {
  const { colors } = useTheme();
  const clouds = ({ n, y, duration, dx, rx, ry, offset = 0 }) => {
    let last = {
      x: (-0.2) * (n*dx) + offset,
      y
    }
    return (
      <>
        {items(n).map(i => {
          let next = {
            x: last.x + dx + ran(rx),
            y: last.y + ranIn(-(ry/2), ry/2)
          };
          const el = (
            <SvgBabyCloud
              css={[ cloudStyles, css`top: 1rem;` ]}
              key={i}
              initial={{
                x: `${last.x}rem`,
                y: `${last.y}rem`,
                opacity: i === 0 ? 0 : i % 2 == 0 ? 0.2 : 0.7,
                scale: i === 0 ? 0.7 : i % 2 == 0 ? 0.7 : 1.2
              }}
              animate={{
                x: `${next.x}rem`,
                y: `${next.y}rem`,
                opacity: i === (n-1) ? 0 : i % 2 == 0 ? 0.7 : 0.2,
                scale: i === (n-1) ? 0.7 : i % 2 == 0 ? 1.2 : 0.7
              }}
              transition={{
                ease: [ 0.55, 0.45, 0.55, 0.45],
                duration,
                loop: Infinity
              }}
            />
          );
          last = next;
          return el;
        })}
      </>
    )
  }
  return (
    <div css={mainColumnStyles}>
      {clouds({ n: 3, y: 0, duration: 8, dx: 24, rx: 2, ry: 0.5, offset: 0 })}
      {clouds({ n: 4, y: 6, duration: 10, dx: 18, rx: 2, ry: 0.5, offset: -12 })}
      {clouds({ n: 5, y: 12, duration: 12, dx: 12, rx: 2, ry: 0.5, offset: 0 })}
      <SvgSun css={tw`h-24 xl:h-32 relative z-20`} fill={colors.yellow[400]} stroke={colors.gray[700]} animate={{ opacity: [0.9, 0.95, 0.9]}} transition={{ loop: Infinity, duration: 0.3, ease: [ 0.55, 0.45, 0.55, 0.45 ] }}/>
      <SvgBannerPath css={tw`h-12 xl:h-20 my-8 xl:my-10 relative z-40`} fill={colors.blue[100]} stroke={colors.gray[700]} />
      <OptInForm css={tw`h-10 mx-2 xl:mb-32 relative z-40`} />
    </div>
  );

}

IndexPage.Layout = BackdropLayout;

export default IndexPage;
