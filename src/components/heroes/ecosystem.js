import React from 'react'
import Thumbnail from '../../images/ecosystem.svg';

const Ecosystem = () => {
  return (
    <div class="px-4 pt-5 my-5 text-center text-white">
      <h1 class="display-4 fw-bold">Data Ecosystem</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4 text-white text-opacity-75">Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.</p>
      </div>
      <div class="overflow-hidden">
        <div class="container px-5">
          <img src={Thumbnail} class="img-fluid shadow-lg mb-4" alt="Thumbnail" width="1151.7" height="550.16" loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Ecosystem