import { useTheme } from 'emotion-theming';
import React from 'react';
import tw from 'tailwind.macro';
import { SvgSun } from '../components';
import OptInForm from '../components/OptInForm';
import SvgBabaCloud from '../components/svg/SvgBabaCloud';
import SvgBannerPath from '../components/svg/SvgBannerPath';
import { BackdropLayout } from '../layouts';

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
const ranIn = (x1, x2) => ran(x2-x1) + x1;
const items = n => [...Array(n).keys()]

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
    initial: ({ x, y }) => ({ x, y }),
    to: ({ x, y, i }) => ({
      x: x + 500,
      y: y + ranIn(-50, 50),
      transition: {
        duration: 10
      }
    })
  };
  return (
    <div css={[mainColumnStyles]} >
      {initialClouds.map((cloud, i) =>
        <SvgBabaCloud
          css={cloudStyles}
          variants={variants}
          initial="initial"
          custom={{ ...cloud, i }}
          key={i}
          animate="to"
      />)}
      <SvgSun css={[tw`h-24 xl:h-32 relative z-20`]} fill={colors.yellow[400]} stroke={colors.gray[700]} />
      <SvgBannerPath css={[tw`h-12 xl:h-20 my-8 xl:my-10 relative z-40`]} fill={colors.blue[100]} stroke={colors.gray[700]} />
      <OptInForm css={[tw`h-10 mx-2 xl:mb-32 relative z-40`]} />
    </div>
  );

}

IndexPage.Layout = BackdropLayout;

export default IndexPage;
