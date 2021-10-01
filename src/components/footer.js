import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  border-top: 0.5px solid #34384C;
`

const Footer = () => {
  return (
    <StyledFooter className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
      <p class="col-md-4 mb-0 text-muted">Cryptolly ©. All rights reserved.</p>

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">Term of Service</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">Privacy Policy</a>
        </li>
      </ul>
    </StyledFooter>
  )
}

export default Footer