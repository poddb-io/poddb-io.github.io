import React from 'react'
import Pod from '../images/pod.svg';
import styled from 'styled-components'

const StyledHeader = styled.header`
  
`

const Header = () => {
  return (
    <StyledHeader className="d-flex flex-wrap justify-content-center py-3 mb-4 text-white">
      <a href="/" class="text-white d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img width="40" height="32" src={Pod} />
        <span class="fs-4">POD</span>
      </a>
      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-primary">Lite Paper</button>
      </div>
    </StyledHeader>
  )
}

export default Header