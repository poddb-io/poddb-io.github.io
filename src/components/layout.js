import * as React from 'react'
import Header from './header'
import Footer from './footer'
import { StyledThemeProvider } from '../styles/themeManager'

const Layout = ({ children }) => {
  return (
    <StyledThemeProvider>
      <div class="container">
        <Header />
        <main class="px-3">
          {children}
        </main>
        <Footer />
      </div>
    </StyledThemeProvider>
  )
}

export default Layout