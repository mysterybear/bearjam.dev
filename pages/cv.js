import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CV from '../components/cv.mdx'
import tw from 'tailwind.macro';
import { css } from '@emotion/core'

const cvStyles = [
  css`
    article#resume {
      max-width: 60em;
      margin: 0 auto;
      border: 1px solid black;
    }
  `
]

const components = {
  wrapper: props => (
    <main css={cvStyles} {...props} />
  )
}

export default props => (
  <MDXProvider components={components}>
    <CV {...props}/>
  </MDXProvider>
)
