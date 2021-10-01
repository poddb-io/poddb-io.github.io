import React from 'react'
import Thumbnail from '../../images/hero.png';
import styled from 'styled-components'

const StyledHeadline = styled.div`
  h1 {
    color: white;
  }

  h1 span {
    opacity: 0.8;
    margin-left: 0.5rem
  }

  p {
    color: #E5E6ED;
  }
`

const Headline = () => {
  return (
    <StyledHeadline className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={Thumbnail} class="d-block mx-lg-auto img-fluid" alt="Hero" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 text-white">
          P<span>ublic</span>
          <br />
          O<span>nchain</span>
          <br />
          D<span>atabase</span>
          <br />
        </h1>
        <p class="lead">Web 3.0 Data collaboration infrastrucrure</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Lite Paper</button>
        </div>
      </div>
    </StyledHeadline>
  )
}

export default Headline