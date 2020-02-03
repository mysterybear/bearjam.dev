import React from 'react';
import tw from 'tailwind.macro';
import { SvgSun, SvgLeaf, SvgBear, SvgMoon } from '../components';
import SvgBannerPath from '../components/svg/SvgBannerPath';
import OptInForm from '../components/OptInForm';
import { useTheme } from 'emotion-theming';
import Clouds from '../components/Clouds';

const mainColumnStyles = tw`w-full h-full bg-transparent flex flex-col flex-no-wrap items-center justify-center overflow-hidden sm:flex-none sm:w-2/3 md:w-1/2`;
const bearColumnStyles = tw`hidden sm:flex flex-auto h-full bg-yellow-500 justify-center items-center`;
const moonColumnStyles = tw`hidden md:flex flex-auto h-full bg-orange-500 justify-around items-center flex-col`;
const bearStyles = tw`h-40 md:h-48 lg:h-64`;

const IndexPage = () => {
  const { colors } = useTheme();

  return (
    <div css={tw`flex w-full h-full justify-center z-0`}>
      <div css={[ mainColumnStyles, tw`relative z-0 bg-blue-300` ]} >
        <Clouds />
        <SvgSun css={[tw`h-24 lg:h-40 lg:mt-6 z-0`]} fill={colors.yellow[400]} stroke={colors.gray[700]} />
        <SvgBannerPath css={[tw`h-12 mt-6 lg:h-20 lg:mt-12 z-20`]} fill={colors.blue[100]} stroke={colors.gray[700]} />
        <OptInForm css={tw`mt-6 z-20`} />
        <SvgLeaf css={tw`h-20 mt-8 lg:h-32 lg:mt-16 lg:mb-6 z-20`} />
      </div>
    </div>
  );

}

export default IndexPage;
