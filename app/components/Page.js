/**
 * Top level component of each page. This component renders the Meta
 * component, Header, and provides global styles and themes to its
 * children.
 */

import React, { Component } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Meta from './Meta'
import { FlexContainer } from './styles/Container'
import SidebarColumn from './sidebar/SidebarColumn'
import Nav from './nav/Nav'

const theme = {
  fontFamily: '"Roboto", sans-serif',
  brand: '#1DA1F2',
  branddark: '#1a91da',
  brandlight: '#d8e8f2',
  black: '#000000',
  lightgray: '#E6ECF0',
  white: '#FFFFFF',
  gray: '#667887',
  offWhite: '#f5f8fa',
  maxWidth: '1282px',
  screenSizeLg: '1095px',
  screenSizeMd: '1005px',
  maxWidthTimeline: '600px',
  maxWidthNav: '275px',
  timelinePadding: '15px',
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.3125;
    font-family: ${(props) => props.theme.fontFamily};
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.brand};
  }
  a:hover {
    color: ${(props) => props.theme.brand};
    text-decoration: underline;
    cursor: pointer;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  .active-link {
    color: ${(props) => props.theme.brand} !important;
  }
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Meta />
        <FlexContainer>
          <Nav />
          {this.props.children}
          <SidebarColumn />
        </FlexContainer>
      </ThemeProvider>
    )
  }
}

export default Page
