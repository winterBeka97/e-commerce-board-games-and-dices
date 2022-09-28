import React from 'react'
import Link from 'next/link';

import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="banner-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <h1>{heroBanner.largeText2}</h1>
        <div className="hero-banner-image-container">
          <img src={urlFor(heroBanner.image)} alt="test-prop-catan" className="hero-banner-image"/>
        </div>
      </div>
      <div className="hero-banner-container-button-desc">
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>{heroBanner.product}</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner