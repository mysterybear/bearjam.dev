import emotionTailwindPreflight from "emotion-tailwind-preflight";
import { css } from '@emotion/core';
import tw from 'tailwind.macro';

export const globalStyles = css`
  /* ${emotionTailwindPreflight}; */
  html,
  body {
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
    height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    ${tw`text-purple-800`}
  }
  body>div {
    height: 100%;
  }
`
