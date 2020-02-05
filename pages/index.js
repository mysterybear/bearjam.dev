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
const ranIn = (x1, x2) => ran(x2 - x1) + x1;
const items = n => [...Array(n).keys()]

const IndexPage = () => {
  const { colors } = useTheme();

  let cols = 12,
    rows = 4,
    width = 3000,
    height = 400;

  return (
    <div css={mainColumnStyles}>
      {items(cols * rows).map(i => {
        let row = Math.floor(i / cols),
          col = i % cols,
          x = col == 0 ? 0 : (width / cols) * col,
          y = row == 0 ? 0 : (height / rows) * row,
          start = x - (width / 2),
          end = x + (width / 2),
          t = 2;

          console.log(x, y);

        return [
          <SvgBabaCloud
            key={`${i}a`}
            css={cloudStyles}
            initial={{
              x,
              y,
            }}
            animate={{
              x: end,
              y,
              transition: {
                duration: t,
                ease: "linear"
              }
            }}
          />,
          <SvgBabaCloud
            key={`${i}b`}
            css={cloudStyles}
            initial={{
              x: start,
              y,
            }}
            animate={{
              x: end,
              y,
              transition: {
                duration: t * 2,
                ease: "linear",
                loop: Infinity
              }
            }}
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
