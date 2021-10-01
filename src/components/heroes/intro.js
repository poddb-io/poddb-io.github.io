import React from 'react'
import Thumbnail from '../../images/intro.svg';
import styled from 'styled-components'

const StyledIntro = styled.div`
`

const StyledGold = styled.p`
  font-weight: bold;
  color: #45CCF7;
`

const Intro = () => {
  return (
    <StyledIntro className="px-4 pt-5 my-5 text-center text-white">
      <h1 class="display-4 fw-bold">What is POD</h1>
      <div class="col-lg mx-auto p-5">
        <p class="lead mb-4 text-white text-opacity-75">
          POD stands for Public On-chain Database. 
          <br />
          It is a Web 3.0 data collaboration infrastructure, able to provide a standard way to define and modularize on-chain metadata and data schemas.
          <br />
          POD enables data management and on-chain objects categorization at the entire block chain network by creating a unified data environment and providing powerful data processing tools. 
          <br />
          This will reduce the difficulty of contract development while bring easy data collaboration. 
        </p>
        <StyledGold>
          Our Goal: Make it possible to collaborate at the data layer between different applications in the crypto ecosystem.
        </StyledGold>
      </div>
      <div class="overflow-hidden">
        <div class="container px-5">
          <img src={Thumbnail} class="img-fluid shadow-lg mb-4" alt="Example image" width="1027" height="167" loading="lazy" />
        </div>
      </div>
    </StyledIntro>
  )
}

export default Intro