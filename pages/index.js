import { useTheme } from 'emotion-theming';
import React from 'react';
import tw from 'tailwind.macro';
import { SvgLeaf, SvgSun } from '../components';
import OptInForm from '../components/OptInForm';
import SvgBannerPath from '../components/svg/SvgBannerPath';
import SvgBackdrop from '../components/svg/SvgBackdrop';
import styled from '@emotion/styled';
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
  z-50
  max-w-xl
`;

const IndexPage = () => {
  const { colors } = useTheme();

  return (
    <div css={[mainColumnStyles]} >
      <SvgSun css={[tw`h-24 xl:h-32`]} fill={colors.yellow[400]} stroke={colors.gray[700]} />
      <SvgBannerPath css={[tw`h-12 xl:h-20 my-8 xl:my-10`]} fill={colors.blue[100]} stroke={colors.gray[700]} />
      <OptInForm css={[tw`h-10 mx-2 xl:mb-32`]} />
    </div>
  );

}

IndexPage.Layout = BackdropLayout;

export default IndexPage;
