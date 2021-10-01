import { createGlobalStyle, css } from 'styled-components'

const MEDIA_WIDTHS = {
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
    @media (max-width: ${MEDIA_WIDTHS[size]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const white = '#FFFFFF'
const black = '#000000'

export const theme = () => ({
  white,
  black,
  textColor: '#010101',

  // for setting css on <html>
  backgroundColor: '#F7F8FA',

  colors: {
    blue1: '#2172E5',
    blue2: '#A9C8F5',
    blue3: '#7DACF0',
    blue4: '#5190EB',
    blue5: '#2172E5',
    blue6: '#1A5BB6',
    blue7: '#144489',
    blue8: '#0E2F5E',
    blue9: '#191B1F',

    grey6: '#565A69',
    grey7: '#40444F',
    grey8: '#2C2F36',
    grey9: '#191B1F',

    grey1: '#FFFFFF',
    grey2: '#F7F8FA',
    grey3: '#EDEEF2',
    grey4: '#CED0D9',
    grey5: '#888D9B',

    white: '#FFFFFF',
    black: '#000000',

    green1: '#E6F3EC',
    green2: '#27AE60',

    pink1: '#FF007A',
    pink2: '#FF8EC4',
    pink3: '#FFD7EA',

    yellow1: '#F3BE1E',
    yellow2: '#ffe490',

    red1: '#FF6871',

    link: '#FF007A',
    invertedLink: '#FF007A'
  },

  shadows: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    large: '0px 6px 10px rgba(0, 0, 0, 0.15)',
    huge:
      ' 0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02), 0px 24px 32px rgba(0, 0, 0, 0.02)'
  },

  // media queries
  mediaWidth: mediaWidthTemplates,
  // css snippets
  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `
})

export const GlobalStyle = createGlobalStyle`
  /*
  * Globals
  */
  body {
    background-color: #141518;
  }
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }

  img {
    mix-blend-mode: lighten;
  }
`
