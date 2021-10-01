import React from 'react'
import Thumbnail from '../../images/doing.svg';
import Partner from '../../images/pod-dh.svg';

const Doing = () => {
  return (
    <div class="px-4 pt-5 my-5 text-center text-white">
      <h1 class="display-4 fw-bold">What Are We Doing</h1>
      <div class="overflow-hidden p-5">
        <div class="container px-5">
          <img src={Partner} class="img-fluid shadow-lg mb-4" alt="Example image" width="424.23" height="39.57" loading="lazy" />
          <img src={Thumbnail} class="img-fluid shadow-lg mb-4" alt="Example image" width="1027" height="167" loading="lazy" />
        </div>
      </div>
      <div class="col-lg-10 mx-auto">
        <p class="lead mb-4 text-white text-opacity-75">
          POD and DeHorizon launched the next generation NFT “DeMeta” - Interoperable, Editable and Evolvable ERC-721 NFT on September 29th, 2021.
          <br />
          At the sametime DeHorizon initially designed a set of NFT standard with POD.
        </p>
        <p class="lead mb-4 text-white text-opacity-75">
          POD, as a pioneering NFT Interoperability Middleware, contributes to building consensus interoperability for the future Metaverse, which allows relatively isolated NFT to make interconnection in Metaverse.
        </p>
      </div>
    </div>
  )
}

export default Doing