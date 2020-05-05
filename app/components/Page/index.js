/**
 * Top level component of each page. This component renders the Meta
 * component, and provides global styles and themes to its children.
 */

import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import Meta from '../Meta'
import { FlexContainer } from '../styles/Container'
import SidebarColumn from '../SideBarColumn'
import Nav from '../Nav'
import theme, { GlobalStyle } from '../Theme'

class Page extends Component {
  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Meta />
        <FlexContainer>
          <Nav />
          {children}
          <SidebarColumn />
        </FlexContainer>
      </ThemeProvider>
    )
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
